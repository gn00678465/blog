---
title: 資料型別 List
date: 2020-02-08 17:02:09
---

{% note info %}
Sass 中 List 就像一般 array，是用來存放沒有鍵名的變數，但當要從陣列裡取得資料的時候只能透過索引（1, 2, 3, 4）。
{% endnote %}
{% note warning %}
要注意的是在 Sass 中，List 從 1 開始算起，而不是正常程式界的 0。
{% endnote %}

```scss
$lists: #fff, orange, yellow, #000;
//逗號可加或不加都可以,如果是字串必須在外面包一個單雙引號
```

list 可以使用的函數
1. nth
1. index
1. join
1. append
1. zip
1. length

## nth

`list.nth($list, $n)`
透過 nth(變數, 索引) 你能夠取得 List 裡的資料。

<table>
  <thead>
    <tr>
      <th width=50% >scss</th>
      <th width=50%>CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
```scss
$lists: #fff, orange, yellow, #000;
.content {
  color:nth($lists, 2);  //引入變數,第幾個
}
```
      </td>
      <td>
```css
.content {
  color: orange;
}
```
      </td>
    </tr>
  </tbody>
</table>

透過這樣子，產生出來的code的顏色就會變成第二個orange橘色。
nth() 你可以想像成提取變數裡面第幾個樣式。

## index
`list.index($list, $value)`
index的其中一種做法可以拿來算你所選擇的變數排序。

<table>
  <thead>
    <tr>
      <th width=50% >scss</th>
      <th width=50%>CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
```scss
$coffee: black, latte, cappuccino, mocha;
.content {
  color:index($coffee, latte)  //引入變數,變數名稱
}
```
      </td>
      <td>
```css
.content {
  color: 2;
}
```
      </td>
    </tr>
  </tbody>
</table>

## nth()與index()結合

透過nth()與index()結合來規劃多種版型樣式：

<table>
  <thead>
    <tr>
      <th width=50% >scss</th>
      <th width=50%>CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
```scss
$sites: home, about, connect, blog;
$text-color: #16a085, #8e44ad, #34495e, #2ecc71;
$bg: #ecf0f1, #ecf0f1, #e74c3c, #e74c3c;

.listBtn {
  &--home {
    $style: index($sites, home);
    background: nth($bg, $style);
    color: nth($text-color, $style);
  }
  &--connect {
    $style: index($sites, connect);
    background: nth($bg, $style);
    color: nth($text-color, $style);
  }
}
```
      </td>
      <td>
```css
.listBtn--home {
  background: #ecf0f1;
  color: #16a085;
}
.listBtn--connect {
  background: #e74c3c;
  color: #34495e;
}
```
      </td>
    </tr>
  </tbody>
</table>

{% raw %}
<style>
.listBtn {
  display: inline-block;
  padding: 10px 20px;
  text-transform: uppercase;
  text-align: center;
  margin-left: 20px;
  margin-top: 10px;
}
.listBtn--home {
  background: #ecf0f1;
  color: #16a085;
}
.listBtn--connect {
  background: #e74c3c;
  color: #34495e;
}
</style>
<div class="result result--dark">
  <div class="ribbon ribbon--success">List</div>
    <div class="listBtn listBtn--home">home</div>
    <div class="listBtn listBtn--connect">connect</div>
</div>
{% endraw %}
