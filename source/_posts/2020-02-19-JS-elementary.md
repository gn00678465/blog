---
title: JS_elementary
categories:
  - null
tags:
  - null
  - null
date: 2020-02-19 20:39:01
---
JS_elementary
<!--more-->

# 控制判斷

## if

### 單條件
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
if (判斷式) {
  陳述式 1
} else {
  陳述式 2
}
```
</div>

{% note info %}
當 `()` 內的判斷式成立時，便會執行 `{}` 內的陳述式 1 ，否則會執行 `else{}` 內的陳述式 2。
{% endnote %}

### 多條件
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
if (判斷式A) {  陳述式 1 }
else if (判斷式B) {  陳述式 2 } 
...
else {  陳述式 3  }
```
</div>

{% note info %}
1. 當 `(判斷式A)` 成立時，便會執行 `{陳述式 1}`。
1. 當 `(判斷式A)` 不成立但 `(判斷式B)` 成立時，便執行 `{陳述式 2}`。
1. 當所有判斷式皆不成立，便執行 `else{}` 內的陳述式 3。

- 可設立多於1組以上的條件。
{% endnote %}

## switch

{% note success no-icon %}
控制判斷中的邊緣人。
當 `if` ... `else if` 條件太多的狀況下，可以使用 `switch`
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
switch (expression) {
  case value1:
    //當 expression 的值符合 value1
    //要執行的陳述句
  break;
  case value2:
    //當 expression 的值符合 value2
    //要執行的陳述句
  break;
  ...
  default:
    //當 expression 的值都不符合上述條件
    //要執行的陳述句
  break;
}
```
</div>

{% note info %}
1. 設定一個表達式 `switch()`，且包含一個條件。
1. case: 比對 case 的 value，當符合就會執行與此條件相關的陳述式。
1. default: 當所有條件皆未成立時，便會執行 default，default 不一定要放在最後位置。
1. break: 阻止已完成的區塊繼續執行。
{% endnote %}

# 迴圈

{% note primary %}
迴圈提供一個快速又簡潔的方法來重複地做某件事。
{% endnote %}

## for 迴圈
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( [初始表達式] ; [條件式] ; [遞增表達式]) {
  陳述式
}
```
</div>

{% note info %}
- 迴圈內須以 `;` 區分各個條件。
1. 初始表達式 - 代表初始狀態，可為 1個 或 多個，這個表達式也能用來宣告變數。
1. 條件式 - 如果評估出的值為true，便會執行陳述式的內容。但如果評估出的值為false，這個for迴圈便會中止。
1. 遞增表達式 - 會在陳述式每次被執行後執行。
{% endnote %}

## for array

{% note success no-icon %}
迴圈與陣列搭配使用。
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( let i = 0 ; i < array.lengh ; i++ ) {
  陳述式
}
```
</div>

## for if

{% note success no-icon %}
迴圈與 if 判斷式搭配使用。
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( let i = 0 ; i < array.lengh ; i++ ) {
  if ( 判斷式 ) {
    if 陳述式
  }
  for 陳述式
}
```
</div>

## for break

{% note success no-icon %}
迴圈與 break 搭配使用。
當達到某條件的情況下，迴圈就會中斷。
{% endnote %}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```javascript
for ( let i = 0 ; i < array.lengh ; i++ ) {
  if ( 判斷式 ) {
    if 陳述式
    break;
  }
  for 陳述式
}
```
</div>

# DOM