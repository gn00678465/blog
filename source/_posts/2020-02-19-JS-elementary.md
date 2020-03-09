---
title: JavaScript 入門篇
categories:
  - JavaScript
tags:
  - JavaScript
date: 2020-02-19 20:39:01
---
{% asset_img javascript.png JavaScript入門篇%}
<!--more-->


# 控制判斷

## if

### 單條件

<div class="codeBox">
  <div class="ribbon">Syntax</div>
{% codeblock lang:javascript line_number:false %}
if (判斷式) {
  陳述式 1
} else {
  陳述式 2
}
{% endcodeblock %}
</div>

{% note info %}
當 `()` 內的判斷式成立時，便會執行 `{}` 內的陳述式 1 ，否則會執行 `else{}` 內的陳述式 2。
{% endnote %}

### 多條件
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
if (判斷式A) {  陳述式 1 }
else if (判斷式B) {  陳述式 2 } 
...
else {  陳述式 3  }
```
</div>

{% note info %}
1. 當 `(判斷式A)` 成立時，便會執行 `{陳述式 1}`。
1. 當 `(判斷式A)` 不成立但 `(判斷式B)` 成立時，便執行 `{陳述式 2}`。
1. 當所有判斷式皆不成立，便執行 `else{}` 內的陳述式 3。

- 可設立多於1組以上的條件。
{% endnote %}

## switch

{% note success no-icon %}
控制判斷中的邊緣人。
當 `if` ... `else if` 條件太多的狀況下，可以使用 `switch`
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
switch (expression) {
  case value1:
    //當 expression 的值符合 value1
    //要執行的陳述句
  break;
  case value2:
    //當 expression 的值符合 value2
    //要執行的陳述句
  break;
  ...
  default:
    //當 expression 的值都不符合上述條件
    //要執行的陳述句
  break;
}
```
</div>

{% note info %}
1. 設定一個表達式 `switch()`，且包含一個條件。
1. case: 比對 case 的 value，當符合就會執行與此條件相關的陳述式。
1. default: 當所有條件皆未成立時，便會執行 default，default 不一定要放在最後位置。
1. break: 阻止已完成的區塊繼續執行。
{% endnote %}

# 迴圈

{% note primary %}
迴圈提供一個快速又簡潔的方法來重複地做某件事。
{% endnote %}

## for 迴圈
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( [初始表達式] ; [條件式] ; [遞增表達式]) {
  陳述式
}
```
</div>

{% note info %}
- 迴圈內須以 `;` 區分各個條件。
1. 初始表達式 - 代表初始狀態，可為 1個 或 多個，這個表達式也能用來宣告變數。
1. 條件式 - 如果評估出的值為true，便會執行陳述式的內容。但如果評估出的值為false，這個for迴圈便會中止。
1. 遞增表達式 - 會在陳述式每次被執行後執行。
{% endnote %}

## for array

{% note success no-icon %}
迴圈與陣列搭配使用。
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( let i = 0 ; i < array.lengh ; i++ ) {
  陳述式
}
```
</div>

## for if

{% note success no-icon %}
迴圈與 if 判斷式搭配使用。
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( let i = 0 ; i < array.lengh ; i++ ) {
  if ( 判斷式 ) {
    if 陳述式
  }
  for 陳述式
}
```
</div>

## for break

{% note success no-icon %}
迴圈與 break 搭配使用。
當達到某條件的情況下，迴圈就會中斷。
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( let i = 0 ; i < array.lengh ; i++ ) {
  if ( 判斷式 ) {
    if 陳述式
    break;
  }
  for 陳述式
}
```
</div>

# DOM

**DOM**( **Document Object Model** )中文為 **文件物件模型。**
>在DOM的標準下，一份文件中所有的標籤定義，包括文字，都是一個物件，這些物件以文件定義的結構，形成了一個樹狀結構。

{% note info%}
樹狀結構：
- 根（root）：結構的開端，或稱為根結點。
- 節點（Node）：樹狀結構中的基本單位。
- 分支（branch）：節點之間的連結，節點與分支形成樹狀。
- 子節點（child）：根節點之外的節點。
- 葉節點（Leaf）：沒有連結到其他子節點的節點。

{% endnote %}

## DOM解析
```html
<html>
  <head>
    <title>首頁</title>
  </head>
  <body>
    <h1>Hello!World!</h1>
    <a href="#">學習筆記</a>
  </body>
</html>
```
{% mermaid graph TD %}
	A(document) --> B[Root element<br>&#60;html&#62;]
	B --> C[Element:<br>&#60;Head&#62;]
  C --> D[Element:<br>&#60;Title&#62;]
  D --> E[Text:<br>'首頁']
  B --> F[Element:<br>&#60;Body&#62;]
  F --> G[Element:<br>&#60;H1&#62;]
  G --> H[Text:<br>'Hello!World!']
  F --> I[Element:<br>&#60;a&#62;]
  I --> J[Text:<br>'學習筆記']
  I --> L[Attribute:<br>'href']
  style A fill:#27ae60,stroke-width:0
{% endmermaid %}

- **document**：{%label danger@document代表整個文件，而不代表html節點%}。
- **Element**：是所有標籤（也是節點），包含、等等各種 HTML Tag。
- **Text**：指被標籤包起來的文字元素（也是節點）。
- **Attribute**：指各個標籤內的相關屬性。

## 為何需要DOM

{% note primary %}
With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

{% endnote %}

DOM 是 **W3C (World Wide Web Consortium)** 所制訂的標準。
**W3C聯合各瀏覽器廠商制訂了標準物件模型，讓瀏覽器可以按照這些標準去設計，DOM 就是其中的一個定義。**
DOM標準分成了3個部分。

- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents

{% asset_img dom-architecture.png%}
圖片來源：http://www.w3.org/TR/DOM-Level-3-Core/introduction.html

## HTML DOM

- The HTML elements as **objects**
- The **properties** of all HTML elements
- The **methods** to access all HTML elements
- The **events** for all HTML elements

**換句話說，HTML DOM 是一個該如何取得、改變、新增、刪除 HTML元素的標準。**

## HTML DOM 操作

<div class="timeline">
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">document.getElementById(id)</dt>
    <dd class="timeline--entry__detail">找尋 DOM 中符合此 id 名稱的元素，並回傳相對應的 element。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">document.getElementsByTagName(name)</dt>
    <dd class="timeline--entry__detail">找尋 DOM 中符合此 tag 名稱的所有元素，並回傳相對應的 element 集合，集合為 <code>HTMLCollection</code>。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">document.getElementsByClassName(name)</dt>
    <dd class="timeline--entry__detail">找尋 DOM 中符合此 class 名稱的所有元素，並回傳相對應的 element 集合，集合為 <code>HTMLCollection</code>。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">document.querySelector(selector)</dt>
    <dd class="timeline--entry__detail">利用 selector 來找尋 DOM 中的元素，並回傳相對應的第一個 element。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">document.querySelectorAll(selector)</dt>
    <dd class="timeline--entry__detail">利用 selector 來找尋 DOM 中的所有元素，並回傳相對應的第一個 element ，集合為 <code>NodeList</code>。</dd>
  </dl>
</div>

**HTMLCollection** 以及 **NodeList 的差異**

<dl>
  <dt><code>HTMLCollection</code></dt>
  <dd>{% asset_img HTMLCollection.jpg%}</dd>
  <dt><code>NodeList</code></dt>
  <dd>{% asset_img NodeList.jpg%}</dd>
</dl>

1. `HTMLCollection` 為 **HTML element 的集合。**
1. `NodeList` 為 **Node 的集合。**
1. `HTMLCollection` & `NodeList` 幾乎相同。
1. 兩者皆為類陣列，並繼承於 `objects` 。
1. 兩者皆有 `length` 屬性。
1. `HTMLCollection` 有 `namedItem` （根據 ID & Name 篩選元素）的方法。
1. `NodeList` 則有 `entries`, `forEach`, `item`, `keys`, `values` 5個方法。

## 增加節點

<div class="timeline">
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">innerHTML</dt>
    <dd class="timeline--entry__detail">
    透過 innerHTML 可以取得或設定 HTML Code 中的元素，也可以單純的將字串寫入 HTML Code 的某一個部分。
    <font color="red">盡量避免使用。</font>
    </dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">textContent</dt>
    <dd class="timeline--entry__detail">表示節點或其後代的文字內容。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">createElement</dt>
    <dd class="timeline--entry__detail">可以依指定的標籤名稱（<code>tagName</code>）建立 HTML 元素，或是在未定義標籤名稱下建立一個 HTMLUnknownElement。</dd>
  </dl>
</div>

# event 事件

<div class="codeBox">
  <div class="ribbon">Syntax</div>
{% codeblock lang:javascript line_number:false %}
target.addEventListener(type, listener[, options]);
{% endcodeblock %}
</div>

<div class="timeline">
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">type</dt>
    <dd class="timeline--entry__detail">
    表示所監聽的 <a href="https://www.w3schools.com/jsref/dom_obj_event.asp" target="_blank"><span>event type</span></a> 名稱之字串。
    </dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">listener</dt>
    <dd class="timeline--entry__detail">
    當監聽的事件觸發時指定執行的函式，也稱為 callback function 。
    </dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">options</dt>
    <dd class="timeline--entry__detail">
    可選。預設值為：false。
    <ol>
      <li>false：Event Bubble - 事件冒泡：從指定元素往外層尋找。</li>
      <li>true：Event Capture - 事件捕捉：從最外層向內層尋找指定元素。</li>
    </ol>
    </dd>
  </dl>
</div>

## capturing & bubbling 的差異
{% note primary %}
這其實是在講 DOM 裡面事件傳遞的順序。
假如在兩個元素上面都加了`eventListener`，哪一個會先執行？此時，知道事件的執行順序就很重要。
{% endnote %}

- <font size="4">Event bubbling - 事件冒泡</font>
  {% note success no-icon %}
  當 DOM 事件在傳播時，從`target`往上從子節點一路逆向傳回去根節點，此時就叫做`BUBBLING_PHASE`，也就是冒泡階段。
  {% endnote %}
- <font size="4">Event capturing - 事件捕捉</font>
  {% note danger no-icon %}
  當 DOM 事件在傳播時，會先從根節點開始往下傳遞到`target`，這邊如果加上事件的話，就會處於`CAPTURING_PHASE`，捕獲階段。
  {% endnote %}

## 事件的三個 Phase

{% asset_img eventflow.png %}

{% note success %}
1. 當點下 `td` 時，這一個點擊的事件會先從 `window` 開始往下傳遞，直到傳到 `td` 為止，此階段稱為 `CAPTURING_PHASE`，捕獲階段。
1. 接著事件傳遞到 `td` 本身，此階段稱為 `AT_TARGET`。
1. 最後事件會從 `td` 往上傳遞回 `window`，此階段稱為 `BUBBLING_PHASE`，冒泡階段。
{% endnote %}
{% note info %}
通常在呼叫 callback function 的時候，會傳進一個值 `event` 通常會縮寫 `e`，`e` 裡面就蘊含了許多這次觸發事件的相關參數。
{% endnote %}
其中一個參數 `eventPhase`，會回傳一個數字，表示這個事件在哪一個 Phase 觸發。
<table>
  <tr>
    <th width="50%">eventPhase</th>
    <th width="50%">Number</th>
  </tr>
  <tr>
    <td>CAPTURING_PHASE</td>
    <td>1</td>
  </tr>
  <tr>
    <td>AT_TARGET</td>
    <td>2</td>
  </tr>
  <tr>
    <td>BUBBLING_PHASE</td>
    <td>3</td>
  </tr>
</table>

{% note no-icon %}
事件的傳遞順序，原則：
1. 先捕獲，再冒泡。
1. 當事件傳到 target 本身，沒有分捕獲跟冒泡。
{% endnote %}

<a href="https://jsbin.com/mavuvezule/edit?html,js,console,output" class="Btn Btn__primary Btn--h">
<span>jsbin 範例</span>
</a>

## 取消事件傳遞
<div class="codeBox">
  <div class="ribbon">Syntax</div>
  ```javascript
  event.stopPropagation();
  ```
</div>

`stopPropagation()` 方法可阻止當前事件繼續進行捕捉（capturing）及冒泡（bubbling）階段的傳遞。
{% label danger@但同元素中綁定的事件監聽仍可以被執行。 %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
  ```javascript
  event.stopImmediatePropagation();
  ```
</div>

`stopImmediatePropagation()` 方法除了停止事件繼續捕捉或冒泡傳遞外，也阻止事件被傳入同元素中註冊的其它相同事件類型之監聽器。

## 取消預設行為
<div class="codeBox">
  <div class="ribbon">Syntax</div>
  ```javascript
  event.preventDefault();
  ```
</div>

`preventDefault()` 方法可取消事件的預設行為。但不會影響事件的傳遞，事件仍會繼續傳遞。
{% label success@最常見的做法就是阻止超連結的預設行為（新開分頁或是跳轉）。 %}

## 目前所在元素位置
<div class="codeBox">
  <div class="ribbon">Syntax</div>
  ```javascript
  event.target();
  ```
</div>

`event.target` 屬性{% label primary@永遠指向最初觸發事件的 DOM 物件。 %}

## 常見的 event type

1. click - 點擊滑鼠左鍵時觸發。
1. change - 表單內容更動內容時觸發。
1. keyCode - 按下指定按鍵時觸發。
1. focus - 進入焦點時進行事件觸發。
1. blur - 離開焦點時進行事件觸發。
1. mousemove - 當滑鼠滑入指定內容時觸發。

## 網頁座標

`e` 裡面蘊含了許多觸發事件的相關參數，包括與網頁座標的相關參數。

1. `e.screenX`、`e.screenY` - 抓取整個螢幕的大小。
1. `e.pageX`、`e.pageY`     - 抓取整個網頁的大小。
1. `e.clientX`、`e.clientY` - 抓取瀏覽器的大小。

<a href="/blog/demoHTML/js-event-position/index.html" target="_blank" class="Btn Btn__success Btn--v">
<span>js-event-position</span>
</a>

## 實際應用
### event delegation(事件代理)

>利用事件捕獲跟冒泡的機制，將多個 `addEventListener()` 綁定在同一個父節點。
>如此一來當新增或是刪除一個元素的時候，不用去處理跟那個元素相關的 listener，因為 listener 是放在父節點身上。
>而此透過父節點 listener 來處理子節點的事件，就稱做事件代理。

使用時機：
1. 過多重複的監聽器 — 需要掛載非常多個重複的事件
1. 掛載、移除事件是有成本的 — removeEventListener 超級麻煩

原理：
1. 事件的冒泡機制 — 把子節點們的事件統一處理
1. 事件的 e.target 屬性 — 辨別事件的位置

流程：
1. 新增監聽父節點。
1. 加入判斷，排除父節點。
  - `e.target.classList.contains('搜尋的子節點')`，如果有回傳 true沒有則回傳 false。 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/contains)
  - `e.target.nodeName === '要匹配的子節點'`。 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Node/nodeName)

{% raw %}
<div class="result result--light">
  <div class="ribbon ribbon--success">event delegation</div>
  <style>
.outer {
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.outer a.add, .outer a.eventBtn {
  margin-top: 5px;
  font-size: 100%;
  padding: 0.5em 1em;
  border: 1px solid #999;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
}
.outer .eventBtn {
  margin-left: 5px;
  margin-right: 5px;
}
.outer .eventBtn:first-child {
  margin-left: 0;
}

  </style>
<div class="outer"><a href="#" class="add">Add</a></div>
  <script>
const add = document.querySelector('.add');
const outer = document.querySelector('.outer');
let num = 1

add.addEventListener('click',function(e){
  e.preventDefault();
  const btn = document.createElement('a');
  btn.setAttribute('class', 'eventBtn');
  btn.setAttribute('data-btn', num);
  btn.textContent = num;
  num +=1 ;
  outer.appendChild(btn);
},false)

outer.addEventListener('click',function(e){
  if (e.target.classList.contains('eventBtn')) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.setAttribute('style', `background: #${randomColor}`);
  }
})
  </script>
</div>
{% endraw %}

# data-* 資料屬性

{% note info %}
- HTML5 內新增的一項**自訂 data 屬性**的屬性。
- 它能令 HTML 與其 DOM 擁有給腳本用的交換資訊。
- 可以於 HTML 標籤內添加任意 `data-*` 的屬性，其中的 `*` 就是一個可以自定義的名稱，而此屬性並不會渲染於網頁上，但可以透過 CSS & JS 讀寫以及操作此屬性。
<font size="3">
  - `*` 只接受字母、數字還有以下的符號: dash (`-`), 點 (`.`), 冒號 (`:`), 底線(`_`) -- 但不包含任何ASCII 大寫字母(A 到 Z)。
  - 用JavaScript裡使用data-*屬性名時，要把名稱轉變成駝峰式命名(Camel-Case)，且不含dash、點等上述所提的符號。
</font>
{% endnote %}

```html
<ul id="menu" data-toggle="collapse">
  <li data-item="1"></li>
  <li data-item="2"></li>
  <li data-item="3"></li>
  <li data-my-custom-key="4"></li>
</ul>
```
## 取值
### CSS
搭配使用 CSS 中的屬性選取器可以取得或選取 data-*attribute
```CSS
#menu[data-toggle="collapse"] {
  color: #fff;
}
```
### JS
當要取得 data-* attribute 的屬性值時，我們可以利用 JavaScript 中的 `dataset` 物件。
如果包含dash、點等符號，要把名稱轉變成{% label danger@駝峰式命名(Camel-Case) %}。
```javascript
let menu = document.querySelector('#menu');
console.log(menu.dataset.toggle);          //collapse
let li = document.querySelectorAll('li');
console.log(li[0].dataset.item);          //1
console.log(li[0].dataset.myCustomKey);   //4
```
## 賦值
```javascript
let menu = document.querySelector('#menu');
menu.dataset.key1 = 'val1';
menu.dataset.key2 = 'val2';
```

## 與 Array 搭配使用

1. 從 webStorsge 取值，設定變數為 data ，如果無值則建立一個空陣列。
    ```javascript
    let data = JSON.parse(sessionStorage.getItem('toDoList')) || [];
    ```
1. 新增資料，將 `input` 內的值帶入物件並 `psuh` 進 `data` 陣列內。
再將 `data` 陣列更新進 webStorsge 內。
    ```javascript
    function addDate(e) {
      let toDoItem = document.querySelector('.text').value;
      if ( toDoItem === '' ) {return};
      document.querySelector('.text').value = '';
      let toDo = { content: toDoItem };
      data.push(toDo);
      sessionStorage.setItem('toDoList', JSON.stringify(data));
      updateList(data);
    }
    ```
1. 更新資料，並將內容插入至 list 內。
    ```javascript
    send.addEventListener('click', addDate);

    function updateList(item) {
      let str = '';
      for (let i = 0; i < item.length; i++) {
        str += `<li><a href="#" data-index="${i}">刪除</a> <span>${data[i].content}</span></li>`;
      }
      list.innerHTML = str;
    }
    ```
1. 移除資料，使用事件代理，父節點 list 做為監聽對象，監聽子節點的 A 標籤，移除後並重新更新資料。
    ```javascript
    list.addEventListener('click', delToDoItem)

    function delToDoItem(e) {
      e.preventDefault();
      if (e.target.nodeName !== 'A') {return};  // nodeName 不等於 'A'，不動作。
      let num = e.target.dataset.index;
      data.splice(num, 1);
      console.log(data);
      sessionStorage.setItem('toDoList', JSON.stringify(data));
      updateList(data);
    }
    ```

<a href="/blog/demoHTML/js-webStorage/index.html" target="_blank" class="Btn Btn__success Btn--v">
<span>js-webStorsge</span>
</a>

# web storage

{% note info %}
- HTML5 新加入的 Web Storage 是一種可讓網頁將資料儲存於本地端的技術，其作用如同 cookie。
- 儲存於 Web Storage 中的資料，是以 key-value pair 的形式保存。
- 解決cookie存儲空間不足的問題(cookie中每條cookie的存儲空間為4k)，localStorage中一般瀏覽器支持的是5M大小。
- Web Storage 分為兩種：`localStorage` 和 `sessionStorage`。
{% note primary no-icon %}
    1. `localStorage`：可以跨瀏覽器分頁做使用、使用者關掉分頁或瀏覽器再打開資料仍不會消失，且資料無期效限制，資料將永久被保留。
    1. `sessionStorage`：生命週期較短，當使用者關掉瀏覽器或分頁時，sessionStorage 中的資料將被清空。
{% endnote %}
{% endnote %}

## 基本操作
- `setItem()` - 將資料存進 localStorage 內。
    <div class="codeBox">
      <div class="ribbon">Syntax</div>
    ```javascript
    localStorage.setItem($key, $value);
    sessionStorage.setItem($key, $value);
    ```
    </div>
- `getItem()` - 將資料從 localStorage 內取出。
    <div class="codeBox">
      <div class="ribbon">Syntax</div>
    ```javascript
    localStorage.getItem($key);
    sessionStorage.getItem($key);
    ```
    </div>
- `removeItem(key)` - 清除某一筆資料
    <div class="codeBox">
      <div class="ribbon">Syntax</div>
    ```javascript
    localStorage.removeItem($key)
    ```
    </div>
- `clear()` - 清除全部資料
    <div class="codeBox">
      <div class="ribbon">Syntax</div>
    ```javascript
    localStorage.clear()
    ```
    </div>

## 資料儲存的格式
localStroage `key` 跟 `value` 只能保存字串的資料，存取 JSON 格式要先經過轉換。

- 將 array 轉為 string
    <div class="codeBox">
      <div class="ribbon">Syntax</div>
    ```javascript
    JSON.stringify(array)
    ```
    </div>
- 將 string 轉為 array
    <div class="codeBox">
      <div class="ribbon">Syntax</div>
    ```javascript
    JSON.parse(string)
    ```
    </div>


# BOM

BOM (Browser Object Model，瀏覽器物件模型)，是瀏覽器所有功能的核心。

{% asset_img BOM.svg%}

BOM 的核心其實是 window 物件。而 window 物件提供的屬性主要有 document、location、navigator、screen、history 以及 frames。

在瀏覽器裡的 window 物件扮演著兩種角色：

- ECMAScript 標準裡的「全域物件」 (Global Object)
- JavaScript 用來與瀏覽器溝通的窗口

## 常用語法
- 回到上一頁
    ```javascript
    window.history.back()
    ```
- 到下一頁
    ```javascript
    window.history.forward()
    ```
- 列印
    ```javascript
    window.print()
    ```
- local資訊
    ```javascript
    window.location()
    ```
- 目前的URL(currentURL)
    ```javascript
    const currentURL = () => window.location.href;
    ```
- 移動到其他網頁
    ```javascript
    window.open(url)
    ```
- 瀏覽器視窗內高度
    ```javascript
    window.innerHeight;
    ```
- 瀏覽器視窗內寬度
    ```javascript
    window.innerWidth;
    ```
- 瀏覽器高度
    ```javascript
    window.outerHeight;
    ```
- 當瀏覽器高度有變化時觸發function
    ```javascript
    window.onresize = function() {};
    ```