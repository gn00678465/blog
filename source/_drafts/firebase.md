---
title: firebase
tags:
---

Realtime database 使用



1. 關聯資料夾

  ```js
  var ref = firebase.database().ref('/PATH')
  ```

1. 上傳資料 - 上傳資料皆以物件格式上傳
    1. set

ref.child(key).set({})

    1. push

ref.push({})

1. 取得資料 - 分別有 once & on
    1. once - 一次性取得

ref.once('value').then(function(snapshot){
    let val = snapshot.val();
    // do soming
})

    1. on - Socket (每次更新資料都會觸發)

ref.on('value', function(snapshot){
    let val = snapshot.val();
    // do soming
})

1. Remove 資料

ref.child(key).remove()

https://kanboo.github.io/2017/12/26/Firebase-studynotes/

