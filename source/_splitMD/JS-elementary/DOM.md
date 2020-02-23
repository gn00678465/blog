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
	A[document] --> B[HTML<br>&#60;HtmlElement&#62;]
	B --> C[head<br>&#60;HeadElement&#62;]
  C --> D[title<br>&#60;TitleElement&#62;]
  D --> E[text<br>'首頁']
  B --> F[body<br>&#60;BodyElement&#62;]
  F --> G[h1<br>&#60;H1Element&#62;]
  G --> H[text<br>'Hello!World!']
  F --> I[a<br>&#60;AnchorElement&#62;]
  I --> J[text<br>'學習筆記']
  I --> L[Attribute<br>'href']
{% endmermaid %}


## DOM解析

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

![](https://www.w3.org/TR/DOM-Level-3-Core/images/dom-architecture.png)
圖片來源：http://www.w3.org/TR/DOM-Level-3-Core/introduction.html

## HTML DOM

- The HTML elements as **objects**
- The **properties** of all HTML elements
- The **methods** to access all HTML elements
- The **events** for all HTML elements

**換句話說，HTML DOM 是一個該如何取得、改變、新增、刪除 HTML元素的標準。**

## HTML DOM 操作

<dl>
  <dt>document.getElementById(id)</dt>
  <dd>找尋 DOM 中符合此 id 名稱的元素，並回傳相對應的 element 。</dd>
    <dt>document.getElementsByTagName(name)</dt>
  <dd>找尋 DOM 中符合此 tag 名稱的所有元素，並回傳相對應的 element 集合，集合為 <code>HTMLCollection</code>。</dd>
    <dt>document.getElementsByClassName(name)</dt>
  <dd>找尋 DOM 中符合此 class 名稱的所有元素，並回傳相對應的 element 集合，集合為 <code>HTMLCollection</code>。</dd>
    <dt>document.querySelector(selector)</dt>
  <dd>利用 selector 來找尋 DOM 中的元素，並回傳相對應的第一個 element 。</dd>
    <dt>document.querySelectorAll(selector)</dt>
  <dd>利用 selector 來找尋 DOM 中的所有元素，並回傳相對應的第一個 element ，集合為 <code>NodeList</code>。</dd>
</dl>

**HTMLCollection** 以及 **NodeList 的差異**


1. `HTMLCollection` 為 **HTML element 的集合。**
2. `NodeList` 為 **Node 的集合。**
3. `HTMLCollection` & `NodeList` 幾乎相同。
4. 兩者皆為類陣列，並繼承於 `objects` 。
5. 兩者皆有 `length` 屬性


https://www.w3schools.com/js/js_htmldom_nodelist.asp
https://segmentfault.com/a/1190000015498487
