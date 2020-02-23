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