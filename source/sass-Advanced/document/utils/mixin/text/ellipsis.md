---
title: 省略文字
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
      <td>$width (100%)</td>
      <td>number</td>
      <td>The <code>max-width</code> for the string to respect before being truncated.</td>
    </tr>
    <tr>
      <td>$display (inline-block)</td>
      <td>string</td>
      <td>	
Sets the display-value of the element.</td>
    </tr>
  </tbody>
</table>
{% endraw %}

```scss
@mixin ellipsis(
  $width: 100%,
  $display: inline-block
) {
  display: $display;
  max-width: $width;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
```

```scss
.element {
  @include ellipsis;
}
```