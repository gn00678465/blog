---
title: 物件參考觀念-延伸範例
date: 2019-12-13 21:20:58
tags:
---
# 複雜的情況 1
```javascript
var family = {
  name: '小明家',
  merbers: {
    father: '老爸',
    mon: '老媽',
    ming: '小明'
  }
};
```
{% note no-icon %}
宣告變數 `family` 並設立成Object時，會在記憶體中給它一個位址（{% label info@0x01 %}），於 family 內有另一個物件 `merbers`，這時候，一樣會在記憶體中並給它一個位址（{% label info@0x02 %}）。
{% endnote %}
{% mermaid graph LR %}
A[family:0x01] -->|0x01| B(name: '小明家'<br>merbers: 0x02)
B -->|0x02| C(father: '老爸'<br>mon: '老媽'<br>ming: '小明')
style B fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
style C fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
{% endmermaid %}
```javascript
var merbers = family.merbers
console.log(merbers)                      //{father: "老爸", mon: "老媽", ming: "小明"}
console.log(merbers === family.merbers)   //true
```
{% note no-icon %}
定義一個變數 `merbers` 並指向 `family.merbers` 的參考物件({% label info@0x01 %})。
{% endnote %}
{% mermaid graph LR %}
A[family: 0x01<br>merbers: 0x02] -->|0x01| B(name: '小明家'<br>merbers: 0x02)
B -->|0x02| C(father: '老爸'<br>mon: '老媽'<br>ming: '小明')
A --> C
style B fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
style C fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
{% endmermaid %}
{% tabs 觀念, 1 %}
<!-- tab -->
**觀念 1.**
```javascript
merbers = {ming: '大明'}
console.log(merbers)                      //{ming: '大明'}
console.log(merbers === family.merbers)   //false
```
{% note no-icon %}
將 `merbers` 賦予一個新物件 `{ming: '大明'}` ，這時候，記憶體中會給它一個新位址（{% label info@0x03 %}），並指向此位址。
>使用 `{}` 賦予一個新物件，一律會產生新的 {% label primary@參考物件 %}。
{% endnote %}
{% mermaid graph LR %}
A[family: 0x01<br>merbers: 0x03] -->|0x01| B(name: '小明家'<br>merbers: 0x02)
B -->|0x02| C(father: '老爸'<br>mon: '老媽'<br>ming: '小明')
A -->|0x03| D(ming: '大明')
style B fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
style C fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
style D fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
{% endmermaid %}
```javascript
console.log(merbers ,family.merbers)  //{ming: "大明"} {father: "老爸", mon: "老媽", ming: "小明"}
```
{% note no-icon %}
此時所有物件皆為獨立，並無指向相同位址。
{% endnote %}
<!-- endtab -->
<!-- tab -->
**觀念 2.**
```javascript
merbers.ming = '大明'
console.log(merbers)                      //{father: "老爸", mon: "老媽", ming: "大明"}
console.log(merbers === family.merbers)   //true
```
{% note no-icon %}
如只單單修改屬性的值，未使用 `{}` 賦予一個新物件的情況下，此時仍指向相同的參考物件。
{% endnote %}
<!-- endtab -->
{% endtabs %}

# 複雜的情況 2
```javascript
//step 1
var a = { X: 1 }
var b = a
//step 2
a.y = a = { x: 2 }
console.log(a.y)  //undefined
console.log(b)    //{X: 1, y: {x: 2}}
```
**step 1**
+ 
```javascript
var a = { X: 1 }
var b = a
```
{% mermaid graph LR %}
A[a: 0x01<br>b: 0x01] -->|0x01| B( x: 1 )
style B fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
{% endmermaid %}
**step 2**
+ `a = { x: 2 }` 是一個賦值運算式，且有新增一個物件，故記憶體中會給它一個新位址（{% label info@0x02 %}），並指向此位址。
```javascript
a.y = a = { x: 2 }
//1. a = { x: 2 } 是一個賦值運算式
//2. a.y = a = { x: 2 } 同時執行，(.y)放置位置不影響結果
//3. a.y 指向原本的參考路徑
```
{% mermaid graph LR %}
A[a: 0x02<br>b: 0x01] -->|0x01| B( x: 1 )
A -->|0x02| C( X: 2 )
style B fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
style C fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
{% endmermaid %}
+ 因 `a.y` 指向原本的參考路徑
{% mermaid graph LR %}
A[a: 0x02<br>b: 0x01] -->|0x01| B( x: 1<br>y: 0x02 )
A -->|0x02| C( x: 2 )
B -->|0x02| C
style B fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
style C fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
{% endmermaid %}
+ 目前 `a` 指向（{% label info@0x02 %}），{% label info@0x02 %}內 `y` 不存在，故回傳 `undefined`
`b` 指向（{% label info@0x01 %}），故回傳 `{X: 1, y: {x: 2}}`
```javascript
console.log(a.y)  //undefined
console.log(b)    //{X: 1, y: {x: 2}}
```
