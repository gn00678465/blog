---
title: Array_Method
categories:
  - JavaScript
tags:
  - JavaScript
  - Array
date: 2020-03-26 06:11:31
---

Array_Method

<!--more-->

# push()

{% note info %}
`push()` 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.push(element1[, ...[, elementN]])
```
</div>

# splice()

{% note info %}
`plice()` 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容
{% endnote%}

<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.splice(start[, deleteCount[, item1[, item2[, *...]]]]*)
```
</div>

- `start`
  1. 陣列中要開始改動的元素索引（起始為 0）
  2. 若索引大於陣列長度，則實際開始的索引值會被設為陣列長度。
  3. 若索引為負，則會從陣列中最後一個元素開始往前改動（起始為 -1）且若其絕對值大於陣列的長度，則會被設為 0。

- `deleteCount`
  1. 一個表示欲刪除的原陣列元素數量的整數。
  2. 若省略了 `deleteCount`，或假如其值大於 `array.length - start`（也就是 `deleteCount`大於 `start` 算起的剩餘元素數量），則所有從 `start` 開始到陣列中最後一個元素都會被刪除。
  3. 若 `deleteCount` 為 0 或是負數，則不會有元素被刪除。因此 `deleteCount` or item 至少需填入其中一項。

- `item`
  1. 從 `start` 開始，要加入到陣列的元素。
  2. 沒有指定任何元素，則 `splice()` 只會依照 `start` 和 `deleteCount` 刪除陣列的元素。

# indexOf()

{% note info %}
`indexOf()` 方法會回傳給定元素於陣列中**第一個被找到之索引**，若不存在於陣列中則回傳 **-1**。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.indexOf(searchElement[, fromIndex])
```
</div>

- `searchElement`
欲在陣列中搜尋的元素。
- `fromIndex`
陣列中搜尋的起始索引。

1. 若索引值大於或等於陣列長度，會直接回傳 -1，意即不會在陣列中搜尋。
2. 若索引值是一個負數，則會從陣列的最後一個往回算，意謂最後一個的索引值為 -1，以此類推。

# filter()

{% note info %}
`filter()` 為一個callback function，用於測試陣列中的每個元素。回傳值為 `true` 時將當前的元素保留至新陣列中，若為 `false` 則不保留，很適合用在搜尋符合條件的資料。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.filter(function(element, index, array), thisArg)
```
</div>

可傳入三個參數：

1. element：必要；原陣列目前所迭代處理中的元素。
2. index：可選的；原陣列目前所迭代處理中的元素之索引。
3. array：可選的；呼叫 `filter` 方法的陣列。
4. thisArg：可選的；執行 `callback` 回呼函式的 `this` 值。

# find()

{% note info %}
`find()` 方法會回傳第一個滿足所提供之測試函式的元素值。否則回傳 **undefined**。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.find(function(element, index, array), thisArg)
```
</div>


# forEach()

{% note info %}
`forEach()` 方法會將陣列內的每個元素，皆傳入 callback function 執行一次，但**不會**額外回傳值。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.forEach(function(element, index, array), thisArg)
```
</div>


# map()

{% note info %}
`map()` 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由 callback function 運算後所**回傳的結果之集合**。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.map(function(element, index, array), thisArg)
```
</div>


* 如果不回傳則是 `undefined`
* 回傳數量等於原始陣列的長度

# findIndex()

{% note info %}
`findIndex()` 方法將依據提供的測試函式，尋找陣列中符合的元素，並返回其 **index（索引）**。
如果沒有符合的對象，將返回 **-1** 。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.findIndex(function(element, index, array), thisArg)
```
</div>

# every()

{% note info %}
`every()` 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。
回傳的是**布林值**。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.every(function(element, index, array), thisArg)
```
</div>
可傳入三個參數：

* element：必要；目前正要被處理的陣列元素。
* index：可選的；目前正要被處理的陣列元素之索引值。
* array：可選的；呼叫 `every()` 的陣列。
* thisArg：可選的；執行 `callback` 回呼函式的 `this` 值。

# some()

{% note info %}
`some()` 方法會透過callback function，對陣列中所有的元素進行測試，若是有任何一個元素測試通過，
則立即返回true，不再對其他元素進行測試。
回傳的是**布林值**。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.some(function(element, index, array), thisArg)
```
</div>

可傳入三個參數：

* element：必要；目前正要被處理的陣列元素。
* index：可選的；目前正要被處理的陣列元素之索引值。
* array：可選的；呼叫 `some()` 的陣列。
* thisArg：可選的；執行 `callback` 回呼函式的 `this` 值。

# reduce()

{% note info %}
`reduce()` 方法將一個累加器及陣列中每項元素（由左至右）傳入callback function，將陣列化為單一值。
{% endnote%}
<div class="codeBox">
  <div class="ribbon">Syntax</div>
```js
Array.reduce(function(accumulator, currentValue, currentIndex, array){
});
```
</div>

* accumulator: 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
* currentValue: 當前變數
* currentIndex: 當前索引
* array: 全部陣列