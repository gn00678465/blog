---
title: JavaScript 基礎介紹(運算子、型別與文法)
date: 2019-12-02 22:18:47
tags:
- JavaScript
---
**JavaScript 基礎介紹(運算子、型別與文法)**

<!--more-->

# 陳述式與表達式

- **陳述式( Statement )**：JS的語句類型，用於命令執行指定的一系列操作，最大的特徵是{% label primary@不會回傳結果 %}，使用如下。
  + 流程控制：block、break、if...else。
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

# ASI (Automatic Semicolon Insertion)
按照 ECMAScript 標準，一些 特定語句（statement) 必須以分號結尾。分號代表這段語句的終止。
但是有時候為了方便，這些分號是有可以省略的。這種情況下解釋器會自己判斷語句該在哪裡終止。這種行為被叫做 “自動插入分號”，簡稱 ASI (Automatic Semicolon Insertion) 。
特定語句有：
+ 空語句
+ let
+ const
+ import
+ export
+ 變量賦值
+ 表達式
+ debugger
+ continue
+ break
+ return
+ throw

ECMAScript 標準定義的 ASI 包括 三條規則 和 兩條例外。

{% note info %}
<font size=3>

{% label primary@三條規則 %}是描述何時該自動插入分號：
1. 解析器從左往右解析代碼（讀入 token），當碰到一個不能構成合法語句的 token 時，它會在以下幾種情況中在該 token 之前插入分號，此時這個不合群的 token 被稱為 offending token ：
  + 如果這個 token 跟上一個 token 之間有至少一個換行。
  + 如果這個 token 是 {% label danger@} %}。
  + 如果 前一個 token 是 {% label danger@) %}，它會試圖把前面的 token 理解成 {% label danger@do...while %} 語句並插入分號。
1. 當解析到文件末尾發現語法還是有問題，就會在文件末尾插入分號。
1. 當解析時碰到 restricted production 的語法（比如 {% label danger@return %}），並且在 restricted production 規定的 {% label danger@[no LineTerminator here] %}的地方發現換行，那麼換行的地方就會被插入分號。

{% note danger%}
  restricted production它是一組有嚴格限定的語法的統稱，這些語法都是在某個地方不能換行的，不能換行的地方會被標註 <font color="red">[no LineTerminator here]</font>。
  ECMAScript 的 return 語法定義如下：
  ```javascript
  return [no LineTerminator here] Expression ;
  ```

{% endnote %}

{% label primary@兩條例外 %}：就算符合上述規則，如果分號會被解析成下面的樣子，它也不能被自動插入。
1. 分號不能被解析成空語句。
1. 分號不能被解析成 {% label danger@for %} 語句頭部的兩個分號之一。

</font>
{% endnote %}
Ref: [JavaScript ASI 機制詳解](https://segmentfault.com/a/1190000004548664)

# 動態型別
 JavaScript 是屬於動態型別，在執行階段才會確定型別，而型別是由賦予的值所定義的，且型別是可以變換的。
 ```javascript
 var name;
console.log(typeof name)  // string
name = '小明'
console.log(typeof name)  // string

 var num = 1
 Console.log(typeof num)  // number
 num = '文字'
 console.log(typeof num)  // string
```
## 型別轉換的陷阱
+ 顯性的轉換( Explicit conversion )：是當原本變數的值，直接被賦予另一個型別的值
+ 隱性的轉換( Implicit conversion )：須了解運算過程中型別的變化，不然會造成難以預期的結果。
```javascript
//範例
var num = 1;
console.log(typeof num);    //number
num = num + '';   
console.log(typeof num);    //string
num = num *3;
console.log(typeof num);    //number
```

## 原始型別及物件型別

JavaScript 是屬於動態型別，它定義了8種資料型別，分別為7種原始型別 (ES6 新增2種原始型別)及 Object 型別。

**<font size='5'>原始型別：</font>**
+ **Boolean**：僅有 true, false 兩個值
+ **Null**：僅有 null 的值
+ **Undefined**：沒有被定義的變數
+ **String**：字串型別
+ **Number**：數字型別是一種 (浮點數)，這種數值在極大值時會有精準度的問題。
  另外還有以下三種都屬於此 Number 型別。
  - +Infinity
  - -Infinity
  - NaN (not a number，但屬於數字型別，強制轉型有時會出現此錯誤)
+ BigInt(new) 整數數值(new)
+ Symbol（new）

**<font size='5'>物件型別：</font>**
除了上述的7種原始型別，其餘都是物件型別，包含很常使用的 “{% label warning@陣列 %}”、”{% label warning@函式 %}” 都屬於物件型別。

 ### 原始型別包裹物件
 {% asset_img type.png 800 原始型別包裹物件 %}
 原始型別可以使用的方法。除了 Null 跟 Undefined ，Boolean、Number、String、BigInt(new)、Symbol(new) 皆有其包裹物件

 ```javascript
 a = 'ming ';
 console.log(a.length());       //5 
 console.log(a.toUpperCase());  //MING 
 console.log(a.trim());         //ming

 var e = new String(a);         //不建議用這種建構式來宣告取得型別，非為原始型別，而是物件型別。
 console.log(e)                 //String{"Ming"}

 ```

+ length、toUpperCase()、trim() 為原始型別包裹物件內的方法。
+ 雖然可以用 var e = new String(a); 但不建議用這種建構式來宣告取得型別，因為此為物件型別。

{% asset_img  type-2.png 800 %}
可以由 {% label danger@_proto_ %} 內得知原始型別可以使用的方法。

# 運算子

可透過符號或單詞來運算前後側的運算元，並且回傳一個結果。

{% asset_img  operator.png 800 %}

JavaScript 同時具有二元運算子及一元運算子， 以及一種特殊的 三元運算子，也就是 條件運算子。 
運算元大部分屬於**二元運算子**，由左右兩邊的運算元搭配一個符號。
{% note primary no-icon%}
`運算元1 運算子 運算元2`
{% endnote %}

**一元運算子**
是只需要一個運算元的運算，位於運算子之前或之後。
{% note primary no-icon%}
`運算子 運算元`
or
`運算元 運算子`
{% endnote %}
如以下：
1. `delete`運算子會刪除物件，物件的性質，或是陣列中指定 index 的物件。 語法是:
```
delete 物件名稱;
delete 物件名稱.性質;
delete 物件名稱[索引];
delete 性質; // 只有在 with 陳述句中可以使用
```
1. `typeof`運算子會回傳代表運算元類型。 {%label primary@運算元能是字串，變數，關鍵字，或是會回傳型態的物件%}。
```
typeof 運算元
```
**條件（三元）運算子**
三元運算子(又叫條件運算符)，僅有的使用三個操作數的運算符。
{% note primary no-icon%}
`條件 ? 值1 : 值2`
{% endnote %}
一個條件後面會跟一個問號（?），如果條件為 truthy ，則問號後面的表達式A將會執行；表達式A後面跟著一個冒號（:），如果條件為 falsy ，則冒號後面的表達式B將會執行。
本運算符經常作為 if 語句的簡捷形式來使用。

**[MDN 運算式與運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators)**

## 優先性及相依性

{% note info %}
**優先性(Precedence)**
決定運算子彼此之間被語法解析的方式
優先序較高的運算子會成為優先序較低的運算子的運算元

**相依性(Associativity)**
相依性決定運算方向
{% endnote %}

**[MDN 運算子優先序](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)**

**陷阱題 1：**
```javascript
console.log( 1 < 2 < 3)   //true
console.log( 3 > 2 > 1)   //false
```
這跟優先性及相依性有很大的關係
- 因會先執行 `console.log( 3 > 2)` ，結果是 true
- true 再跟 1 進行比較，所以會變成 console.log( true >1)
- 而 true 會進行型別的轉換，變成 `console.log(1 > 1)` ，因 1 不會大於 1 ，所以結果是 false

**陷阱題 2：**
```javascript
var b = {};
Object.defindProperty(b, 'a', {
  value: 2;
  writeable: false
});

b.a = 3
console.log(b.a)    //2 結果不會被複寫

var a = 3;
a = b.a = 1;
console.log(a)      //1
```
- 因 `b.a =1` 為表達式，所以在 console 會回傳 1
- 而 a 所接收的結果是後面的 `b.a =1` 回傳的結果，所以 a 的結果為 1
