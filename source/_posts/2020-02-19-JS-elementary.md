---
title: JavaScript 入門篇
categories:
  - JavaScript
tags:
  - JavaScript
date: 2020-02-19 20:39:01
---
JS_elementary
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
    當監聽的事件觸發時指定執行的函式。
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

## Event Capture & Event Bubble 的差異。
{% note primary %}
這其實是在講 DOM 裡面事件傳遞的順序。
假如在兩個元素上面都加了`eventListener`，哪一個會先執行？此時，知道事件的執行順序就很重要。
{% endnote %}

- <font size="4">Event Bubble - 事件冒泡</font>
  {% note success no-icon %}
  當 DOM 事件在傳播時，從`target`往上從子節點一路逆向傳回去根節點，此時就叫做`BUBBLING_PHASE`，也就是冒泡階段。
  {% endnote %}
- <font size="4">Event Capture - 事件捕捉</font>
  {% note danger no-icon %}
  當 DOM 事件在傳播時，會先從根節點開始往下傳遞到`target`，這邊如果加上事件的話，就會處於`CAPTURING_PHASE`，捕獲階段。
  {% endnote %}

{% asset_img eventflow.png %}