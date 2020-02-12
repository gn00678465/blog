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

# Bootstrap Grid system

- 名詞介紹
<img src="/sass-Advanced/index/bootstrap_grid.png" width="900px" alt="Bootstrap Grid system">

1. col
```scss
.col-**-* {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
```
透過此方式，不斷排列時也可以維持相同的Gutter。
<img src="/sass-Advanced/index/bootstrap_grid_col.png" width="900px" alt="Column">

1. row

<img src="/sass-Advanced/index/bootstrap_grid_row.png" width="900px" alt="Row">
透過<strong>負值 margin</strong> 向外推。

1. container
此時因有外部的Gutter的寬度，於小畫面載具時會出現 scroll bar，為避免此情況發生。
<img src="/sass-Advanced/index/bootstrap_grid_container.png" width="900px" alt="Container">
最後透過<strong>padding</strong> 補回空間。

{% raw %}
<style>
.wrapper {
  max-width: 90%;
  margin: 1rem auto;
}

/*Basic Grid Styles*/
.Grid {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}

.u-textCenter {
  text-align: center;
}

.Grid-cell {
  flex: 1;
}

.Demo {
  padding: .8em 1em 0;
  margin-bottom: 1em;
  background: rgba(51, 153, 204, 0.2);
  transition: background-color 0.3s ease;
  border: 1px solid #33cccc;
  border-radius: 3px;
}
.Demo:after {
  content: "";
  display: block;
  margin-top: .8em;
  height: 1px;
}
.Demo:hover {
  background: rgba(51, 153, 204, 0.6);
}

/* With gutters*/
.Grid--gutters {
  margin-left: -1em;
}
.Grid--gutters .Grid-cell {
  padding-left: 1em;
}
.Grid--gutters .Grid--nested .Grid-cell:first-of-type .Demo {
  margin-right: 1em;
}

/*===========================================*/
/* Base classes for all media - Mobile first */
.Grid--cols-2 > .Grid-cell {
  flex: 0 0 100%;
}

.Grid--cols-3 > .Grid-cell {
  flex: 0 0 100%;
}

.Grid--cols-4 > .Grid-cell {
  flex: 0 0 100%;
}

.Grid--cols-6 > .Grid-cell {
  flex: 0 0 calc(50% - 1em);
}

.Grid--cols-12 > .Grid-cell {
  flex: 0 0 calc(33.3333% - 1em);
}

.Grid--holly-grail .aside, .Grid--holly-grail .main {
  flex: 1 100%;
}

/* One of -- columns*/
.Grid--1of2 > .Grid-cell,
.Grid--1of4 > .Grid-cell:first-of-type,
.Grid--1of3 > .Grid-cell:first-of-type {
  flex: 0 0 100%;
}

.Grid--1of6 > .Grid-cell:first-of-type {
  flex: 0 0 50%;
}

.Grid--fit > .Grid-cell {
  flex: 1;
}

.Grid--full > .Grid-cell {
  flex: 0 0 100%;
}

/* Tablet (medium) screens */
@media (min-width: 30em) {
  .Grid--cols-4 > .Grid-cell {
    flex: 0 0 calc(50% - 1em);
  }

  .Grid--cols-6 > .Grid-cell {
    flex: 0 0 calc(33.3333% - 1em);
  }

  .Grid--cols-12 > .Grid-cell {
    flex: 0 0 calc(16.6666% - 1em);
  }

  .Grid--holly-grail .aside {
    flex: 1 calc(25% - 1em);
  }

  .Grid--1of2 > .Grid-cell {
    flex: 0 0 50%;
  }

  .Grid--1of6 > .Grid-cell:first-of-type {
    flex: 0 0 30%;
  }

  .Grid--1of4 > .Grid-cell:first-of-type {
    flex: 0 0 50%;
  }

  .Grid--1of3 > .Grid-cell:first-of-type {
    flex: 0 0 100%;
  }
}
/* Large screens */
@media (min-width: 48em) {
  .Grid--cols-2 > .Grid-cell,
  .Grid--cols-3 > .Grid-cell,
  .Grid--cols-4 > .Grid-cell,
  .Grid--cols-6 > .Grid-cell,
  .Grid--cols-12 > .Grid-cell {
    flex: 1;
  }

  .Grid--holly-grail .main {
    flex: 2;
  }
  .Grid--holly-grail .aside {
    flex: 1;
  }
  .Grid--holly-grail .aside-1 {
    order: 1;
  }
  .Grid--holly-grail .main {
    order: 2;
  }
  .Grid--holly-grail .aside-2 {
    order: 3;
  }

  .Grid--1of2 > .Grid-cell {
    flex: 0 0 50%;
  }

  .Grid--1of6 > .Grid-cell:first-of-type {
    flex: 0 0 16.6666%;
  }

  .Grid--1of4 > .Grid-cell:first-of-type {
    flex: 0 0 25%;
  }

  .Grid--1of3 > .Grid-cell:first-of-type {
    flex: 0 0 30%;
  }

  .Grid--gutters.Grid--nested .Grid-cell:first-of-type .Demo {
    margin-right: 0;
  }
}
.content-1of1::before {
  content: "1";
}

.content-1of2::before {
  content: "1/2";
}

.content-1of3::before {
  content: "1/3";
}

.content-1of4::before {
  content: "1/4";
}

.content-1of6::before {
  content: "1/6";
}

.content-1of12::before {
  content: "1/12";
}
</style>
<div class="result result--light">
<div class="ribbon ribbon--primary">Bootstrap Grid</div>
<div class="wrapper">
  <div class="Grid Grid--full u-textCenter">
    <div class="Grid-cell">
      <div class="Demo content-1of1"></div>
    </div>
  </div>
  <div class="Grid Grid--gutters Grid--cols-2 u-textCenter">
    <div class="Grid-cell">
      <div class="Demo content-1of2"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of2"></div>
    </div>
  </div>
  <div class="Grid Grid--gutters Grid--cols-3 u-textCenter">
    <div class="Grid-cell">
      <div class="Demo content-1of3"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of3"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of3"></div>
    </div>
  </div>
  <div class="Grid Grid--gutters Grid--cols-4 u-textCenter">
    <div class="Grid-cell">
      <div class="Demo content-1of4"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of4"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of4"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of4"></div>
    </div>
  </div>
  <div class="Grid Grid--gutters Grid--cols-6 u-textCenter">
    <div class="Grid-cell">
      <div class="Demo content-1of6"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of6"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of6"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of6"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of6"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of6"></div>
    </div>
  </div>

  <div class="Grid Grid--gutters Grid--cols-12 u-textCenter">
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
    <div class="Grid-cell">
      <div class="Demo content-1of12"></div>
    </div>
  </div>
</div>
</div>
{% endraw %}

# 自製 Grid system
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