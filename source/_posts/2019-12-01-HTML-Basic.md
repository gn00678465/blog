---
title: HTML 基礎概念
date: 2019-12-01 12:25:54
tags:
- HTML
---
HTML（**<font color="red">H</font>**yper**<font color="red">T</font>**ext **<font color="red">M</font>**arkup **<font color="red">L</font>**anguage），中文全名為「超文字標示語言」，是一種用來組織架構並呈現網頁內容的程式語言。
<!--more-->
HTML 是一種標記語言（markup language），而非一般熟知的程式設計語言；它會告訴瀏覽器該如何呈現你的網頁──單純簡易或是極其複雜的頁面都沒問題。HTML 包含了一系列的**元素（elements）**，而元素包含了**標籤（tags）**與**內容（content）**，我們用標籤來控制內容的呈現樣貌，例如字體大小、斜體粗體、在文字或圖片設置超連結等。

### HTML元素的組成
#### 基本的架構： 

1. **元素（The element）**： 由起始標籤、結束標籤、內容所組成。 
1. **起始標籤 （The opening tag）**：先打大於、小於的符號「< >」，裡面再放入元素名稱，如「<p>」。起始標籤代表這個元素從這裡開始。
1. **結束標籤 （The closing tag）**： 與起始標籤一樣，只是在元素名稱前面多了個前置斜線「/」。很容易理解地，內容的最後加上結束標籤，代表這個元素的尾端。*在寫HTML時，很容易忘了最後的結束標籤。*
1. **內容（The content）**： 這個元素的內容。

#### 屬性（Attribute）：

屬性能提供更多的資訊（當然，這個資訊是幫助我們更有效及方便編輯，不會呈現在網頁上），屬性包含了屬性名稱與值，你可以利用屬性設定這個元素的色彩、對齊方式、圖表的格線等等。

屬性的組成包含：

- 在元素名稱和屬性之間有一個空格（如果有多個屬性，屬性之間也需要有空格）。
- 屬性名稱後面接著等於符號「=」。
- 屬性需包在起始標籤裡面。

#### 巢狀元素
元素裡面可以在放進元素，我們稱之為「**巢狀元素（nesting element）**」。

```html
 <p>My cat is <strong>very</strong> grumpy.</p>
```
要注意的是，每個元素都有自己的起始和結束標籤，一層一層的包覆。
需先結束內層的標籤，接著在結束外層的標籤。

#### 空元素（empty elements）

有些元素沒有內容，我們稱為「**空元素（empty elements）**」。 
以圖片元素 `<img>`為例。

```html
<img src="images/firefox-icon.png" alt="My test image">
```

它有兩個屬性，但是沒有結束標籤，也沒有裡面的內容。因為圖片元素是直接把圖檔嵌在 HTML 網頁上。

----

### HTML文件的架構 
```html
<!DOCTYPE html>
<html>
 <head>
 <meta charset="utf-8">
 <title>My test page</title>
 </head>
 <body>
 <img src="images/firefox-icon.png" alt="My test image">
 </body>
</html>
```
- `<!DOCTYPE html>`— 文件類型（doctype）， `<!DOCTYPE html>`定義此文件類型為**HTML5**。
- `<html></html>` — `<html>` 元素，又被視為**根元素（root element）**，包含了所有顯示在這個頁面上的內容。
- `<head></head>` — `<head>` 元素，裡面放的是你想涵括的重要資訊，但不會顯示於網頁瀏覽者眼前的。
 - `<meta charset="utf-8">` — 這個元素指定了你的文件使用utf-8這種字元編碼， 建議大家都要使用這個元素，它會幫助你免去許多文字無法正確呈現的煩惱。
 - `<title></title>` — 呈現於網頁瀏覽者眼前的網頁標題。
- `<body></body>` — `<body>` 元素，包含了所有會顯示於網頁瀏覽者眼前的內容。
