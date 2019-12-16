---
title: JavaScript 基礎介紹(執行環境、作用域)
date: 2019-11-24 22:06:17
categories:
- JavaScript
tags:
- Basic
---
# JavaScript 基礎介紹(執行環境、作用域)

{% blockquote wikipedia https://zh.wikipedia.org/wiki/JavaScript JavaScript %}
JavaScript（通常縮寫為JS）是一種進階的、直譯的程式語言。JavaScript是一門基於原型、函式先行的語言，是一門多範式的語言，它支援物件導向編程，指令式程式設計，以及函式語言程式設計。
{% endblockquote %}


<!--more-->

# 編譯式語言 & 直譯式語言

我們寫的原始碼是無法直接被電腦或是瀏覽器閱讀的，在被電腦運行之前須經過“解譯”成電腦看得懂的代碼。
而其中又可分為**編譯式語言**&**直譯式語言**。

{% asset_img Compiled_language.png 800 編譯式語言 %}
**編譯式語言**：編譯式語言編寫完原始碼後會經由編譯器編譯，並在預先編譯過程中除錯，確定無錯誤後再將代碼生成並於執行環境中運行。
*Example*：C、C++、bjective-C、Visual Basic等等。

{% asset_img Interpreted_language.png 800 直譯式語言 %}
**直譯式語言**：直譯式語言編寫完原始碼後會經由直譯器編譯，並直接將代碼生成並於執行環境中運行。
錯誤直接反映在環境中，像是 console 出現錯誤紅字。
*Example*：JavaScript、Python、Ruby等等。

# JavaScript 是如何運行的
{% asset_img JS_process.png 800 JS轉換過程 %}
JavaScript是直譯式語言的一種，直譯語言在執行時會一行一行的動態將程式碼直譯(interpret)為機器碼，並執行。
以下是JavaScript經過直譯器轉換的過程。
**1. 語法基本單元化(Tokenizing)。**
    將一串字元拆解成(對該語言)有意義的組塊，這些組塊就叫做語法基本單元化。
**2. 組成抽象語法樹AST（Abstract Syntax Tree）。**
    將token流轉化為一個有元素層級巢狀所組成的代表程式語法結構的樹，這個樹被叫做抽象語法樹AST。
**3. 代碼生成。**

可透過編譯網站來了解語法單元化(Tokenizing)。
[編譯網站](https://esprima.org/demo/parse.html#)

# 執行的錯誤情境 LHS, RHS
{% asset_img RHS_LHS.png 800 LHS & RHS %}
此錯誤與取值與賦予值有相當的關係。
1. RHS：將值從右側的變數中取出，當無法取值時，會丟出'ReferrenceError'的錯誤訊息。
2. LHS：將值賦予至左側的變數，如果左側不為'identifier' or 無法被賦予時，會丟出'Invalid left-hand side'的錯誤訊息。
**<font color=#800000>如有出現錯誤需立即修正，否則錯誤後方的程式碼會無法運行。</font>**

# 語法作用域(Lexical scope)

作用域分為**靜態作用域**以及**動態作用域**，不同的程式語言可能有不同的作用域，而同一語言內也可能存在多種作用域。
**靜態作用域** ：在原始碼寫好的時候，作用域就已經被訂下來了，且不會再被改變。
**動態作用域** ：在函式調用時才決定作用域。
{% asset_img Lexical_Scope.png 800 靜態作用域 %}
>**JS採用靜態作用域(又稱語法作用域)。**

在JS的作用域中
{% asset_img Scope.png 800 作用域 %}
>JS的作用域為一層一層向內，最外層有一全域，再向內包覆Function的作用域，Function的作用域是獨立的。
如Function的作用域內需要調用變數，但此作用域內無此變數時，會*向外查找*變數，
查找到便會調用此變數，
但如果查找不到此變數時就會出現錯誤 **<font color=#800000>ReferenceError: 變數 is not defined</font>**。
{% asset_img Scope2.png 800 作用域2 %}

EX:以下這段程式碼，會印出什麼結果呢？
```javascript
var value = 1 ;
function fn1() {
    console.log(value);
}
function fn2() {
    var value = 2;
    fn1();
}
fn2();
// 語法作用域下顯示為：1
// 動態作用域下顯示為：2
```
首先，我們宣告了一個變數value, 他是一個全域變數。接著宣告兩個函式，最後執行fn2。
執行fn2時，我們把變數value賦予了另外一個值2，接著執行fn1。fn1因為要印出value，因此向外查找value這個變數，在全域中找到value，值等於1。最後console.log的結果會是1。
>JS為語法作用域，console.log的結果會是1。

但如果是動態作用域的話，結果就不一樣了。在執行到console.log(value)時，他會向上一層調用的函式來查找value的值，因此找到值等於2。

# 執行環境與執行堆疊

## 執行環境 Execution Context

當函式被執行時，會產生“執行環境 Execution Context”。
每執行一次便會產生一個新的執行環境。
{% asset_img Execution_Context.png 800 執行環境 %}

除了函式之外，全域也有全域執行環境，在網頁被瀏覽器開啟或是後端Node.js被啟動時，就被建立了。全域執行環境被建立時會同時宣告window或是global變數。
(在瀏覽器是window, Node.js是global，而在全域執行環境中的this就等同於這兩個變數。<font color=#800000>**this是會隨著執行環境不同而改變的**</font>)。
{% asset_img Execution_Context_global.png 800 全域執行環境 %}

## 執行堆疊 Execution stack

執行堆疊跟函式在宣告的時候的時候"沒有關聯"，而是與"呼叫的位置"有關。
從以下程式碼來看：
```javascript
function sayHi(name){
  //…
}
function doSomething(){
  sayHi();
}
doSomething();
```
1. 首先，在瀏覽器開啟或是Node.js啟動時，全域執行環境就會被建立。
2. 接著我們執行doSomething函式，所以doSomething的執行環境被生成，且堆疊在全域執行環境之上。
3. 在doSomething函式中我們又執行了sayHi函式，因此sayHi的執行環境被生成，且堆疊在doSomething執行環境之上。
4. 當離開執行堆疊的時候也會一層一層離開，sayHi執行環境先離開並回到doSomething執行環境，最後會回到全域執行環境。
{% asset_img Execution_stake.png 800 執行堆疊 %}

我們可以從chrome 開發者工具中的source tab，一步一步觀察執行堆疊的運作。

# 範圍鍊 Scope chain
每個變數都有自己的作用範圍，若使用前未宣告，就會變成全域變數，若是在函式內宣告的變數，則只能在該區域內使用，也就是說 JavaScript 在查找變數時，會循著範圍鏈一層層往外尋找。
>範圍鍊取決於函式的作用域，與執行環境並無關聯性。

{% asset_img img-left scope_chain.png 800 範圍鍊 %}
>因JS為語法作用域，在原始碼寫好的時候，作用域就已經被訂下來了。
>上方的程式碼中，無論是fn1或是fn2，因為fn1函式內沒有value變數，因此向外尋找，找到全域的value "1"，這就是範圍鍊的概念。

```javascript
var person = ‘老媽’
function sayHi() { 
 console.log(‘hi ‘ + person); 
}
function doMorningWork() { 
 var person = ‘老爸’; 
 function meetAuntie() { 
  var person = ‘漂亮阿姨’; 
  console.log(‘哈囉～ ‘ + person); 
 }
}
sayHi();  //hi 老媽
```
執行 `sayHi()` console.log顯示"hi 老媽"。
因為sayHi函式內沒有person變數，因此向外尋找，找到全域的person "老媽"。

```javascript
var person = ‘老媽’
function sayHi() { 
 console.log(‘hi ‘ + person); 
}
function doMorningWork() { 
 var person = ‘老爸’; 
 function meetAuntie() { 
  var person = ‘漂亮阿姨’; 
  console.log(‘哈囉～ ‘ + person); 
 }
 sayHi();
}
doMorningWork();  //hi 老媽
```
執行 `doMorningWork()` console.log仍然顯示"hi 老媽"。
這是因為`sayHi()`函式的範圍鍊依然指向全域，雖然他在`doMorningWork()`函式內。

```javascript
var person = ‘老媽’ 
function sayHi() { 
 console.log(‘hi ‘ + person); 
} 
function doMorningWork() { 
 var person = ‘老爸’; 
 function meetAuntie() { 
  var person = ‘漂亮阿姨’; 
  console.log(‘哈囉～ ‘ + person); 
 } 
 meetAuntie(); 
} 
doMorningWork(); //哈囉～ 漂亮阿姨
```
執行 `doMorningWork()` console.log顯示"哈囉～ 漂亮阿姨"。
因為`meetAuntie()`函式內有宣告變數，因此console.log會印出"哈囉～ 漂亮阿姨"。

```javascript
var person = ‘老媽’ 
function sayHi() { 
 console.log(‘hi ‘ + person); 
} 
function doMorningWork() { 
 var person = ‘老爸’; 
 function meetAuntie() { 
  //var person = ‘漂亮阿姨’; 
  console.log(‘哈囉～ ‘ + person); 
 } 
 meetAuntie(); 
} 
doMorningWork(); //哈囉～ 老爸
```
執行 `doMorningWork()` console.log顯示"哈囉～ 老爸"。
因為`meetAuntie()`函式內變數`var person = ‘漂亮阿姨’`已經被註解掉了，這時便會向外尋找，找到上一層的變數 "老爸"，因此console.log會印出"哈囉～ 老爸"。

# 提升 Hoisting

執行程式碼時先將所有變數取出，並在記憶體中分配空間給這些變數，但目前階段尚未賦予值而顯示undefined的情況下，稱為提升。

<font size=6>執行環境其實可細分為兩個階段：創造環境及執行。</font>
1. <font size=5>**創造環境**</font>：先將程式碼中的變數挑出來，在記憶體中分配空間給這些變數，但目前階段尚未賦予值，如果在此時去取用這些變數的話，會顯示undefined。
    {% asset_img img-left Hostion_1.png 800 創造環境 %}
2. <font size=5>**執行**</font>：此階段下才會將值賦予至變數。
    {% asset_img img-left Hostion_2.png 800 創造環境 %}

變數的拆解
```javascript
var Ming = '小明'; //宣告變數，可拆解成如下方所示

var Ming;         //創造環境
Ming = '小明';    //執行
```

<font size=6>**函式陳述式中在創造階段就會優先載入**</font>
函式陳述式與一般變數不太一樣，**函式陳述式在創造環境階段會被優先載入**，記憶體在此階段就載入函式的完整內容。所以函式在創造環境階段就已經可以被運行。
{% asset_img img-left Hosting_function.png 800 創造環境 %}
函式的拆解
```javascript
//創造環境
function callName() {
  console.log('呼叫');
}
//執行
callName();
```

函式表達式的拆解
```javascript
var callName = function() {
  console.log('呼叫');
}
//創造環境
var callName;
//執行
callName = function() {
  console.log('呼叫');
}
callName();   //
```
- <font color='blue'>範例一：</font>
```javascript
function callName() { 
 console.log('呼叫小明 1'); 
}
var callName = function () { 
 console.log('呼叫小明 2'); 
}
callName();   //呼叫小明 2
```
因上面所提及在創造階段時，函式優先下，不論函式先宣告，還是後宣告，結果皆為"呼叫小明 2"，可拆解成如下
```javascript
//創造環境
function callName() {         //函式優先載入
 console.log('呼叫小明 1'); 
}
var callName;                 //變數不能重複宣告
callName();   //undefined
//執行
function () {                 //覆蓋上面的函式
 console.log('呼叫小明 2');
}
callName();   //呼叫小明 2
```
- <font color='blue'>範例二：</font>
```javascript
callName();   //undefined
function callName() { 
 console.log(Ming); 
}
var Ming = '小明';
```
拆解如下
```javascript
//創造環境
callName();   //undefined
function callName() { 
 console.log(Ming); 
}
var Ming;
//執行
Ming = '小明';
```
- <font color='blue'>範例三：</font>
```javascript
function callName() { 
 console.log('小明'); 
}
callName();   //第一次執行
function callName() { 
 console.log('肥宅'); 
} 
callName();   //第二次執行

//console.log
//肥宅
//肥宅
```
拆解如下
```javascript
//創造環境
function callName() { 
 console.log('小明'); 
}
function callName() {     //覆蓋上面的函式內容
 console.log('肥宅'); 
} 
//執行
callName();   //肥宅
callName();   //肥宅
```
- <font color='blue'>測驗：</font>
```javascript
whosName()
function whosName() {
  if (myName) {
    myName = '杰倫';
  }
}
var myName = '小明';
console.log(myName);
```
拆解如下
```javascript
//創造環境
function whosName() {
  if (myName) {        // 這裡是 undefined，所以以下程式碼不執行
    myName = '杰倫';   // 變數已經宣告，所以是 undefined
  }
}
var myName;           // 宣告變數 myName
//執行
whosName();
myName = '小明';      // 賦值'小明'
console.log(myName);  // 小明
```
{% note info %}
<font size=2>

1. 目前來說，程式碼還是會透過 Babel 編譯而編譯後的結果依然是 var 做執行，所以這樣的觀念還是要有。
(可以參考各大框架實際執行的程式碼)
2. function 的提升依然存在，這也是部分開發者的實作技巧之一將宣告的函式放在後方，呼叫放在前方。
(並非建議這樣的寫法，ESLint 中就不推薦此寫法)。
3. let, const 雖沒有 hoisting，但還是有類似的概念(暫時性死區)，其運作與 var hoisting 非常接近，同樣會影響原始碼的運行。

</font>
{% endnote %}

# Not Defined VS undefined

Is not defined：
```javascript
console.log(a) //a is not defined
```
undefined：
```javascript
var a
console.log(a) //undefined
```
# 執行緒與同步/非同步

學習 JS 時，必須要知道它是單執行緒（single thread）的語言，瀏覽器只分配給 JS 一個主執行緒，用來執行任務（函式），但一次只能執行一個任務，這些任務形成一個任務佇列排隊等候執行。

{% note info%}
<font size=2>

名詞解釋：
- 程式( Program )：Program 意旨軟體工程師所寫的程式碼(code)，但還尚未load入記憶體的 code，我們稱之為Program。
- 程序(Process )：Process 意旨已經執行並且 load 到記憶體中的 Program ，程序中的每一行程式碼隨時都有可能被CPU執行。
  + Process 是電腦中已執行 Program 的實體。
  + Process 本身不是基本執行單位，而是 Thread (執行緒)的容器。
  + Process 需要一些資源才能完成工作，如 CPU、記憶體、檔案以及I/O裝置。
- 執行緒：Thread 是 Process 的一個實體,也是CPU排程和分派的基本單位,它是比 Process 更小的能獨立執行的基本單位。
在同一個 Process 中會有很多個 Thread ，每一個 Thread 負責某一項功能。
  + 同一個 Process 會同時存在多個 Thread。
  + 同一個 Process 底下的 Thread 共享資源，如 記憶體、變數等，不同的Process 則否。
  + 單執行緒：有一個特性就是順序執行，當遇到比較耗時的任務時，還未執行的任務就會處於等待狀態，一定要等到前面的任務完成了，才會往後執行。
  + 多執行緒：能夠在同一時間執行多於一個執行緒，進而提升整體處理效能。

</font>
{% endnote %}

**JS程式語言中的同步與非同步**
JS在執行時依舊是依照同步的概念，按照順序一個一個任務執行，但遇到非同步任務時，會把他往後放，放到事件佇列(Event Queue)中。
待所有任務執行完成後再執行事件佇列內的任務。

{% asset_img img-left sync.png 800 同步與非同步 %}
{% asset_img img-left Event_queue.png 800 事件佇列 %}

在所有非同步事件如 {% label primary@addEventListener %}、{% label primary@setTimeout %}、{% label primary@ajax %}...，都不會立即執行這些任務，而是將這些任務放到{% label danger@事件佇列(event queue) %}中，並將所有的事件堆疊完成後，才會開始讓{% label danger@事件佇列(event queue) %}內的事件被觸發。

{% note info%}
<font size=2>

名詞解釋：
- 同步( Scynchronous )：同步處理就像是一般的程式邏輯的話，都是按照你所寫的一行一行去執行，而順序必定都是**前一個動作執行完才會去接著執行下一個動作**。
- 非同步( Ascynchronous )：**等待前面步驟執行完之前可以先去執行後面的步驟**。
- 事件佇列( event queue )

</font>
{% endnote %}

{% note success %}

從上面的描述，可以統整出兩個重點：
1. 瀏覽器內核除了 js 引擎的執行緒，還有其他同步執行的執行緒。
2. {% label primary@addEventListener %}、{% label primary@setTimeout %}、{% label primary@ajax %}，或其他無法預期執行時間的操作，都會以非同步處理。也就是會先被丟到{% label danger@事件佇列(event queue) %}，等到同步執行的程式碼執行完，才會去處理那些被放到佇列中的任務。
{% endnote %}
