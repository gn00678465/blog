---
title: CSS 選擇器的不同類型
date: 2019-12-01 12:30:59
---
# <font color="#00408B" size=6>基本選擇器</font>

## 選擇器分組
- 若希望不同的選擇器中可以套用相同的樣式，最容易的作法是使用以下語法。
- 可以將任意選擇器分組在一起，沒有任何限制。
- 透過分組，可以將某類型的樣式壓縮在一起，可以得到更簡潔的樣式表。

<font size=5>Syntax：</font>
<pre class="syntaxbox">
selector1, selector2 { property: value; }
</pre>

## 通用選擇器 (<font color=red size=4>**\***</font>)
- Universal selector以星號(asterisk)<font color=red size=4>**\***</font>表示，該選擇器可以與任何元素搭配

<font size=5>Syntax：</font>
<pre class="syntaxbox">
* { property: value; }
</pre>

## 元素選擇器 (<font color=red>**elementName**</font>)
- <strong>元素選擇器（型態選擇器）</strong>依照 Node 節點名稱選取匹配的 Element 元素。

<font size=5>Syntax：</font>
<pre class="syntaxbox">
element { property: value; }
</pre>

## Class 選擇器 (<font color=red size=4>**.**</font>classname)
- <strong>Class 選擇器</strong>依照具有class屬性來選取匹配的 Element 元素。
- Class 選擇器在一個 HTML 文件中可以被使用多次。
- Class 的宣告法，是先放一個句點 (<font color=red size=4>**.**</font>)，之後再列出選擇器名稱。

<font size=5>Syntax：</font>
<pre class="syntaxbox">
.className { property: value; }
</pre>

相同於屬性選擇器
<pre class="syntaxbox">
[class~=class_name] { property: value; }
</pre>

## ID 選擇器 (<font color=red size=4>**#**</font>idname)
- <strong>ID 選擇器</strong>依照具有ID屬性來選取匹配的 Element 元素。
- ID是<font color=red>**唯一**</font>的，當出現多組具有相同ID屬性的元素時，只會指向第一個匹配的元素。
- ID 的宣告法，是先放一個井字號 (<font color=red size=4>**#**</font>)，之後再列出選擇器名稱。

<font size=5>Syntax：</font>
<pre class="syntaxbox">
#id { property: value; }
</pre>
相同於屬性選擇器
<pre class="syntaxbox">
[id=id_value] { property: value; }
</pre>

## 屬性選擇器 (<font color=red>**[attr=value]**</font>)
- <strong>屬性選擇器</strong>可以依據元素的屬性或屬性值來選取匹配的 Element 元素。
- 需使用中括號(<font color=red>**[]**</font>)將屬性或屬性值包覆。

<font size=5>Syntax：</font>
<pre class="syntaxbox">
[attr] { property: value; }         /* 選擇具有特定屬性的元素。*/

[attr=value] { property: value; }   /* 選擇具有特定屬性值的元素。*/
</pre>
上述語法屬性以及屬性值需完全匹配。

<table>
    <thead>
        <tr>
            <th colspan="2"><font size=4>依據部分屬性值選擇</font></th>
        </tr>
        <tr>
            <th>選擇器</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>[attr~=value]</code></td>
            <td>選擇完整特定文字屬性值的元素。</td>
        </tr>
        <tr>
            <td><code>[attr^=value]</code></td>
            <td>選擇具有特定文字開頭屬性值的元素。</td>
        </tr>
        <tr>
            <td><code>[attr$=value]</code></td>
            <td>選擇具有特定文字結尾屬性值的元素。</td>
        </tr>
        <tr>
            <td><code>[attr*=value]</code></td>
            <td>選擇包含特定字串屬性值的元素。</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th colspan="2"><font size=4>特定屬性選擇</font></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>[attr|=value]</code></td>
            <td>選擇等於特定文字或者是其開頭屬性值的元素。</td>
        </tr>
    </tbody>
</table>

# <font color="#00408B" size=6>複合選擇器</font>

## 鄰接同層選擇器 (A <font color=red>**+**</font> B)
- 鄰接同層選擇器(Adjacent sibling selector)具有同樣父類別的兩個元素以「＋」作為連結，允許選擇某一個特定元素（A）之後的第一個特定元素（B）。

<font size=4>Syntax：</font>
<pre class="syntaxbox">
former_element + target_element { property: value; } 
</pre>

## 通用同層選擇器 (A <font color=red>**~**</font> B)
- 具有同樣父類別的兩個元素以「~」作為連結，允許選擇某一個特定元素（A）之後的全部特定元素（B）。

<font size=5>Syntax：</font>

<pre class="syntaxbox">
former_element ~ target_element { property: value; } 
</pre>

## 直屬選擇器 (A <font color=red>**>**</font> B)
- 又稱子元素選擇器（Child selectors），此選擇器只能選擇某一個特定元素（A）子元素的特定元素（B）。
- 如果不希望選擇任意的後代元素，只選擇某一個元素的子元素，請使用直屬選擇器。

<font size=5>Syntax：</font>

<pre class="syntaxbox">
selector1 > selector2 { property: value; } 
</pre>


## 後代選擇器 A B
- 後代選擇器（descendant selector），此選擇器可選擇某一個特定元素（A）後代的特定元素（B）。
- 選擇器之間的組合符號（combinator）(代表空白, 或更精準地說，代表一或多個空白字元) 結合了兩種選擇器。
-    後代選擇器中兩個元素之間的層次間隔可以是無限的，不要求披對的元素是父子關係。

<font size=5>Syntax：</font>
<pre class="syntaxbox">
selector1 selector2 { property: value; }
</pre>

# <font color="#00408B" size=6>虛擬元素（pseudo-element）</font>
{% note primary %}
- 它並不是真正網頁裡的元素，但行為與表現又和真正網頁元素一樣，也可以對其使用 CSS 操控。
- 同時偽元素也會「繼承」原本元素的屬性，如果原本文字是黑色，偽元素的文字也會是黑色。
- 偽元素一定要具備 content 的屬性，就算是只有content:""；沒有 content 的偽元素是不會出現在畫面上的。
{% endnote%}
- 另外，`content` 是個很特別的屬性，它可以使用 `attr` 直接獲取內容元素的屬性值 ( attribute )，舉例來說，在 HTML 裡有一個超連結，點擊後會彈出新視窗並連結至 

<table>
  <thead>
    <tr>
      <th colspan="3">pseudo-element</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>::before</code></td>
      <td><code>::after</code></td>
      <td><code>::first-line</code></td>
    </tr>
    <tr>
      <td><code>::first-letter</code></td>
      <td><code>::selection</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

## ::before
{% note info %}
- 最常使用的偽元素之一，以 `display:inline-block` 的屬性存在。
- `::before` 是在原本的元素「之前」加入內容。
{% endnote %}

## ::after
{% note info %}
- 最常使用的偽元素之一，以 `display:inline-block` 的屬性存在。
- `::after` 是在原本的元素「之後」加入內容。
{% endnote %}

## ::first-line
{% note info %}
- `::first-line` 顧名思義就是「第一行」，透過這個偽元素可以輕鬆指定文字的第一行。
- 需要注意的是 `::first-line` 「不能」作用於 `display:inline` 的元素。
{% endnote %}

## ::first-letter
{% note info %}
- `::first-letter` 顧名思義就是「第一個字」。
- 透過這個偽元素，可以做出許多文章第一個字放大或變色的效果。
{% endnote %}

## ::selection
{% note info %}
- `::selection` 是個十分常見的偽元素，它就是負責一段選取文字的效果。
{% endnote %}

[偽元素選器整理](https://codepen.io/yun1988/full/MXByyo/)

# <font color="#00408B" size=6>虛擬類別（pseudo-class）</font>

<font size=5>Syntax：</font>
<pre class="syntaxbox">
selector:pseudo-class { property: value; } 
</pre>



[偽類選擇器整理](https://codepen.io/yun1988/full/VdMVvg/)

[回首頁](/)