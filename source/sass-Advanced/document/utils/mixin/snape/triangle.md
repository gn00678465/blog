---
title: triangle
date: 2020-02-08 09:53:14
---

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
      <td>$size</td>
      <td>number (with unit)</td>
      <td>可輸入2個參數，第一個參數為 width，第二個為 height，如只輸入一個參數則 width = height。</td>
    </tr>
    <tr>
      <td>$color</td>
      <td>color</td>
      <td>可輸入2個參數，第一個參數為 前景顏色，第二個為背景顏色，如只輸入一個參數則預設背景顏色為透明。</td>
    </tr>
    <tr>
      <td>$direction</td>
      <td>string</td>
      <td>The direction the triangle should point. Accepts up, up-right, right, down-right, down, down-left, left or up-left.</td>
    </tr>
  </tbody>
</table>
{% endraw %}

```scss
@mixin triangle ($size, $color, $direction) {
  $width: nth($size, 1);
  $height: nth($size, length($size));
  $foreground-color: nth($color, 1);
  $background-color: transparent !default;

  @if (length($color) == 2) {
    $background-color: nth($color, 2);
  }

  @if ($direction == up) or ($direction == down) or ($direction == right) or ($direction == left) {
    $width: $width / 2;
    @if $direction == up {
      border-left: $width solid $background-color;
      border-right: $width solid $background-color;
      border-bottom: $height solid $foreground-color;
    } @else if $direction == right {
      border-top: $width solid $background-color;
      border-bottom: $width solid $background-color;
      border-left: $height solid $foreground-color;
    } @else if $direction == down {
      border-left: $width solid $background-color;
      border-right: $width solid $background-color;
      border-top: $height solid $foreground-color;
    } @else if $direction == left {
      border-top: $width solid $background-color;
      border-bottom: $width solid $background-color;
      border-right: $height solid $foreground-color;
    }
  }

  @else if ($direction == up-right) or ($direction == up-left) {
    border-top: $height solid $foreground-color;
    @if $direction == up-right {
      border-left:  $width solid $background-color;
    } @else if $direction == up-left {
      border-right: $width solid $background-color;
    }
  }

  @else if ($direction == down-right) or ($direction == down-left) {
    border-bottom: $height solid $foreground-color;
    @if $direction == down-right {
      border-left:  $width solid $background-color;
    } @else if $direction == down-left {
      border-right: $width solid $background-color;
    }
  }

  @else if ($direction == inset-up) {
    border-width: $height $width;
    border-style: solid;
    border-color: $background-color $background-color $foreground-color;
  }

  @else if ($direction == inset-down) {
    border-width: $height $width;
    border-style: solid;
    border-color: $foreground-color $background-color $background-color;
  }

  @else if ($direction == inset-right) {
    border-width: $width $height;
    border-style: solid;
    border-color: $background-color $background-color $background-color $foreground-color;
  }

  @else if ($direction == inset-left) {
    border-width: $width $height;
    border-style: solid;
    border-color: $background-color $foreground-color $background-color $background-color;
  }
}
```

```scss
@include triangle($width $height, $foreground-color $background-color, $direction)
```
<div class="result result--light">
  <div class="ribbon ribbon--success">

  </div>
</div>