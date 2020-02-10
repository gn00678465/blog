---
title: Grid system
---

**Gride system 模組化特點**
優點：
  1. 避免命名上的問題
  1. 整體性高
  1. 可用性高
缺點：
  1. 變化性受限

```scss
$gutter-width: 30px;
$grid-num: 12;

@mixin row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
%col {
  max-width: 100%;
  position: relative;
  min-height: 1px; // Prevent columns from collapsing when empty
  padding-left: ($gutter-width / 2);
  padding-right: ($gutter-width / 2);
}
@mixin pad {
  @media (mix-width: 767px) {
    @content
  }
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding-left: $gutter-width / 2;
  padding-right: $gutter-width / 2;
}
.row {
  @include row;
  margin-right: -($gutter-width / 2);
  margin-left: -($gutter-width / 2);
}

@for $i from 1 through $grid-num {
  .col-#{$i} {
    @extend %col;
  }
}

@include pad {
  @for $i from 1 through $grid-num {
    .col-#{$i} {
      max-width: percentage($i / $grid-num);
      flex: 0 0 percentage($i / $grid-num);
    }
  }
}
```