---
title: 物件屬性延伸章節 object_extra
date: 2019-12-27 22:29:31
categories:
- JavaScript
tags:
- Basic
- JavaScript
---
# 物件屬性延伸章節：屬性的特徵
<!--more-->
## Object.defineProperty()
what is Object.defineProperty
>可以通過 `Object.defineProperty()` 這個方法，直接在一個物件上定義一個新的屬性，或者是修改已存在的屬性。執行後會回傳定義完的物件。

語法
{% note info no-icon %}
`Object.defineProperty(obj, prop, descriptor)`
{% endnote %}
- `obj` - 要定義屬性的物件。
- `prop` - 要被定義或修改的屬性名字。
- `descriptor` - 要定義或修改物件敘述內容，可設置的值有如下。
  + 【value】：{% label success@屬性的值，預設為 undefined。 %}
  + 【writable】
    - {% label success@true：預設值 %}，該屬性可透過賦予運算子改變其值。
    - false：任何對該屬性改寫的操作都無效（靜默錯誤），嚴謹模式下才會報錯。
    ```javascript
    var obj = {a:1, b:2, c:3}
    Object.defineProperty(obj, 'a', {
      writable: false
    })
    obj.a = 4;
    console.log(obj);     //{a: 1, b: 2, c: 3}
    ```
  + 【configurable】
    - {% label success@true：預設值。 %}
    - false：任何嘗試刪除目標屬性或修改屬性以下特性（writable, configurable, enumerable）的行為將被無效化。
    ```javascript
    var obj = {a:1, b:2, c:3}
    Object.defineProperty(obj, 'c', {
      configurable: false
    })
    delete obj.a
    delete obj.c
    console.log(obj);     //{b: 2, c: 3}
    ```
  + 【enumerable】
    - {% label success@true：預設值。 %}
    - false：不能在 `for-in` 迴圈中或 `Object.keys` 中被列舉出來。
    ```javascript
    var obj = {a:1, b:2, c:3}
    Object.defineProperty(obj, 'b', {
      enumerable: false
    })
    for (let key in obj) {
      console.log('列舉'+ key)
    }
    //列舉a
    //列舉b
    ```

>註：`Object.defineProperty()` 只可做到淺層(第一層)保護，如欲調整的屬性值為巢狀(第二層含之後)物件，則不起作用。
```javascript
var obj = {a:1, b:2, c:3}
Object.defineProperty(obj, 'd', {
  value: {},
  writable: false
})
obj.d = 6;
console.log(obj)    //{a: 1, b: 2, c: 3, d: {}}
obj.d.a = 7
console.log(obj)    //{a: 1, b: 2, c: 3, d: {a: 7}}
```

## Object.defineProperties()
與 `Object.defineProperty()` 相同可定義新的或是修改已存在的物件屬性，但不同的是可同時調整多組物件屬性，並回傳修改後的物件。
語法
{% note info no-icon %}
`Object.defineProperties(obj, props)`
{% endnote %}
- `obj` - 要定義屬性的物件。
- `prop` - 要被定義或修改的屬性名字以及要定義或修改物件敘述內容。
```javascript
var obj = {a:1, b:2, c:3}
Object.defineProperties(obj, {
  a: {
    value: 4
  },
  b: {
    value: 5
  }
})
console.log(obj)    //{a: 4, b: 5, c: 3}
```

# 物件擴充的修改與調整
延伸的三個物件方法。
1. [preventExtensions](#object_extra-1).
1. [seal](#object_extra-2).
1. [Freeze](#object_extra-3).
{% tabs object_extra %}
<!-- tab Object.preventExtensions @object-group -->
preventExtensions：防止擴充，避免物件被新增新的屬性。
語法
{% note info no-icon %}
`Object.preventExtensions(obj)`
{% endnote %}
 <code>obj</code> - 要定義屬性的物件。

```javascript
var obj = {a:1, b:2, c:{}}
Object.preventExtensions(obj)
console.log('是否可被擴充', Object.isExtensible(obj))
console.log('obj a 的屬性特徵', Object.getOwnPropertyDescriptor(obj, 'a'))
//調整屬性
obj.a = 'a'
//新增屬性
obj.d = 'd'
//巢狀屬性調整
obj.c.a = 'ca'
//調整特徵
Object.defineProperty(obj, 'a', {
  writable: false
})
//刪除屬性
delete obj.b
//結果
console.log('obj物件', obj)
console.log('obj a 的屬性特徵(嘗試修改)', Object.getOwnPropertyDescriptor(obj, 'a'))
```
{% note warning no-icon %}
是否可被擴充 <font color="#D0576B">false</font>
obj a 的屬性特徵 <font color="#0086CC">{value: 1, writable: true, enumerable: true, configurable: true}</font>
obj物件 <font color="#0086CC">{a: <font color="#D0576B">"a"</font>, c: <font color="#D0576B">{a: "ca"}</font>}</font>
obj a 的屬性特徵(嘗試修改) <font color="#0086CC">{value: <font color="#D0576B">"a"</font>, writable: <font color="#D0576B">false</font>, enumerable: true, configurable: true}</font>
{% endnote %}
<!-- endtab -->

<!-- tab Object.seal @object-group -->
seal：封裝。
<font size=3>
>可以封裝一個物件，並返回被封裝後的物件。
封裝物件將會阻止向物件添加新的屬性，並且會將所有已有屬性的可配置性（configurable）改為不可配置（false），即不可修改屬性的描述或刪除屬性。
但是可寫性描述（writable）為可寫（true）的屬性的值仍然可以被修改。
seal也同時包含preventExtensions。
</font>

語法
{% note info no-icon %}
`Object.seal(obj)`
{% endnote %}
 <code>obj</code> - 要定義屬性的物件。

```javascript
var obj = {a:1, b:2, c:{}}
Object.seal(obj)
console.log('是否可被擴充', Object.isExtensible(obj))
console.log('是否被封裝', Object.isSealed(obj))
console.log('obj a 的屬性特徵', Object.getOwnPropertyDescriptor(obj, 'a'))
//調整屬性
obj.a = 'a'
//新增屬性
obj.d = 'd'
//巢狀屬性調整
obj.c.a = 'ca'
//調整特徵
Object.defineProperty(obj, 'a', {
  configurable: true
})
//刪除屬性
delete obj.b
//結果
console.log('obj物件', obj)
console.log('obj a 的屬性特徵(嘗試修改)', Object.getOwnPropertyDescriptor(obj, 'a'))
```
{% note warning no-icon %}
是否可被擴充 <font color="#D0576B">false</font>
是否被封裝 <font color="#D0576B">true</font>
obj a 的屬性特徵 <font color="#0086CC">{value: 1, writable: true, enumerable: true, configurable: <font color="#D0576B">false</font>}</font>
obj物件 <font color="#0086CC">{a: <font color="#D0576B">"a"</font>, <font color="#A4CA68">b: 2</font>, c: <font color="#D0576B">{a: "ca"}</font>}</font>
obj a 的屬性特徵(嘗試修改) <font color="#0086CC">{value: <font color="#D0576B">"a"</font>, writable: true, enumerable: true, configurable: <font color="#D0576B">false</font>}</font>
{% endnote %}
<!-- endtab -->

<!-- tab Object.freeze @object-group -->
Freeze：凍結。
<font size=3>
>可以凍結一個物件，該方法返回被凍結的物件。
凍結指的是不能向這個物件添加新的屬性，不能修改其已有屬性的值，不能刪除已有屬性，以及不能修改該物件已有屬性的可枚舉性、可配置性、可寫性，這個物件永遠是不可變的。
Freeze也同時包含seal & preventExtensions。
</font>

語法
{% note info no-icon %}
`Object.freeze(obj)`
{% endnote %}
 <code>obj</code> - 要定義屬性的物件。

```javascript
var obj = {a:1, b:2, c:{}}
Object.freeze(obj)
console.log('是否可被擴充', Object.isExtensible(obj))
console.log('是否被封裝', Object.isSealed(obj))
console.log('是否被凍結', Object.isFrozen(obj))
console.log('obj a 的屬性特徵', Object.getOwnPropertyDescriptor(obj, 'a'))
//調整屬性
obj.a = 'a'
//新增屬性
obj.d = 'd'
//巢狀屬性調整
obj.c.a = 'ca'
//調整特徵(實際上會報錯，需註解此段程式碼)
Object.defineProperty(obj, 'a', {
  configurable: true
})
//刪除屬性
delete obj.b
//結果
console.log('obj物件', obj)
console.log('obj a 的屬性特徵(嘗試修改)', Object.getOwnPropertyDescriptor(obj, 'a'))
```
{% note warning no-icon %}
是否可被擴充 <font color="#D0576B">false</font>
是否被封裝 <font color="#D0576B">true</font>
是否被凍結 <font color="#D0576B">true</font>
obj a 的屬性特徵 <font color="#0086CC">{value: 1, writable: <font color="#D0576B">false</font>, enumerable: true, configurable: <font color="#D0576B">false</font>}</font>
obj物件 <font color="#0086CC">{a: 1, <font color="#A4CA68">b: 2</font>, c: <font color="#D0576B">{a: "ca"}</font>}</font>
obj a 的屬性特徵(嘗試修改) <font color="#0086CC">{value: 1, writable: <font color="#D0576B">false</font>, enumerable: true, configurable: <font color="#D0576B">false</font>}</font>
{% endnote %}
<!-- endtab -->
{% endtabs %}
>註：以上三個物件方法皆只能針對參數內所指定的物件，而巢狀物件的調整則不受限。

# 屬性列舉與原型的關係

# Getter 與 Setter
- Getter：取得特定值的方法。
- Setter：純值的方法。
{% tabs Getter_Setter %}
<!-- tab 一般的 Setters 和 Getters @object-group -->
```javascript
var wallet = {
  total: 100,
  set save(price) {
    this.total = this.total + price
  },
  get save() {
    return this.total
  }
}
wallet.save = 300;                  //使用賦值運算子將參數傳入
console.log(wallet.save, wallet)    //400 {total: 400}
```
<!-- endtab -->

<!-- tab Object.defineProperty @object-group -->
```javascript
var wallet = {
  total: 100
}
Object.defineProperty(wallet, 'save', {
  get: function() {
    return this.total
  },
  set: function(price) {
    this.total = this.total + price
  }
})
wallet.save = 500;                  //使用賦值運算子將參數傳入
console.log(wallet.save, wallet)    //600 {total: 600}
```
<!-- endtab -->

<!-- tab Extrs @object-group -->
操作陣列原型來取得陣列的最後一個值，因是修改原型內的方法，所有的陣列皆可使用此方法。
```javascript
var a = [1, 2, 3]
Object.defineProperty(Array.prototype, 'latest', {
  get: function() {
    return this[this.length-1]
  }
})
console.log(a.latest)   //3
var b = ['apple', 'orange', 'banana']
console.log(b.latest)   //banana
```
<!-- endtab -->
{% endtabs %}

