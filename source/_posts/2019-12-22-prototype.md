---
title: 原型 prototype
date: 2019-12-22 13:29:26
tags:
Categories:
---
# 原型
 Javascript 是 **原型架構的程式語言(prototype-base-oriented)** 的語言，class 並不存在。在它的世界裏只有 物件(Object) 和 實例(Instance)。
 各個物件均具備 1 組**原型物件**作為範本物件，用以繼承函式與屬性。物件的原型物件可能也具備原型物件，並繼承了其上的函式與屬性。
  {% grouppicture 2-2 %}
 {% asset_img prototype_2.png 800 原型 (Prototype)%}
 {% asset_img prototype_3.png 800 實例 (Instance)%}
 {% endgrouppicture %}
 這些屬性與函式都是透過物件的建構子函式所定義，並非物件實例本身。
 建立物件實例之後，JavaScript 不會複製這些屬性與函式，而是在物件實例與其建構子之間設定連結 (原型鍊中的連結)，這就是所謂的「**原型鍊 (Prototype chain)**」。
 {% grouppicture 2-2 %}
 {% asset_img prototype_chain_1.png 800 原型鍊 (Prototype chain)%}
 {% asset_img prototype_chain_2.png 800 原型鍊 (Prototype chain)%}
 {% endgrouppicture %}
 物件的原型物件可能也具備原型物件，並繼承了其上的函式與屬性。

# 原型物件

- 建構函式範例
```javascript
//建構函式
function Dog(breed, color, size) {
  this.breed = breed;
  this.color = color;
  this.size = size
}
```
- 建立物件實例
>對建構函式使用 `new` ，就會生成一個實例。
>用建構函式生成實例對象，有一個缺點，那就是無法共享屬性和方法。
```javascript
var Lassie = new Dog('牧羊犬', '棕色', '中');
var Lala = new Dog('拉布拉多', '黑', '大')
console.log(Lassie, Lala)
//Dog {breed: "牧羊犬", color: "棕色", size: "中"}
//Dog {breed: "拉布拉多", color: "黑", size: "大"}
```
生成兩個實例對象，這兩個對象的species屬性是獨立的，修改其中一個，不會影響到另一個。
- 建立原型方法
>`prototype` 屬性的引入
>為建構函式設置一個 `prototype` 屬性，所有實例對象需要共享的屬性和方法，都放在這個對象裡面；那些不需要共享的屬性和方法，就放在建構函式裡面。
>實例對象一旦建立，將自動引用 `prototype` 對象的屬性和方法。
>實例對象的屬性和方法，可分成兩種，一種是本地的，另一種是引用的。
```javascript
console.dir(Dog)
Dog.prototype.bark = function() {
  console.log('吠叫');
}
Lassie.bark();  //吠叫
Lala.bark();    //吠叫
```
屬性 & 方法放在 `prototype` 對象裡，是兩個實例對象共享的。只要修改了 `prototype` 對象，就會同時影響到兩個實例對象。
- 原型鍊的運作方式
{% mermaid graph LR %}
A(Lassie) -->|Inherits from<br>prototype| B(Dog)
B ==>|Inherits from<br>prototype| C(Object)
D(Lala) -->|Inherits from<br>prototype| B(Dog)
style A fill:#d0e3f0,stroke:#1587c0,stroke-width:4px;
style B fill:#d0e3f0,stroke:#1587c0,stroke-width:4px;
style C fill:#d0e3f0,stroke:#1587c0,stroke-width:4px;
style D fill:#d0e3f0,stroke:#1587c0,stroke-width:4px;
{% endmermaid %}

***

- `__proto__` : 它的出現是為了解決讀寫 `Object.prototype` 的麻煩，提供一個快捷讀寫 `Object.prototype` 而設的一個 API，而且它是透過連結內部屬性 [[Prototype]]完成這個功能。
- `prototype` : 使用於原型的函式上。
`console.log(Dog.prototype === Lassie.__proto__)   //true`