---
title: 隱藏文字
---

```scss
@mixin hide-text {
  overflow: hidden;
  text-indent: 101%;
  white-space: nowrap;
}
```

```scss
.element {
  @include hide-text;
}
```