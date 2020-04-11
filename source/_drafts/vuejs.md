---
title: vuejs
tags:
---

{% asset_img vuejs.png Vue.js%}

<!--more-->

# 基本使用

## MVVM架構
> MVVM（Model–view–viewmodel）是一種軟體架構模式，分別代表

- Model：模型是指代表真實狀態內容的領域模型（物件導向），或指代表內容的資料存取層（以資料為中心）。
- View：就像在MVC和MVP模式中一樣，視圖是用戶在螢幕上看到的結構、布局和外觀（UI）。
- ViewModel：從Model取得View所需的資料。

{% asset_img MVVM.png MVVM%}

> Vue.js 是以<font color="red">資料狀態</font>在操作<font color="green">畫面</font>。

## 應用程式建立

```html
<div id="app"></div> <!-- 建立一個 id="app" 的元素。 -->
<script>
var app = new Vue({
  el: '#app'
  data: {
    text: 'this is a text.',
  },
})
</script>
```
宣告一個變數叫 app，並 new 一個新的 vue 的應用程式( `Vue({})` )，每個 Vue 應用都是通過用 Vue 函數創建一個新的 Vue 實例。
透過 el 來選擇要綁定的元素(上述建立的 `id="app"` 元素)。

> Vue 可建立兩個以上的應用程式，但無法建立巢狀應用程式。

## 雙向綁定的資料
> Vue，並不完全是 MVVM 的架構，只是受到 MVVM 的啟發。

怎麼透過 vue 來做資料的雙向綁定，建立新的 vue 應用程式。
透過Vue 的指令，`v-model`、`v-text`、`v-html`。
```html
<div id="app">
    {{ text }} <!-- 兩個大括號這個語法在 Vue 文件裡面叫 Mustache 語法 -->
    <input type="text">
</div>
<script>
var app = new Vue({
    el: "#app",
    data:{
        text: "Hello World!!" //"Hello World!!" 就是剛提到的 model
    }
});
</script>
```

### v-model
> 綁定在表單元件 `<input>`、`<textarea>` 及 `<select>` 或自訂元件上，為實現雙向綁定用的。
```html
<input type="text" v-model='綁定的資料'>
```
- 修飾符
    1. `.lazy`: 使用.lazy會改用 change 事件監聽，event trigger 才更新。更改 input 內的值並不會馬上變更 model 的資料，而是等到滑鼠移到輸入框外，觸發 change 事件才更新。
    1. `.number`: 將字串轉為數字。我們在 `v-model` 所得到的值的資料型態是 string。使用 `.number` 將型別改為 number。
    1. `.trim`: 去除首尾空白。

### v-text
> 更新元素的 `textContent`。
```html
<div v-text='綁定的資料'></div>
<!-- 相同於 -->
{{ 綁定的資料 }}
```

### v-html
> 更新元素的 `innerHTML` 。<br>
{%label danger@不建議使用，容易導致 XSS 攻擊。 %}
```html
<div v-html='綁定的資料'></div>
```

## 指令

### v-bind 動態屬性指令
> 用於綁定 HTML 元素上的屬性（attribute）

- 縮寫：`:`
- Modifiers 修飾符
  - `.prop`：將綁定的屬性設定為 DOM property 而非 attribute。
  - `.camel`：將帶有「-」分隔 (kebab-case) 的屬性名稱轉為小駝峰 (camelCase)。

  ```html
  <!-- 綁定一個屬性 -->
  <img v-bind:src="imageSrc">
  <!-- 縮寫 -->
  <img :src="imageSrc">

  <!-- 通過 prop 修飾符綁定 DOM 屬性 -->
  <div v-bind:text-content.prop="text"></div>
  ```

- 動態 Class 與 Style 的幾種寫法
  - 物件寫法 - class 名稱直接寫於行內
    ```html
    <!-- class 綁定 -->
    <div :class="{ active: isActive }"></div>
    <div :class="[classA, { active: isActive, hasError: isError }]">
    ```
    ```js
    data: {
      isActive: false,
      isError: false
    }
    ```
  - 物件寫法 - 預先定義資料 class 名稱
      ```html
      <div class="box" :class='objectClass'></div>
      <button @click.prevent="objectClass.rotate = !objectClass.rotate">選轉物件</button>
      <input type="checkbox" v-model="objectClass['bg-danger']"> <!-- 有出現 - 與使用中括號包住 -->
    ```
    ```js
    data: {
      objectClass: {
      'rotate': false,
      'bg-danger': false,
      },
    }
    ```
  - 陣列寫法
      ```html
      <div class="box" :class='arrayClass'></div>
      <!-- 與物件不同，需使用 value 將值寫入陣列中 -->
      <input type="checkbox" v-model='arrayClass' value ='btn-outline-primary'>
      <input type="checkbox" v-model='arrayClass' value ='active'>
    ```
    ```js
    data: {
      arrayClass: []
    }
    ```
  - style 綁定
    ```html
    <!-- style 綁定 -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObject, styleObject2]"></div>
    ```
    ```js
    data: {
      styleObject: {
        backgroundColor: 'red',
        borderWidth: '5px'
      },
      styleObject2: {
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.16)'
      },
    }
    ```
### v-for
> 迭代陣列或者物件中的元素，必須使用特定語法 `alias in expression` ，為當前迭代的元素提供別名。
```html
<div v-for="item in items">
  {{ item.text }}
</div>
```
  - 陣列
    ```html
    <div v-for="(item, index) in items"></div>
    ```
  - 物件
    ```html
    <div v-for="(val, key) in object"></div>
    <div v-for="(val, name, index) in object"></div>
    ```
{% note warning %}
`v-for`迭代陣列或物件時需要設定 key ，是為了避免重複產生 DOM 元素而浪費資源，因此將 key 視為一個辨識的依據，所有的 key 必須保持唯一。
{% endnote %}
```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```
{% note info %}
- <b>使用細節</b>
  1. 建議使用 `v-for` 都加上 `key`。
      >使用經常會使用 `index` 來作為 `key` ,但其實這是不推薦的一種使用方法。
  1. 不能運作的狀況
      - 直接修改 data 內陣列的 length 值，畫面不會變化。
      - 直接修改 data 內陣列 or 物件的值，畫面不會變化，如果要強制修改可以使用 `Vue-set` [API](https://cn.vuejs.org/v2/api/#Vue-set)。
  1. 經常與 `Template` 一起使用， `Template` 標籤不會渲染到網頁上。
      ```html
      <template v-for="item in 10"></template>
      ```
  1. 與 `v-if` 一起使用的情況下， `v-for` 的優先度大於 `v-if`。
{% endnote %}

### v-if 判斷
> 根據表達式 or 判斷式的值的 truthiness 來有條件地渲染元素。
當 truthiness 為 true 時會渲染此元素， flase 則否。

```html
<div v-if="true"></div>
```
{% note info %}
- <b>使用細節</b>
    1. 可以用 `v-else` 指令给 `v-if` 添加一個 “else”，`v-else` 元素必須立即跟在 `v-if` 元素的後面——否則它不能被識別。
    1. 可以把一個 `template` 元素當做包裝元素，並在上面使用 `v-if`， `Template` 標籤不會渲染到網頁上。
    1. `v-if` 與 `v-show` 的差異
        - `v-show` : 元素會始終渲染並保持在 DOM 中。`v-show` 是簡單的切換元素的 CSS 屬性 display。
            > 注意:`v-show` 不支持 `template` 語法。
        - `v-if` : `v-if` 是真實的條件渲染，因為它會確保條件塊在切換當中合適地銷毀與重建條件塊內的事件監聽器和子組件。
{% endnote %}

{% note warning %}
當和 `v-if` 一起使用時，`v-for` 的優先級比 `v-if` 更高。
{% endnote %}

### v-on
> 綁定事件監聽器。事件類型由參數指定。
用在普通元素上時，只能監聽**原生 DOM 事件**。用在自定義元素元件上時，也可以監聽子元件觸發的**自定義事件**。

- 縮寫：`@`
- 事件：
  - `click` - 點擊滑鼠時觸發。
  - `dblclick` - 雙點擊滑鼠時觸發。
  - `blur` - 失去焦點時觸發。
  - `keyup` - 放開按鍵時觸發。
- 事件修飾符：
  - `.stop` - 調用 `event.stopPropagation()`。
  - `.prevent` - 調用 `event.preventDefault()`。
  - `.capture` - 添加事件偵聽器時使用 capture 模式，可將事件的傳遞改由父層往子層傳遞。
  - `.self` - 僅僅觸發自己範圍的事件，不包含子層。
  - `.once` - 僅在按下第一次時執行 callback function。
  - `.native` - 監聽元件根元素的原生事件。
- 按鍵修飾符：
  - `.{keyCode | keyAlias}` - 只當事件是從特定鍵觸發時才觸發回調。
      - 別名修飾 - .enter, .tab, .delete, .esc, .space, .up, .down, .left, .right
      - 修飾符來實現僅在按下相應按鍵時才觸發鼠標或鍵盤事件的監聽器 - .ctrl, .alt, .shift, .meta
  - `.left` - (2.2.0) 只當點擊鼠標左鍵時觸發。
  - `.right` - (2.2.0) 只當點擊鼠標右鍵時觸發。
  - `.middle` - (2.2.0) 只當點擊鼠標中鍵時觸發。

  ```html
  <!-- 方法處理器 -->
  <button v-on:click="doThis"></button>

  <!-- 縮寫 -->
  <button @click="doThis"></button>

  <!-- 停止冒泡 -->
  <button @click.stop="doThis"></button>

  <!-- 阻止默認行為 -->
  <button @click.prevent="doThis"></button>
  <button @click.prevent></button>

  <!-- 物件語法 (2.4.0+) -->
  <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

  <!-- 動態事件 (2.6.0+) -->
  <button v-on:[event]="doThis"></button>
  <button @:[event]="doThis"></button>
  ```

  <a class="Btn Btn__success Btn--v" href="https://cn.vuejs.org/v2/guide/events.html"><span>事件處理</span></a>

## Methods

- methods 就是互動的函式，需要觸發才會運作，用來修改資料內容。
- computed 是在監控資料更動後，重新運算結果呈現於畫面上，一般來說**不會修改資料**，只會回傳用於**畫面呈現的資料**。
- 效能
  - 如果資料量大，computed 自然會比較慢，且只要資料變動就會觸發，無形之中執行次數也會增加。
  - 建議在大量資料時，透過 methods 。
  
### computed 運算功能
> 當其依賴的屬性的值發生變化的時，computed 會重新計算。反之則使用記憶體中的屬性值。
```html
{{ aDouble }}
```
```js
computed: {
  aDouble: return vm.data * 2
}
```

### watch 監聽
> 監控特定變數，當變數改變時可以執行相對應的 function。
```js
data: {
  trigger: false
},
watch: {
  trigger: function() {
    // do soming
  }
}

```

## 表單綁定
> 使用 `v-model` 將表單與 data 綁定

- `input` - 於 `input` 輸入的字串可及時寫入 data 內的 `text` ，並透過雙向綁定將結果輸出至畫面 。
  - `textarea` 亦同。
  ```html
  <input type="text" v-model='text'>
  {{ text }}
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      text: '',
    },
  });
  </script>
  ```
- `checkbox` - 透過 `v-model` 更改 data 內 `checkbox1` 的 boolean 值。
    - 預設值為 true or false
        ```html
        <input type="checkbox"  id="check1" v-model="checkbox1">
        <label for="check1"> {{checkbox1}} </label> <!-- true or false -->
        <script>
        var app = new Vue({
          el: '#app',
          data: {
            checkbox1: false,
          },
        });
        </script>
        ```
    - 自定義值 - 如想使用自定義的值情況下，可使用 `true-value` & `false-value`。
        ```html
        <input type="checkbox"  id="check1" v-model="checkbox1" true-value="1" false-value="2">
        <label for="check1"> {{checkbox1}} </label> <!-- 1 or 2 -->
        <script>
        var app = new Vue({
          el: '#app',
          data: {
            checkbox1: false,
          },
        });
        </script>
        ```
- `checkbox(value)` - `checkbox` 為複選項，透過 `v-model` 將 `checkbox` 內的 `value` push 進 data 內 `checkboxArray` 的陣列中。
  ```html
    <div class="form-check">
      <input type="checkbox" id="check2" value="雞" v-model='checkboxArray'>
      <label for="check2">雞</label>
    </div>
    <div class="form-check">
      <input type="checkbox" id="check3" value="豬" v-model='checkboxArray'>
      <label for="check3">豬</label>
    </div>
    <div class="form-check">
      <input type="checkbox" id="check4" value="牛" v-model='checkboxArray'>
      <label for="check4">牛</label>
    </div>
    <p>晚餐火鍋裡有 <span v-for="item in checkboxArray">{{item}} </span>。</p>
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      checkboxArray: [],
    },
  });
  </script>
  ```
- `radio` - `radio` 為單選項，透過 `v-model` 將 `singleRadio` 內的 `value` 修改並寫入 data 內 `singleRadio` 的資料中。
  ```html
  <div class="form-check">
    <input type="radio" id="radio2" value="雞" v-model="singleRadio">
    <label for="radio2">雞</label>
  </div>
  <div class="form-check">
    <input type="radio" id="radio3" value="豬" v-model="singleRadio">
    <label for="radio3">豬</label>
  </div>
  <div class="form-check">
    <input type="radio" id="radio4" value="牛" v-model="singleRadio">
    <label for="radio4">牛</label>
  </div>
  <p>晚餐火鍋裡有 {{ singleRadio }}。</p>
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      singleRadio: '',
    },
  });
  </script>
  ```
- `select` - 選單，透過 `v-model` 將 `option` 內的 `value` 修改並寫入 data 內 `selected` 的資料中。
  ```html
  <select name="" id="" class="form-control" v-model="selected">
  <option value="" disabled>-- default --</option>
  <option value="1"> 1 </option>
  <option value="2"> 2 </option>
  <option value="3"> 3 </option>
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      selected: '',
    },
  });
  </script>
  ```

# <font color='red'>生命週期</font>

{% asset_img lifecycle.png%}

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vue生命週期學習</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
</head>
<body>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</body>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Vue的生命週期'
    },
    beforeCreate: function() {
      console.group('------beforeCreate創建前狀態------');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
      console.log("%c%s", "color:red","message: " + this.message) 
    },
    created: function() {
      console.group('------created創建完畢狀態------');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('------beforeMount掛載前狀態------');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    },
    mounted: function() {
      console.group('------mounted 掛載結束狀態------');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前狀態===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);   
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    updated: function () {
      console.group('updated 更新完成狀態===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el); 
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 銷毀前狀態===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    destroyed: function () {
      console.group('destroyed 銷毀完成狀態===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);  
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message)
    }
  })
</script>
</html>
```
{% asset_img vue_lifecircle.png %}

- <b>beforeCreate</b>
- <b>created</b>
- <b>beforeMount</b>
- <b>mounted</b>
- <b>beforeUpdate</b>
- <b>updated</b>
- <b>beforeDestroy</b>
- <b>destroyed</b>

# <font color="blue">Component 元件</font>
> 在一個頁面中，可能會有頁頭、側邊欄、內容區等等內容。
{% asset_img components.png%}

## regist
元件註冊的方式有兩種，分別為 {% label success@global component(全局註冊) %} 與 {% label success@local component(局部註冊) %}。
1. {% label primary @global%} - 使用 <code>Vue.component</code> 註冊的 component ，任何 Vue 實例都可以使用。
    ```html
    <my-component></my-component>
    <script>
    //component註冊要在Vue實例宣告之前
    Vue.compoenet('my-component',{
      props:[],
      tamplate:"<div>My Component</div>"
    });
    </script>
    ```
    第一個參數為 {%label primary@組件名稱 %}。
    `props` 為外層傳遞至元件內的資料。
    `tamplate` 為要渲染出的HTML內容，可以直接寫在內部，或者建立一個 `text/x-template` 的區塊，再指向此區塊。
    ```html
    <script type="text/x-template" id="Xcomponent">
      <div>My Component</div>
    </script>
    <script>
    //component註冊要在Vue實例宣告之前
    Vue.compoenet('my-component',{
      props:[],
      tamplate:"#Xcomponent"
    });
    </script>
    ```
1. {% label primary @lacal %} - 使用變數註冊的 component ，只有註冊此 component 的 Vue 實例才可以使用。
    ```html
    <script>
    var child = {
      props:{},
      tamplate:"<div>My Component</div>"
    }
    new Vue({
      el:"#app1",
      components: {"my-component": child}
    });
    </script>
    ```

## data
> 一個元件的 `data` 選項必須是一個函數，如此每個元件內的資料才能獨立，不互相干擾。
```html
<script>
//component註冊要在Vue實例宣告之前
Vue.compoenet('my-component',{
  data: function () {
    return {
      count: 0
    }
  },
  tamplate:""
});
</script>
```
## props
> Prop 是你可以在元件上註冊的一些自定義 attribute。當一個值傳遞給一個 prop attribute 的時候，它就變成了那個元件實例的一個屬性。
用一個 `props` 選項，為一個陣列，內為自定義的 attribute。作為傳遞至元件內的 attribute 。
```html
props:[],
```
### 靜態與動態傳遞參數
```html
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
<!-- 靜態傳遞方式 -->
<blog-post title="My journey with Vue"></blog-post>
<!-- 動態傳遞方式 -->
<blog-post :title="posts.title"></blog-post>
<script>
new Vue({
  el: '#demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
    ]
  }
})
</script>
```

### 單向數據流
數據從父級元件傳遞給子元件，子元件內部不能直接修改從父級傳遞過來的數據，console 會出現錯誤。
但這個子元件接下來希望將其作為一個本地的 prop 數據來使用。在這種情況下，
1. 定義一個本地的 data 屬性並將這個 prop 用作其初始值。
    ```js
    props: ['propData'],
    data: function () {
      return {
        newData: this.propData
      }
    }
    ```
1. 這個 prop 以一種原始的值傳入且需要進行轉換。使用 computed 屬性。
    ```js
    props: ['size'],
      computed: {
        normalizedSize: function () {
          return this.size.trim().toLowerCase()
        }
      }
    ```
### 尚未宣告的變數
在使用非同步方式拉取資料時，因資料尚未完全抓取完畢，但畫面已開始渲染，可以使用 `v-if` 判斷資料是否已經抓取完畢後再渲染此元件。
### 維持狀態與生命週期
當我們需要保留狀態的時候用 `keep-alive` 這個標籤，包裹動態組件時，會緩存不活動的組件實例，而不是銷毀它們。
```html
<keep-alive>
  <component-demo v-if=""/>
<keep-alive>
```
### 型別
有時，希望每個 prop 都有指定的值類型。這時，你可以以物件形式列出 prop，這些屬性的名稱和值分別是 prop 各自的名稱和類型。
```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```
{% note warning %}
- 使用靜態傳入參數方式，傳入的值型別皆為 `string`。
- 使用動態傳入方式，來告訴 Vue ，這是一個 JavaScript 表達式而不是一個字符串。
依資料型態來決定型別。
{% endnote %}

### 預設值
在未傳入 prop 時，希望此 prop 預先帶有一個值，可以使用物件方式新增一個 `default` 屬性，賦予此 prop 一個預設值。
```js
props: {
  cash: {
    type: number,
    default: 100
  }
}
```
## emit
> 透過「事件」來觸發父元件的函式。

`vm.$emit( eventName, […args] )`
- 參數
  - `{string} eventName` : 事件的命名不能為大寫，所以能夠採用 kebab-case 命名。
  - `[...args]`

- 只配合一個事件名使用 `$emit`
    子元件內
    ```js
    methods: {
      demoDun() {
        this.$emit('自定義的emit事件名稱')
      }
    }
    ```
    父元件中
    ```html
    <button @自定義的emit事件名稱 = "要呼叫的 function"></button>
    ```
- 配合額外的參數使用 `$emit`
    子元件內
    ```js
    methods: {
      demoDun() {
        this.$emit('自定義的emit事件名稱', 帶入的參數)
      }
    }
    ```
    父元件中
    ```html
    <button @自定義的emit事件名稱 = "要呼叫的 function"></button>
    <script>
    methods: {
      要呼叫的function(newData) {
        console.log(newData)
      }
    }
    </script>
    ```
## slot
> 可以在父元件新增內容，插入至子元件中。
1. 基本使用
    - 有一個 `mybtn` 的子元件。
        ```html
        <button>
          <slot>submit</slot>
        </button>
        ```
    - 父元件未傳入內容時，此元件會顯示預設的文字，當傳入內容時則會替代原本的內容。
    - 父元件使用 `mybtn` 元件，並傳入文字 “送出”。
        ```html
        <template>
          <mybtn>送出</mybtn>
        </template>
        ```
1. 具名插槽
    > 當要傳入的內容有多個的情況下，可以為每一個插槽命名並個別插入內容。
    對於這樣的情況，`<slot>` 元素有一個特殊的 attribute：`name`。這個 attribute 可以用來定義額外的插槽。
    - 有一個 `base-layer` 的元件
        ```html
          <div class="container">
            <header name="header">
            </header>
            <main>
            </main>
            <footer name="footer">
            </footer>
          </div>
          ```
    - 向具名插槽提供內容的時候，我們可以在一個 `<template>` 元素上使用 `v-slot` 指令，並以 `v-slot` 的參數的形式提供其名稱
        ```html
        <base-layout>
          <template v-slot:header>
            <h1>希望把頁頭放這裡</h1>
          </template>

          <p>A paragraph for the main content.</p>
          <p>And another one.</p>

          <template v-slot:default>
          <!-- 任何沒有被包裹在帶有 v-slot 的 <template> 中的內容都會被視為默認插槽的內容。 -->
          </template>

          <template v-slot:footer>
            <p>希望把頁腳放這裡</p>
          </template>
        </base-layout>
        ```
    {% note warning %}
    注意：`v-slot` 只能添加在 `<template>` 上
    {% endnote %}
    - 具名插槽的縮寫
    `v-slot` 也有縮寫，即把參數之前的所有內容 (`v-slot:`) 替換為字符 `#`。
        ```html
        <base-layout>
          <template #header>
            <h1>希望把頁頭放這裡</h1>
          </template>

          <p>A paragraph for the main content.</p>
          <p>And another one.</p>

          <template #footer>
            <p>希望把頁腳放這裡</p>
          </template>
        </base-layout>
        ```
## is
> 解析 DOM 模板時，有些 HTML 元素，諸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，對於哪些元素可以出現在其內部是有嚴格限制的。
而有些元素，諸如 `<li>`、`<tr>` 和 `<option>`，只能出現在其它某些特定的元素內部。
此時可以將原本元件的寫法改用 `is` 。
```html
<table>
  <tr is="component"></tr>
</table>
```
### 動態組件
> 有的時候，在不同組件之間進行動態切換是非常有用的。
```html
<!-- 組件會在 `currentComponent` 改變時改變 -->
<component v-bind:is="currentComponent"></component>
```
`currentTabComponent` 可以包括

- 已註冊組件的名字
- 一個組件的選項物件