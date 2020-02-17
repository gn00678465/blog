---
title: 原型 prototype
date: 2019-12-22 13:29:26
categories:
- JavaScript
tags:
- Basic
- JavaScript
---
{% asset_img prototype_logo.png %}
<!--more-->
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

# 原始型別的包裹物件與原型的關聯

{% label primary@原始型別 與 原始型別的建構式(包裹物件) 也指向相同的原型。 %}
```javascript
var a = 1;
typeof(a) // "number"
a.__proto__ === Number.prototype //true
```
如果於原始型別的建構式(包裹物件)新增一個原型方法，原始型別也可同時使用此方法。
```javascript
//String
String.prototype.lastText = function() {
  return this[this.length-1]
}
var a = "ABCDE"
console.log(a.lastText())   //"E"
//Number
Number.prototype.sqare = function() {
    return this * this
}
var b = 5
console.log(b.sqare())    //25
```
JavaScript有許多的建構式，也可使用此方式建立自定的原型方法。
```javascript
//取得日期
var date = new Date()
Date.prototype.getFullDate = function() {
  let yyyy = this.getFullYear();
  let mm = ((this.getMonth() + 1) < 10 ? '0' : '') + (this.getMonth() + 1);
  let dd = (this.getDate() < 10 ? '0' : '') + this.getDate();
  return `${yyyy}-${mm}-${dd}`
}
console.log(date.getFullDate())     //印出今天日期
```

# 建立自己的原型練吧! Object.create()

使用 `new` 一個建構式來產生一個實例，此時實例是繼承在 `Object` 之下的。
{% label info@Object > 建構式 > 實例 %}

但如想 `Object` 以及 `建構式` 當中新增一個 `建構式` 以達到多層繼承的目的時，可使用 `Object.create()` 此方法。
{% label info@Object  > 建構式1 > 建構式2 > 實例 %}
{% note info %}
透過 `Object.create()` 可以建立一個空物件，同時可以將你帶入 `Object.create()` 的參數內容變成該物件的原型。
{% endnote %}
- 建立建構式
```javascript
// Object > Animal > Dog > lassie(實例)
function Animal(family) {
  this.kingdom = '動物界';
  this.family = family || '人科';
}
Animal.prototype.move = function() {
  return `${this.name} 移動`
}
function Dog(name, color, size) {
  this.name = name;
  this.color = color || '白';
  this.size = size || '大';
}
Dog.prototype = Object.create(Animal.prototype)   //將 Dog.prototype 繼承於 Animal.prototype 之下
Dog.prototype.bark = function() {
  return `${this.name} 吠叫`
}
var lassie = new Dog('萊西', '棕', '中')
console.dir(lassie)
```
{% asset_img object_create_1.png Object.create()%}
對新增的實例(lassie)使用Dog的原型方法以及Animal的原型方法。
```javascript
console.log(lassie.bark());    //"萊西 吠叫"
console.log(lassie.move());    //"萊西 移動"
```
- 此時目前實例(lassie)只繼承了Animal的原型，未繼承Animal的建構式
```javascript
lassie.family     //undefined
```
要繼承Animal的建構式，需再Dog的建構式中修改為
```javascript
function Dog(name, color, size) {
  Animal.call(this, '犬科')
  this.name = name;
  this.color = color || '白';
  this.size = size || '大';
}
lassie.family     //犬科
```
{% asset_img object_create_2.png Object.create()%}
- 補回constructor(建構器)
目前實例(lassie)是透過 `Object.create()` 繼承於Animal的原型之下，所以實例(lassie) 的 constructor(建構器)會被Animal的所取代。
須將實例(lassie) 的建構器補回，於 `Object.create()` 程式碼的下方加入一段程式碼。
```javascript
Dog.prototype.constructor = Dog
```
{% asset_img object_create_3.png Object.create()%}
- 建立其他物種
```javascript
function Cat(name, color, size) {
  Animal.call(this, '貓科')
  this.name = name;
  this.color = color || '白';
  this.size = size || '小';
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.meow = function() {
  return `${this.name} 喵喵叫`
}

var ketty = new Cat('凱蒂', '白', '小')
console.log(ketty)      //Cat {kingdom: "動物界", family: "貓科", name: "凱蒂", color: "白", size: "小"}
ketty.move()            //"凱蒂 移動"
ketty.meow()            //"凱蒂 喵喵叫"
ketty.bark()            //ketty.bark is not a function
```
此實例(ketty)可繼承Animal的原型以及其方法，且與Dog的建構式以及其方法分離。
使用 `Object.create()` 方法可以使自定的原型鍊更加的完整。

# 原型鏈、建構函式整體結構概念
{% asset_img Framework.png 原型鏈、建構函式整體結構概念 %}
```javascript
lassie.__proto__ === Dog.prototype              //true
lassie.__proto__.__proto__ === Animal.prototype //true
```
```javascript
lassie.__proto__.__proto__.constructor === Animal //true
//        Dog     Animal
```
```javascript
lassie.__proto__.__proto__.__proto__.__proto__ === null //true
//        Dog     Animal     Object     null
```
```javascript
Dog.__proto__ === Function.prototype       //true
Object.__proto__ === Function.prototype       //true
Function.__proto__ === Function.prototype        //true
Function.__proto__.__proto__ === Object.prototype   //true
```