---
title: CSS/Sass 設計模式
date: 2020-01-30 10:57:58
categories:
- CSS
tags:
- CSS
- Sass
---
{% asset_img css.jpeg %}
{%cq%}
"CSS is simple..., it's simple to understand.
But CSS is not simple to use or maintain."
CSS易於理解，但應用和維護上並不簡單。
{%endcq%}
<!--more-->

因此，就有人提出了CSS 模組化方法，分別為：**OOCSS**、**[SMACSS](#SMACSS)**、**[BEM](#BEM)**。

良好的CSS架構，包含以下4個特點。
{% note primary %}
- 預測 - Predictable
- 復用 - Reusable
- 維護 - Maintainable
- 延展 - Scalable
{% endnote %}

將CSS屬性分類
{% note primary %}
- 結構 : margin、padding、display、vertical-align
- 外觀
  - 色彩 : color、background-color、border-color
  - 尺寸 : font-size、height
- 容器 : grid、card、form、nav、header、footer
- 內容 : button、input、progress-bar
{% endnote %}

命名規範

- 駝峰式命名
> 單字之間不以空格斷開、連接號（-）、底線（_）連結，有兩種格式

1. 小駝峰式命名法（lower camel case）
  - 第一個單字以小寫字母開始；第二個單字的首字母大寫
1. 大駝峰式命名法（upper camel case）
  - 每一個單字的首字母都採用大寫字母，也被稱為Pascal命名法

- 命名使用 `-` or `_`？
> 使用上無特別限制，但最好保持一致性。

- 拋棄語意命名
  1. 使用工具、功能性質命名
  1. 色彩以功能、主色性質命名
    - `.btn-red` 改成 `.btn-danger`
  1. layout 以格線方式來設計
    - 如： `.sidebar` 改成 `.col`

# SMACSS
## What is SMACSS
>Scalable and Modular Architecture for CSS

<a href="http://smacss.com" class="Btn Btn__secondary Btn--v">
<span>Home page</span>
</a>

- Categorization
  - 將結構分類
- Naming ruled
  - 命名規則
- Decoupling CSS from HTML
  - 將 CSS 從 HTML 分離

## Categorization
1. Base
{% note info %}
- CSS Reset
- 網頁的基本樣式
- 全程只使用Tag Selector，不用ID/Class Selector
- 在base中千萬不要用 `!important`
{% endnote %}
<table>
  <thead>
    <tr>
      <th>全站設定，整個網站的基本樣式。</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      EX:
      ```SCSS
      body, form {
        margin: 0;
        padding: 0;
      }
      a {
        color: #039;
        &:hover {
          color: darken(#039, 10%)
        }
      }
      img {
        max-width: 100%;
        height: auto
      }
      ```
      </td>
    </tr>
  </tbody>
</table>

2. Layout
{% note info %}
- 將網頁切割成不同區塊（元素），大區塊如html5新增的一些tag，如header，footer，section會被定義成Layout。
- 主要的 layout 再頁面中應該是唯一的存在，採用使用 ID selectors
- 次要的 layout & 若會重複出現則採用  class selectors
- 命名規則以 .l-* 作為前綴詞
{% endnote %}
<table>
  <thead>
    <tr>
      <th>Layout分割。</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      EX:
      ```SCSS
      #header, #article, #footer {
        width: 960px;
        margin: auto;
      }
      #article {
        border: solid #CCC;
        border-width: 1px 0 0;
      }
      #content {
        l-list {
          color: blue;
        }
      }
      ```
      </td>
    </tr>
  </tbody>
</table>

3. Module
{% note info %}
- 頁面上可單獨存在並可重複使用的元件
- 定義Module避免使用ID selectors 或 tag
- 子模組以主模組名稱加上 (-) 作為名稱。
- 子模組內的元素也可增加樣式
{% endnote %}
{% note primary %}
將結構與樣式分離，以pure button為例。
```scss
// 主模組/結構
.pure-button {
  display: inline-block;
  zoom: 1;
  line-height: normal;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
}
// 基本樣式
.pure-button {
  font-family: inherit;
  font-size: 100%;
  padding: 0.5em 1em;
  color: #444; /* rgba not supported (IE 8) */
  color: rgba(0, 0, 0, 0.80); /* rgba supported */
  border: 1px solid #999;  /*IE 6/7/8*/
  border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/
  background-color: #E6E6E6;
  text-decoration: none;
  border-radius: 2px;
  &-hover,
  &:hover,
  &:focus {
    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
  }
  &:focus {
    outline: 0;
  }
  &-active,
  &:active {
    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
    border-color: #000;
  }
}
// 子模組
.pure-button-primary,
.pure-button-selected,
a.pure-button-primary,
a.pure-button-selected {
    background-color: rgb(0, 120, 231);
    color: #fff;
}
```
{% endnote %}

4. State
{% note info %}
- 與 layout 或是 module 搭配
- 為了表現使用者在網頁上觸發的種種動作或特效
- 可搭配 JavaScript 來改變樣式
- 命名規則以 .is-* 作為前綴詞
{% endnote %}
5. Theme
{% note info %}
- 提供主題式的定義顏色與樣式
- 命名規則以 .theme-* 作為前綴詞
{% endnote %}

# OOCSS
## What is OOCSS
>Object Oriented CSS，意謂物件導向的CSS，其主要的兩個原則

## Separate container and content
  - 容器和內容分離
{% asset_img OOCSS_1.png Separate container and content%}
## Separate structure and skin
  - 結構和外觀分離
{% asset_img OOCSS_2.png Separate container and content%}

# BEM

## What is BEM
>Block Element Modifier
以元件觀念進行開發，具有重用性。 它擁有 OOCSS 的架構清楚的美好，也沒有 SMACSS 複雜或令人混淆的部份

1. Block - 區塊
{% note info %}
- 頁面上可單獨存在並可重複使用的元件
- 如同 SMACSS 內的 Layout,Module
- 每一個 Block 皆為獨立存在的
- 命名規則
  - 如： `.button` 、 `.menu` 、 `.text-filed`
  - 前綴詞非必要： `.b-btuuon` 、 `.b-menu`
{% endnote %}
1. Element - 元素
{% note info %}
- 於 Block 中的小元件
- 無法獨立於 Block 外
- 命名規則
  - Block 名稱並加上雙底線`__`作為前綴詞。
  - `.button__icon` 、 `.menu__item`
{% endnote %}
1. Modifier - 修飾子
{% note info %}
- Modifier 是定義 Block 和 Element 的外觀、狀態或類型
- 如同 SMACSS 內的 state
- 命名規則
  - Block 或 Element 名稱並加上雙 dash`--`作為前綴詞。
  - `.button--active` 、 `.menu--active`
{% endnote %}

## 搭配 Sass 組合技
>使用 `&`連結詞 可以快速的產生符合 BEM 設計規範的命名

```scss
.list {
  &__item { 樣式 }
  &__img {
    樣式
    &--change { 樣式 }
  }
}

.card {
  &__body { 樣式 }
  &__img {
    樣式
    &--top { 樣式 }
  }
}
```