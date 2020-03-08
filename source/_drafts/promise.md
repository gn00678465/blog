---
title: promise
tags:
---

promise

<!--more-->

JavaScript 是屬於同步的程式語言，一次僅能做一件事情，但遇到非同步的事件時，就會將非同步的事件移動到事件儲列，等到所有的原始碼運行完以後才會執行非同步的事件。

ES6 Promise 是用來改善 JavaScript 非同步的語法結構，而 ES7 Async、Await 可以基於 Promise 讓非同步的語法的結構類似於 “同步語言”，更易讀且好管理。

標準的 Promise 共有三種狀態 ([MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)):

- pending(等待中)：為初始之狀態，即不是 fulfilled 也不是 rejected。
- fulfilled(實現)：表示操作完成，又稱 resolved。
- rejected(拒絕)：表示操作失敗。

{% asset_img js-promise.svg %}