---
title: JavaScript 基礎介紹(運算子、型別與文法)
date: 2019-12-02 22:18:47
tags:
---

# JavaScript 基礎介紹(運算子、型別與文法)

## 陳述式與表達式

- **陳述式( Statement )**：JS的語句類型，用於命令執行指定的一系列操作，最大的特徵是{% label primary@不會回傳結果 %}，使用如下。
  + 流程控制：break、if...else。
  + 宣告：var、let、const。
  + 函數(function)
  ```javascript
  // 函式陳述式、具名函式
  function callName() {
    .....
  }
  ```
  + 迭代（Iteration)；for迴圈等等。
  + {% link 可以參考MDN裡面對陳述式與宣告的詳細說明及舉例 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements true 陳述式與宣告 %}
- **表達式( Expression )**：又可稱為表示式、運算式，經常可透過一些符號結合上下語句運算並{% label primary@回傳結果 %}。
  + 運算子：+、-、*、/、%，一般四則運算、餘數。
  + 函數(function)
  ```javascript
  // 函式表達式、匿名函式
  var callName = function() {
    .....
  }
  ```
  + {% link 可以參考MDN裡面對運算式與運算子的詳細說明及舉例 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators true 運算式與運算子 %}

**常見誤解：**
**Block**結構可以內含Statement，或是Expression作為物件實字 (Object Literal)。
- Statement
  ```javascript
  { 
  var ming = '小明' 
  }
  ```
  如果把這段block賦值給另一個變數，則會出現錯誤：
  ```javascript
  var a = { 
  var ming = '小明' 
  }
  //錯誤
  ```
  若用ES6的const或let宣告變數，則該變數的作用域僅會在他所屬的block內。
  ```javascript
  { 
  const ming = '小明' 
  }
  console.log(ming);    //ming is not definded
  ```
- 物件實字
```javascript
  { 
  ming: '小明'
  }
  ```
  block裡面的是expression，所以他可以被賦值給變數：
  ```javascript
  var a = { 
  ming: '小明'
  }
  ```