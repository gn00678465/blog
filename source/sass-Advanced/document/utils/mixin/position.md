---
title: position
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
      <td>$type</td>
      <td>string</td>
      <td>position 的屬性，只能輸入 absolute relative fixed sticky.</td>
    </tr>
    <tr>
      <td>$top</td>
      <td>number</td>
      <td>與 top 的距離</td>
    </tr>
    <tr>
      <td>$right</td>
      <td>number</td>
      <td>與 right 的距離</td>
    </tr>
    <tr>
      <td>$bottom</td>
      <td>number</td>
      <td>與 bottom 的距離</td>
    </tr>
    <tr>
      <td>$left</td>
      <td>number</td>
      <td>與 left 的距離</td>
    </tr>
  </tbody>
</table>
{% endraw %}

```scss
@mixin position(
  $type,
  $top: $position-default,
  $right: $position-default,
  $bottom: $position-default,
  $left: $position-default
) {
  $allowed_types: absolute relative fixed sticky;
  @if not index($allowed_types, $type) {
    @warn "Unknown position: #{$type}.";
  } @else {
    position: $type;
    @each $data in top $top, right $right, bottom $bottom, left $left {
      #{nth($data, 1)}: nth($data, 2);
    }
  }
}
```

```scss
.element {
  @include ellipsis;
}
```