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
    <dd class="timeline--entry__detail"></dd>
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
