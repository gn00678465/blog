---
title: JavaScript
date: 2019-11-24 22:06:17
tags:
---
<link href="all.css" rel="stylesheet"></link>

# JavaScript 基礎介紹
JavaScript設計是一種直譯式(Interpreted language)、物件導向(Object-based)的程式語言。

<!--more-->

# 編譯式語言 & 直譯式語言
![編譯式語言](Compiled_language.png)
**編譯式語言**：編譯式語言編寫完原始碼後會經由編譯器編譯，並在預先編譯過程中除錯，確定無錯誤後再將代碼生成並於執行環境中運行。
*Example*：C、C++、bjective-C、Visual Basic等等。

![直譯式語言](Interpreted_language.png)
**直譯式語言**：直譯式語言編寫完原始碼後會經由直譯器編譯，並直接將代碼生成並於執行環境中運行。
錯誤直接反映在環境中，像是 console 出現錯誤紅字。
*Example*：JavaScript、Python、Ruby等等。

# JavaScript 是如何運行的
![JS轉換過程](JS_process.png)
JavaScript是直譯式語言的一種，直譯語言在執行時會一行一行的動態將程式碼直譯(interpret)為機器碼，並執行。
以下是JavaScript經過直譯器轉換的過程。
**1. 語法基本單元化(Tokenizing)。**
    將一串字元拆解成(對該語言)有意義的組塊，這些組塊就叫做語法基本單元化。
**2. 組成抽象語法樹AST（Abstract Syntax Tree）。**
    將token流轉化為一個有元素層級巢狀所組成的代表程式語法結構的樹，這個樹被叫做抽象語法樹AST。
**3. 代碼生成。**

可透過編譯網站來了解語法單元化(Tokenizing)。
[編譯網站](https://esprima.org/demo/parse.html#)

# 執行的錯誤情境 LHS, RHS
![](./RHS_LHS.png)
此錯誤與取值與賦予值有相當的關係。
1. RHS：將值從右側的變數中取出，當無法取值時，會丟出'ReferrenceError'的錯誤訊息。
2. LHS：將值賦予至左側的變數，如果左側不為'identifier' or 無法被賦予時，會丟出'Invalid left-hand side'的錯誤訊息。
**<font color=#800000>如有出現錯誤需立即修正，否則錯誤後方的程式碼會無法運行。</font>**

# 語法作用域(Lexical scope)