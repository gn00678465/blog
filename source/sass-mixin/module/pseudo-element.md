---
title: 模組化 pseudo-element
date: 2020-02-08 09:53:14
---

{%raw%}
<style>
code {
  background: #f6f9fa !important;
  padding: 0 4px !important;
  color: #ed5a5a;
}
</style>
{%endraw%}

## Arguments

{% raw %}
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$el</td>
      <td>string</td>
      <td>產生偽元素，<strong>只能輸入<code>before</code> or <code>after</code></strong>.</td>
    </tr>
    <tr>
      <td>$content</td>
      <td>color</td>
      <td>偽元素顯示的內容. <strong>如不需顯示內容，可以使用 <code>null</code> 來帶入空值。</strong></td>
    </tr>
    <tr>
      <td>$width</td>
      <td>number (with unit)</td>
      <td>偽元素的寬度.</td>
    </tr>
    <tr>
      <td>$height</td>
      <td>number (with unit)</td>
      <td>偽元素的高度.</td>
    </tr>
  </tbody>
</table>
{% endraw %}

```scss
@mixin p-el($el, $content, $el-width, $el-height) {
  @if $el == "before" or $el == "after" {
    &::#{$el} {
      content: "#{$content}";
      position: absolute;
      width: $el-width;
      height: $el-height;
      @content;
    }
  }
  else {
    @warn "`#{$el}` is not a valid pseudo-element.";
  }
}
```

## 說明

使用CSS產生偽元素經常會使用某些屬性讓偽元素可以顯示。而經常重覆使用的CSS 宣告 不外乎為`content`，`display`和`position`，這些都是在建立偽元素時常見的屬性。

使用sass，我們可以建立 `mixins` 來幫助我們以較少的code 方便維護CSS檔案。


1. 撰寫mixin，先建立偽元素 `@mixin` 並帶入4個參數，分別為偽元素`::before` & `::after`、`content`、寬度、高度。
建立偽元素必須包含 `content` 屬性，以及使用 `display` 或 `position` 屬性來去排板。
```scss
// _mixins.scss
@mixin p-el($el, $content, $el-width, $el-height) {
  content: '';
  position: absolute;
}
```
使用插值語法 `#{}` 可以使用變數來建立動態的選擇器，所以在 `mixin` 內可以使用連結符 `&` 以及變數 `$el` 來建立偽元素。
有時需使用 `content` 屬性顯示特定內容，使用插值語法 `#{}` 讓變數 `$content` 可以正常帶入。
```scss
@mixin p-el($el, $content, $el-width, $el-height) {
  &:#{$el} {
  content: '#{$content}';
  position: absolute;
  }
}
```
增加 `width`, `height` 的屬性，並通過變數 `$el-width`, `$el-height` 帶入值來顯示偽元素。
```scss
@mixin p-el($el, $content, $el-width, $el-height) {
  &:#{$el} {
  content: '#{$content}';
  position: absolute;
  width: $el-width;
  height: $el-height;
  @content;
  }
}
```
`@content` 的用途主要是拿來傳遞內容到Mixin裡面。

1. 目前無法避免 `$el` 會帶入 `before` or `after` 以外的值，為避免編譯出的CSS無作用，使用 `@if`, `@warn` 指令來加入判斷。
輸入`before` or `after` 會正常編譯出CSS檔案，而以外的值時編譯會出現錯誤訊息。 
```scss
@mixin p-el($el, $content, $el-width, $el-height) {
  @if $el == "before" or $el == "after" {
    &:#{$el} {
      ...
    }
  }
  @else {
    @warn "`#{$el}` is not a valid pseudo-element.";
  }
}
```

## 引入方式

```scss
@include p-el($el, $content, $el-width, $el-height) {
  其他樣式;
}
// 不顯示content內容
@include p-el($el, null, $el-width, $el-height) {
  其他樣式;
}
```