---
title: promise
date: 2020-03-13 20:43:27
---

JavaScript 是屬於同步的程式語言，一次僅能做一件事情，但遇到非同步的事件時，就會將非同步的事件移動到事件儲列，等到所有的原始碼運行完以後才會執行非同步的事件。

`Promise` 是在 `ES6` 出現的語法，是用來改善 `JavaScript` 非同步的語法結構，而 `ES7` `Async`、`Await` 可以基於 `Promise` 讓非同步的語法的結構類似於 “同步語言”，更易讀且好管理。

標準的 Promise 共有三種狀態 ([MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)):

{% note primary %}
- pending(等待中)：為初始之狀態，即不是 fulfilled 也不是 rejected。
- fulfilled(實現)：表示操作完成，又稱 resolved。
- rejected(拒絕)：表示操作失敗。
{% endnote %}

## 生命週期

{% asset_img js-promise.svg %}
`Promise` 的生命週期：
1. 每個 `Promise` 都會經過 `pending` 狀態
1.  `pending` 後分別會有成功時的 `fulfill` ，及失敗時的 `reject` 。
1. 透過 `.then()` 在成功時接著處理資料，或是以 `.catch()` 做失敗時的應對。
1. 也可以再 `return` 一個新的 `Promise` 延續處理。

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
new Promise( /* executor */ function(resolve, reject) { ... } );
```
</div>

```javascript
const promise = new Promise((resolve, reject) => {
  //成功時執行
  resolve(value);
  //失敗時執行
  reject(value);
});

promise
  .then(value=>{
      //成功的話，做...
    }, value => {
      //失敗的話，做...
    });

promise
  .then(value => {
    return value;
  })
  .catch(err) {
    //如果有還沒處理的失敗，做...
  }
```

<dl>
  <dt>executor</dt>
  <dd><li>為一個依序接收兩個參數的函式：<code>resolve</code> 及 <code>reject</code>（實現及拒絕回呼函式）。</li></dd>
  <dd><li><code>executor</code> 函式在傳入參數 <code>resolve</code> 與 <code>reject</code> 後會立刻執行（會在 <code>Promise</code> 建構式回傳 <code>Promise</code> 物件前被執行）。</li></dd>
  <dd><li><code>resolve</code> 與 <code>reject</code> 函式，會在被個別呼叫時，個別執行。</li></dd>
  <dd><li>成功完成後執行 <code>resolve</code> 以完成 <code>Promise</code>；或如果有錯誤，執行 <code>reject</code>。</li></dd>
</dl>

## 執行順序

{% note primary %}
非同步(異步)任務可分為 `task` 和 `microtask` 兩類。
><font size="3">另外在 ES2015 規範中稱為 `microtask` 又被稱為 `Job`。</font>

- (macro)task 主要包含：`script`(整體代碼)、`setTimeout`、`setInterval`、`I/O`、`UI交互事件`、`postMessage`、`MessageChannel`、`setImmediate`(Node.js 環境)。
- microtask(Job) 主要包含：`Promise.then`、`MutaionObserver`、`process.nextTick`(Node.js 環境)。
- microtask(Job) 執行的順位較 task queue 高。
{% endnote %}

```javascript
console.log('script start');

setTimeout(function() {
  console.log('timeout1');
}, 10);

new Promise(resolve => {
    console.log('promise1');
    resolve();
    setTimeout(() => console.log('timeout2'), 10);
}).then(function() {
    console.log('then1')
})

console.log('script end');
```
<img src="/blog/promise/index/promise_async.PNG" alt="">
{% note success %}
1. 遇到了 `console` 語句，直接輸出 `script start`。輸出之後，script 任務繼續往下執行，遇到 `setTimeout`，`setTimeout` 為一個 task queue，會先將其任務移往 event queue 中。
1. 遇到 `Promise` 實例。`Promise` 構造函數中的第一個參數，是在 new 的時候執行，構造函數執行時，裡面的參數進入執行堆疊執行；而後續的 `.then` 則會被分發到 microtask 的 Promise 隊列中去。所以會先輸出 `promise1`，然後執行 `resolve`，將 `then1` 分配到對應隊列。
構造函數繼續往下執行，又碰到 `setTimeout`，然後將對應的任務分配到對應 event queue 中。
1. script任務繼續往下執行，最後只有一句輸出了 `script end`，至此，全局任務就執行完畢了。
1. 每次執行完一個 `macrotask` 之後，會去檢查是否存在 `Microtasks`；如果有，則執行 `Microtasks` 直至清空 Microtask Queue。
此時，只有 `Promise` 隊列中的一個任務 `then1`，因此直接執行，執行結果輸出 `then1`。當所有的 `microtast` 執行完畢之後，表示第一輪的循環就結束了。
1. 開始第二輪的循環。第二輪循環仍然從 `macrotask` 開始。此時，有兩個 `macrotask`：`timeout1` 和 `timeout2`。
1. 取出 `timeout1` 執行，輸出 `timeout1`。此時 event queue 中已經沒有可執行的任務了。
1. 開始第三輪循環。第三輪循環依舊從 `macrotask` 開始。此時 `macrotask` 中只有一個 `timeout2`，取出直接輸出。
{% endnote %}

## return Promise

另一種寫法，`return` 一個 `Promise` 值，在這種情況下，放在 `return` 中的 `Promise` 會「立即」被解開，由那個 `Promise` 的 `fulfillment` 或 `rejection` 作為解析結果傳遞給下一個 `then`。

```javascript
const promise = new Promise((resolve, reject) => {
  resolve(50);
});

promise
  .then(v => {
    console.log(v);   
    return new Promise((resolve, reject) => {
      resolve(v * 2);
    });
  })
  .then(v => {
    console.log(v);   
  });

// 50
// 100
```

## 觀念
```javascript
new Promise(resolve => {
	resolve(1);
	Promise.resolve().then(() => console.log(2));
	console.log(3);
}).then(t => console.log(t));

console.log(4);
```
{% note warning %}
<img src="/blog/promise/index/promise_test_1.PNG" alt="">
{% endnote %}
{% note success %}
1. 執行 `promise` 建構函式，會先輸出 `console.log(3)` ， 而 `console.log(2)` & `console.log(t)` 會先移至 microtask 等待執行。
1. 輸出 `console.log(4)`。全局任務執行完畢。
1. 執行 microtask 內的任務，先輸出 `console.log(2)` 在輸出 `console.log(1)`
    - `Promise.resolve` 方法允許調用時不帶參數，直接返回一個 resolved 狀態的 Promise 對象。立即 resolved 的 Promise 對象，是在本輪“事件循環”（event loop）的結束時，而不是在下一輪“事件循環”的開始時。
    - 所以，`console.log(2)` 比 `console.log(1)` 會先進入 microtask 的 Promise 隊列。
1. 代碼執行完畢。
{% endnote %}

---

```javascript
new Promise(resolve => {
  resolve(1);
  Promise.resolve()
    .then(() => {
      console.log(2); 
      return 'A';
    })
    .then(data => 
      console.log(data)
    );
  console.log(3);
})
  .then(t => 
    console.log(t)
  )
  .then(() => 
    console.log('B')
  );

console.log(4);
```
{% note warning %}
<img src="/blog/promise/index/promise_test_2.PNG" alt="">
{% endnote %}
{% note success %}
1. 
1. 
1. 
1. 
{% endnote %}

## Promise API

1. `Promise.all( [promise1, promise2, …] )`
`Promise.all` 接受一個promise陣列，會在陣列中的promise都傳回fulfillment訊號後，執行下面的then的第一個function (成功)，傳遞給then的參數是一個帶有解析值的陣列，如果有其中一個訊號是rejection，就會執行then第二個function (失敗)。

1. `Promise.race( [promise1, promise2, …] )`
`promise.race` 接受一個陣列，會在收到第一個訊號(無論是fulfillment或是rejection)後執行下面的then，不管其他之後才收到的訊號。

1. `Promise.resolve()`
{% note info %}
`Promise.resolve(value);`
`Promise.resolve(promise);`
`Promise.resolve(theanable);`
這三種形式都會產生一個新的Promise。其中：
  {% note success no-icon%}
  <font size="3">
  第一種形式提供了自定義Promise的值的能力，它與<code>Promise.reject(reason)</code>對應。兩者的不同，在於得到的Promise的狀態不同。

  第二種形式，提供了創建一個Promise的副本的能力。

  第三種形式，是將一個類似Promise的對象轉換成一個真正的Promise對象。它的一個重要作用是將一個其他實現的Promise對象封裝成一個當前實現的Promise對象。例如你正在用bluebird，但是現在有一個Q的Promise，那麼你可以通過此方法把Q的Promise變成一個bluebird的Promise。

  實際上第二種形式可以歸在第三種形式中。
  </font>
  {% endnote %}
{% endnote %}


## 參考

[從一道題淺說 JavaScript 的事件循環](https://github.com/dwqs/blog/issues/61)
[自己動手實現 ES6 Promise](https://github.com/whinc/blog/issues/2)
[promise-介紹與使用](https://medium.com/@xyz030206/promise-介紹與使用-66605ef56e34)