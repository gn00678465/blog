---
title: Counters
---

{% note info %}
CSS counters 就像1個變數，可以依照CSS的規則增加計數器的數值。
搭配偽元素 `::before` and `::after` 將產生的計數器插入 `content` 內。
{% endnote %}

# properties

<div class="timeline">
  <dl class="timeline--entry">
    <dt class="timeline--entry__title"><code>counter-reset</code></dt>
    <dd class="timeline--entry__detail">Creates or resets a counter.</dd>
    <dd class="timeline--entry__detail">建立 or 重置計數器。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title"><code>counter-increment</code></dt>
    <dd class="timeline--entry__detail">Increments a counter value.</dd>
    <dd class="timeline--entry__detail">增加計數器的值。</dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title"><code>counter()</code> or <code>counters()</code></dt>
    <dd class="timeline--entry__detail">function - Adds the value of a counter to an element.</dd>
    <dd class="timeline--entry__detail">將計數器的值插入至元素內。</dd>
  </dl>
</div>

```css
div{
  counter-reset:num;
}
div::before{
  counter-increment:num; 
  content:counter(num) '. ';
}
```

1. `counter-reset:num` num 是計數器累加數值的變數。
2. `counter-increment:num` 把 num 累加上去，預設數值為加 1。
3. `content:counter(num)` 將計數器的值透過 content 顯示出來。

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```css
counter(計數器名稱, list-style-type)
```
</div>

{% raw %}
<style>
.palmar {
  counter-reset: num;
}
.palmar span {
  display: block;
}
.palmar span::before {
  counter-increment: num;
  content: counter(num) ". ";
}
</style>
<div class="result result--light">
  <div class="ribbon ribbon--success">counter</div>
<div class="palmar">
  <span>天眾敬生靈</span>
  <span>人眾歸老境</span>
  <span>刀途厄病苦</span>
  <span>血途漫死塵</span>
  <span>火途煉修羅</span>
</div>
</div>
{% endraw %}

<br>
如果要更換數字的樣式，也可以透過 list-style-type 設定值來更改。<br>
<a href="https://www.w3schools.com/cssref/pr_list-style-type.asp" target="_blank" class="Btn Btn__success Btn--v">
<span>list-style-type</span>
</a>

# counter 進階用法

1. counter 也可以同時指定多個變數
counter-reset 可以指定多個變數，透過一個空白字元分隔，如果空白字元後面接著數字則是起始值，沒有數字預設為 0。

    ```css
    div{
      counter-reset:nums 2 nume 4;
    }
    span::before{
      counter-increment:nums 2; 
      content:counter(numi) '. ';
    }
    em::before{
      counter-increment:nume 3; 
      content:counter(numb) '. ';
    }
    ```
    - `span` 標籤的初始值為 2 ，每次增加數值為 2；
    - `em` 標籤的初始值為 4 ，每次增加數值為 3；

1. 巢狀結構
counter 還提供了另外一個 `counters` 的功能，目的就是來解決巢狀結構的情況 (1 > 1.1 > 1.1.1)。

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```css
counters(計數器名稱, 分隔字, list-style-type)
```
</div>

<table>
  <tr>
    <td>
```html
<ol class="palmar-2">
  <li class="item">菩提三悟
    <ol class="outer">
      <li class="item">菩提明鏡</li>
      <li class="item">無樹非台</li>
      <li class="item">來處惹何埃</li>
    </ol>
  </li>
  <li class="item">金剛四正
    <ol class="outer">
      <li class="item">金剛般若</li>
      <li class="item">怒相行深</li>
      <li class="item">照見諸法</li>
      <li class="item">自在觀空</li>
    </ol>
  </li>
  <li class="item">摩訶五趣
    <ol class="outer">
      <li class="item">人眾歸老境</li>
      <li class="item">刀途厄病苦</li>
      <li class="item">血途漫死塵</li>
      <li class="item">火途煉修羅</li>
      <li class="item">天眾敬生靈</li>
    </ol>
  </li>
</ol>
```
    </td>
    <td>
```scss
.palmar-2, .outer {
  counter-reset:section;
  list-style-type: none;
  .item {
    &::before {
      counter-increment: section;
      content: counters(section, ".") ". ";
    }
  }
}
.outer {
  margin-left: -20px;
}
```
    </td>
  </tr>
</table>

{% raw %}
<style>
.palmar-2, .outer {
  counter-reset: section;
  list-style-type: none;
}
.palmar-2 .item::before, .outer .item::before {
  counter-increment: section;
  content: counters(section,".") ". ";
}

.outer {
  margin-left: -20px;
}
</style>
<div class="result result--light">
  <div class="ribbon ribbon--success">counters</div>
<ol class="palmar-2">
  <li class="item">菩提三悟
    <ol class="outer">
      <li class="item">菩提明鏡</li>
      <li class="item">無樹非台</li>
      <li class="item">來處惹何埃</li>
    </ol>
  </li>
  <li class="item">金剛四正
    <ol class="outer">
      <li class="item">金剛般若</li>
      <li class="item">怒相行深</li>
      <li class="item">照見諸法</li>
      <li class="item">自在觀空</li>
    </ol>
  </li>
  <li class="item">摩訶五趣
    <ol class="outer">
      <li class="item">人眾歸老境</li>
      <li class="item">刀途厄病苦</li>
      <li class="item">血途漫死塵</li>
      <li class="item">火途煉修羅</li>
      <li class="item">天眾敬生靈</li>
    </ol>
  </li>
</ol>
</div>
{% endraw %}