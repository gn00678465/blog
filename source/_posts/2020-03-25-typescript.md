---
title: TypeScript
categories:
  - TypeScript
tags:
  - TypeScript
  - JavaScript
date: 2020-03-25 00:43:49
---

{% asset_img ts.svg %}
{% cq %}
TypeScript 是一個具有型別的 JavaScript {% label primary@超集合 %} (Superset)
- 所有 JS 語法，都是合法的 TypeScript 語法。
- 記得以 `;` 結尾。
{% endcq %}

<!--more-->

# TypeScript 編譯器

## 環境建立

<div class="timeline">
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">安裝指令工具</dt>
    <dd class="timeline--entry__detail"><code>npm install -g typescript</code></dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title">初始化 <code>tsconfig.json</code> 設定檔</dt>
    <dd class="timeline--entry__detail"><code>tsc --init</code></dd>
  </dl>
  此時專案資料夾內會出現一個名為 <code>tsconfig.json</code> 的檔案，這就是 TypeScript 編譯器的設定檔。
  ```json
    {
    "compilerOptions": {
        "target": "es5",  //指定編譯生成的JS版本
        "module": "commonjs", //指定生成哪種模組
        "strict": true,  //採用嚴格模式  
        "esModuleInterop": true,  //兼容模組導入的方式
      }
    }
    ```
</div>

1. 編譯方式
    - 編譯所有檔案(讀取 tsconfig.json 設定檔)
        TypeScript 編譯器就會自動掃描當前目錄以及子目錄所有 `.ts` 結尾的檔案並且產出 JS 檔案。
        ```TypeScript
        tsc
        ```
        >
    - 編譯單一檔案(需指定 TypeScript 編譯器選項)
        ```TypeScript
        tsc [options] [file...]
        ```
    - 顯示完整的 TypeScript 編譯器選項
        ```TypeScript
        tsc --all
        ```
    - 顯示 tsc 編譯器摘要說明
        ```TypeScript
        tsc -h
        ```
## 設定技巧
1. `tsconfig.json` 設定技巧
    - Glob support in tsconfig.json
        - `*`   代表0到多個字元比對(不含目錄分隔字元)。
        - `?`   代表1個字元比對(不含目錄分隔字元)。
        - `**/` 代表比對任意子目錄。
    - 設定 Base URL 預設 import 的基底路徑
    - 設定 Path mapping
        - 必須搭配 baseUrl 設定一起使用。
    ```json
    {
    "compilerOptions": {
        "baseUrl": "src/",          //base url
        "paths": {
            "env/*": ["目錄/*"],   //path mapping
            "env": ["目錄/檔名"]   //path mapping 單檔案
        }
      }
    }
    ```
1. 預設載入內建的模組定義檔(--lib)
    ```json
    {
    "lib": [
        "es2017",
        "dom"
        ]
    }
    ```
{% asset_img lib.png %}

# 型別應用

## 自動型別推導 (Type Inference)
>TypeScript 設定變數可不需特別設定型別，可從 `=` 的右側的值推導型別。
```typescript
let fullName: string = 'John';   // : string 非必要

let obj = {};
    obj.name = 'will';          // 無法擴充沒有屬性的 object，須設定型別

let arr = [];
    arr.push({});               // 陣列預設為 any 型別
```

## 靜態型別標示
<table>
    <thead>
        <tr>
            <th width='10%'>物件</th>
            <th width='45%'>JavaScript</th>
            <th width='45%'>TypeScript</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>數值</td>
            <td>
```javascript
var a = 1;
```
            </td>
            <td>
```typescript
var a : number = 1;
```
            </td>
        </tr>
        <tr>
            <td>字串</td>
            <td>
```javascript
var a = 'string'
```
            </td>
            <td>
```typescript
var a : string = 'string'
```
            </td>
        </tr>
        <tr>
            <td>布林</td>
            <td>
```javascript
var a = true;
```
            </td>
            <td>
```typescript
var a : boolean = true;
```
            </td>
        </tr>
        <tr>
            <td>陣列</td>
            <td>
```javascript
var a = [1, 2, 3];
```
            </td>
            <td>
```typescript
var a : number[] = [1, 2, 3]
```
可以為 any 型別
            </td>
        </tr>
        <tr>
            <td>任意物件</td>
            <td>
```javascript
var a = {};
```
            </td>
            <td>
```typescript
var a : any = {};
```
            </td>
        </tr>
        <tr>
            <td>列舉</td>
            <td>以 JS 物件模擬列舉型別</td>
            <td>
```typescript
enum color {red, green, blue}
```
            </td>
        </tr>
        <tr>
            <td>void</td>
            <td>
```javascript
function test() {
    console.log('message');
}
```
            </td>
            <td>
```typescript
function test() : void {
    console.log('message');
}
```
void 代表沒有回傳值 undefined
            </td>
        </tr>
    </tbody>
</table>

### 數值
> 與 JavaScript 相同，TypeScript 裡的所有數字都是浮點數。 這些浮點數的類型是 `number`。 除了支持十進制和十六進制字面量，TypeScript 還支持 ECMAScript 2015 中引入的二進制和八進制字面量。

```typescript
let isNumber : number = 1;            // 數字
let isHexNumber : number = 0xff00f;   // 16進位
let isBinaryNumber : number = 0b1001; //2進位
let isOctalNumber : number = 0o7340;  // 8進位
```

### 字串
> 使用 `string` 表示文本數據類型。使用雙引號（ `"` ）或單引號（ `'`）表示字符串。
> 還可以使用 ECMAScript 2015 新增的字串模板，它可以定義多行文本和內嵌表達式。這種字符串是被反引號包圍（ <code>`</code> ），並且以 <code>${ expr }</code> 這種形式嵌入表達式

```typescript
let isString : string = 'string';
let stringliteral : number = isString.length;
// 字串模板
console.log(`${isString} 有 ${stringliteral} 位數`);
```

### 布林
> 最基本的數據類型就是簡單的 `true` / `false` 值

```typescript
let isTrue : boolean = true;
let isFalse : boolean = false;
```

### 陣列
TypeScript 像 JavaScript 一樣可以操作陣列元素。 有兩種方式可以定義陣列。

1. 在元素類型後面接上 `[]`，表示由此類型元素組成的一個陣列。
    ```typescript
    let name: type = [];
    ```
1. 使用泛型陣列， `Array<元素類型>` 。
    ```typescript
    let arr : number[] = [1, 2, 3];
    let arr2 : Array<number> = [1, 2, 3];
    let arr3 : string = ['Java', 'ASP', 'PHP', 'Dart']
    let arr4 : any = [1, '2', {}, function(){}];
    ```

### 多維陣列

1. 多維陣列定義
    ```typescript
    let name: type[][] = [[], [], []...]
    ```
    ```typescript
    let arr : number[][] = [
        [1, 2, 3, 4],
        [100, 200, 300],
        [0.5, 0.7, 0.9]
    ];
    ```
1. 多維陣列使用
    ```ts
    console.log(arr[0])     // [1, 2, 3, 4]
    console.log(arr[0][1])  // 2
    console.log(arr[2][2])  // 0.9
    ```

### 列舉型別 (Enum)
{% note info %}
- 可讓程式碼更好維護且增加程式可讀性。
- 可用來管理多個同系列的常數，做為狀態的判斷所使用。
{% endnote %}

```typescript
enum name { name1, name2, name3 }
```

<table>
    <thead>
        <tr>
            <th>TypeScript</th>
            <th>JavaScript</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
```typescript
//宣告一個名為 day 的Enum type變數，並讓其包含一周的星期
enum day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
//將today定義為Week中的Friday 
let today: day = day.Friday;
//day.Friday作為判斷能讓程式碼更一目瞭然
if (today == day.Friday) console.log("Today is Friday!");

console.log(today);         //return "Friday"
console.log(day[today]);    //return 5

console.log(day[1]);        //return "Monday"
console.log(day["Sunday"]); //return 0
```
            </td>
            <td>
```javascript
//宣告一個名為 day 的Enum type變數，並讓其包含一周的星期
var day;
(function (day) {
    day[day["Sunday"] = 0] = "Sunday";
    day[day["Monday"] = 1] = "Monday";
    day[day["Tuesday"] = 2] = "Tuesday";
    day[day["Wednesday"] = 3] = "Wednesday";
    day[day["Thursday"] = 4] = "Thursday";
    day[day["Friday"] = 5] = "Friday";
    day[day["Saturday"] = 6] = "Saturday";
})(day || (day = {}));
//將today定義為day中的Friday
var today = day.Friday;
//用day.Friday作為判斷能讓程式碼更一目瞭然
if (today == day.Friday)
console.log("Today is Friday!");
console.log(day[5]); //return "Friday"
console.log(day["Friday"]); //return 5
```
            </td>
        </tr>
    </tbody>
</table>

1. 在 Enum 中的每個常數，都可以經由 = 指定 Value 。
    ```typescript
    enum httpStatusCodes {
    error = 400,
    success = 200,
    }
    ```
1. 也可以為定義字串
    ```typescript
    enum httpStatusCodes {
    error = 'A',
    success = 'B',
    }
    ```

<font size="5"><b>應用</b></font>

```typescript
enum week {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let today = new Date();
let currentDay = today.getDay();

function checkDay(Day: week) {
    let result: string = '';
    switch (Day) {
        case week.Sunday:
            result = '星期天'
            break;
        case week.Monday:
            result = '星期一'
            break;
        case week.Tuesday:
            result = '星期二'
            break;
        case week.Wednesday:
            result = '星期三'
            break;
        case week.Thursday:
            result = '星期四'
            break;
        case week.Friday:
            result = '星期五'
            break;
        case week.Saturday:
            result = '星期六'
        break;
    }
    return result;
}

console.log(checkDay(currentDay));
```

[列舉型別](https://medium.com/@notwist123/typescript-列舉型別-enumerate-96fc2eedd581)

### 聯合型別
> 可包含多種型別的變數，不建議使用。

- 定義
    ```ts
    let data : type1 | type2 | ... ;
    ```

- 使用
    ```ts
    let myData : boolean | string ;
    myData = 'Hello world';
    console.log(myData);        // Hello world

    myData = false;
    console.log(myData);        // false

    myData = 100;               //編譯錯誤
    ```

## Function

- 定義
    ```ts
    function f(para1: type, ...) : return_type {
        // do soming
    }
    ```
    > `return_type` 可以為 `void` 代表沒有回傳值。

- 使用
    ```ts
    function add(x:number, y:number ): number {
        return x + y;
    }
    const multiply = function (x:number, y:number ): number {
        return x * y;
    }
    console.log(add(10,50))     // 60
    console.log(multiply(2,50)) // 100
    // 沒有回傳值
    function test() : void {
        console.log('message');
    }
    test();
    ```

### 箭頭函式

- 定義
    ```ts
    (para1: type, ...) : return_type => {
        // do soming
    }
    ```
- 使用
    ```ts
    const multiply = (x:number, y:number ): number => {
        return x * y;
    };
    console.log(multiply(2,50)); // 100
    ```

### 可省略參數與默認參數
> TypeScript裡的每個函數參數都是必須的。 這不是指不能傳遞 `null`或`undefined`作為參數，而是指編譯器會檢查用戶是否為每個參數都傳入了值。

- 可省略參數
    在參數旁使用 `?` 可以實現可省略參數的功能。
    ```typescript
    const sayHello = function(name?: string):void {
        if (name === undefined) {
            console.log('Hello World!');
        } else {
            console.log(`Hello ${name}!`)
        }
    }
    sayHello();             // Hello World!
    sayHello('Spongebob');  // Hello Spongebob!
    ```

- 默認參數
    另外也可以為參數提供一個默認值，當用戶沒有傳遞這個參數或傳遞的值是 `undefined` 時。
    ```typescript
    const sayHello = (name: string = 'World'):void => {
        console.log(`Hello ${name}!`)
    }
    sayHello();             // Hello World!
    sayHello('Spongebob');  // Hello Spongebob!
    ```

### 其餘參數
> 當想同時操作多個參數，或者不知道會有多少參數傳遞進來，可使用 ES6 新增的其餘參數來操作所有傳入的參數。
```typescript
const add = function (...values: number[] ):number {
    let result = 0;
    for ( let val of values ) {
        result += val;
    }
    return result;
}
console.log(add(1, 3, 5, 7 ,9));    // 25
```

## class(類別)

- 定義
    ```typescript
    class className {
        property_name1: type;
        property_name2: type;
        // 構造函數
        constructor(para1: type, para2: type, ...) {
            // 構造函數內容
        }
        // 方法
        method1 (para1: type, para2: type, ...): returb_type {
            // 函式內容
        }
        // method2, method3, ...
    }
    ```
- 使用
    ```typescript
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }
        sayHello (): void {
            console.log(`Hello. I'm ${this.name} and I'm ${this.age} years old`);
        }
    }
    let patrick = new Person (patrick, 28);

    console.log(patrick.name);  // patrick
    patrick.sayHello();         // Hello. I'm patrick and I'm 28 years old
    ```

### 訪問限制
- `public` : 修飾的屬性或方法是{%label primary@公有的%}，可以在任何地方被訪問到，預設所有的屬性和方法都是 public 的。
- `protected` : 飾的屬性或方法是{%label primary@受保護的%}，它和 private 類似，區別是它在子類別中也是允許被訪問的。
- `private` : 修飾的屬性或方法是{%label primary@私有的%}，不能在宣告它的類別的外部訪問。

1. `public`
    ```ts
    class database {
        dbname: string;
        constructor (dbname: string) {
            this.dbname = dbname;
        }

        public showDB() {
            console.log(`數據庫：${this.dbname}`)
        }
        protected connect() {
            console.log(`${this.dbname} 連接中...`)
        }
        private disconnect() {
            console.log(`${this.dbname} 關閉`)
        }
    }
    let firebase = new database("firebase");
    firebase.showDB()       // 數據庫：firebase
    firebase.connect()
    // Property 'connect' is protected and only accessible within class 'database' and its subclasses.
    firebase.disconnect()
    // Property 'disconnect' is private and only accessible within class 'database'.
    ```
1. `protected`
    ```ts
    // 繼承
    class mongoDB extends database {
        public doIt() {
            super.connect();
            super.disconnect();
            // Property 'disconnect' is private and only accessible within class 'database'.
        }
    }
    let mongo = new mongoDB('mongoDB');
    mongo.showDB();     // 數據庫：mongoDB
    mongo.connect();
    // Property 'connect' is protected and only accessible within class 'database' and its subclasses.
    monge.doIt()        // mongoDB 連接中...
    ```
1. `private`
    可透過 `get` & `set` 來存取 `private` 的屬性。
    ```ts
    class BMIcalc {
    private weight: number;
    height: number;
    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }
    BMI( ): number {
        return Math.round(this.weight / (Math.pow((this.height / 100), 2))) ;
    }
    set changeW(val: number) {
        this.weight = val;
    }
    get getWeight():number {
        return this.weight;
    }
    }

    let otaku = new BMIcalc(70, 172);

    console.log(otaku.BMI());
    console.log(otaku.height);
    console.log(`Your secret weight is ${otaku.getWeight} kg`);
    otaku.changeW = 172;
    console.log(otaku.BMI());
    ```

### 靜態成員(static)
> 使用 `static` 修飾符修飾的方法稱為靜態方法， `static` 不需要實例化，而是直接透過類別來呼叫。
```ts
class Animal {
    static num: number;

    constructor() {
        // ...
    }
}

Animal.num = 42;
console.log(Animal.num); // 42
```
### 命名空間(namespace)
> 對(函數/類/接口等...)進行分組管理就可以用命名空間。

1. 使用 `namespace` 關鍵字宣告。
1. 在命名空間中默認成員都是私有 `private` 的。
1. 在命名空間中使用 `export` 關鍵字宣告公有資源。
1. 命名空間支持跨文件分隔。
1. 在Node.js/Require.js中使用 `require` 關鍵字導入模塊。
1. 可以使用 `import` 關鍵字聲明命名空間的別名。

- 定義
    ```ts
    namespace 命名空間的名稱(可以用句號連接多個名稱) {
        export class class_name {}
        export function func_name {}
        export namespace ns_name {}
    }
    ```
- 使用
    ```ts
    ```

### 繼承
> 使用 `extends` 關鍵字實現繼承，子類別中使用 `super` 關鍵字來呼叫父類別的建構函式和方法。

- 定義
    ```ts
    class child_class extends parenClass {
        super()
    }
    ```

- 使用
    ```ts
    class database {
        protected name:string;
        constructor(name: string) {
            this.name = name;
        };
        showInfo() {
            console.log(`目前使用的資料庫為 ${this.name}`)
        }
    }
    class MongoDB extends database {};

    let mydb = new MongoDB('mongoDB');
    mydb.showInfo()     // 目前使用的資料庫為 mongoDB
    ```

## interface(介面)

- 定義
    ```ts
    interface name {
        // 定義介面內容
    }
    ```
- 使用
    - 基本使用
        ```typescript
        interface Ilabel {
            label: string;              // 必要屬性，必須傳入!
            age?: number;               // 可選屬性
            [propName: string]: any;    //允許任意屬性傳入
        }
        ```
        {% note info %}
        1. 在無其他可選及任意屬性下，賦值的時候，變數的形狀必須和介面的形狀保持一致。
        1. 使用 `?` 可選屬性，可選屬性的含義是該屬性可以不存在。
        1. `[propName: string]: any` 允許有任意的屬性。
            - 一旦定義了任意屬性，那麼確定屬性和可選屬性的型別都必須是它的型別的子集。
        {% endnote %}

    - 類別的使用
        ```ts
        interface IDatabase {
            connect(): void;
            close(): void;
            exxsql(sql: string): number
        }
        class mySQL implements IDatabase {
            connect() {
                console.log('[mySQL]資料庫連接')
            }
            close() {
                console.log('[mySQL]資料庫關閉')
            }
            exxsql(sql: string) {
                console.log('[mySQL]sql 執行成功');
                return 0;
            }
        }
        let myDB: IDatabase = new mySQL();
        myDB.connect();                         // [mySQL]資料庫連接
        myDB.exxsql("select * from table");     // [mySQL]sql 執行成功
        myDB.close();                           // [mySQL]資料庫關閉

        class PostgreSQL implements IDatabase {
            connect() {
                console.log('[PostgreSQL]資料庫連接')
            }
            close() {
                console.log('[PostgreSQL]資料庫關閉')
            }
            exxsql(sql: string) {
                console.log('[PostgreSQL]sql 執行成功');
                return 0;
            }
        }
        myDB = new PostgreSQL();
        myDB.connect();                         // [PostgreSQL]資料庫連接
        myDB.exxsql("select * from table");     // [PostgreSQL]sql 執行成功
        myDB.close();                           // [PostgreSQL]資料庫關閉
        ```
    
    - 介面參數
        ```ts
        interface IDatabase {
            connect(): void;
            close(): void;
            exxsql(sql: string): number
        }
        class mySQL implements IDatabase {
            connect() {
                console.log('[mySQL]資料庫連接')
            }
            close() {
                console.log('[mySQL]資料庫關閉')
            }
            exxsql(sql: string) {
                console.log('[mySQL]sql 執行成功');
                return 0;
            }
        }
        class PostgreSQL implements IDatabase {
            connect() {
                console.log('[PostgreSQL]資料庫連接')
            }
            close() {
                console.log('[PostgreSQL]資料庫關閉')
            }
            exxsql(sql: string) {
                console.log('[PostgreSQL]sql 執行成功');
                return 0;
            }
        }

        function doSomething(db: IDatabase) {
            db.connect();
            db.exxsql('update ...');
            db.close();
        }
        let mysql: IDatabase = new mySQL();
        let pgsql: IDatabase = new PostgreSQL();

        doSomething(mysql);
        doSomething(pgsql);
        // [mySQL]資料庫連接
        // [mySQL]sql 執行成功
        // [mySQL]資料庫關閉
        // [PostgreSQL]資料庫連接
        // [PostgreSQL]sql 執行成功
        // [PostgreSQL]資料庫關閉
        ```

        [類別實現介面](https://willh.gitbook.io/typescript-tutorial/advanced/class-and-interfaces)


## 型別轉換 (Type assertions)
>assertions : 斷言

有時宣告了 any，但有時需要做明確的轉型，此時可使用 type assertion 明確轉型，也就是告訴編譯器：「我說這是 string ，就是 string 型別」。
有兩種形式
- `<>`
    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    ```
- as
    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```

    ```typescript
    let a = document.getElementById('link');    // HTMLElement 型別
    a.href = 'http://www.google.com';           // 找不到 href 屬性

    let a = <HTMLAnchorElement>document.getElementById('link');
    a.href = 'http://www.google.com';           // OK
    ```

## 嚴格空值檢查模式

開啟方式：
```json
{
"compilerOptions": {
    "strictNullChecks": true,
    }
}
```

預設型別檢查模式 (regular type checking mode)
```typescript
let a: T;       // 可以指派 undefined 或 null，因為 undefined 和 null 是所有型別的子型別。
```
- (2)
    ```typescript
    let a = null;           // a 變數型別為 any
    let b = undefined;      // b 變數型別為 any
    ```

嚴格空值檢查模式 (strict null checking mode) (--strictNullChecks)
```typescript
let a: T;            // 不允許為 undefined 或 null (嚴格檢查)。
let a: T | null;     // 不允許為 undefined 也代表需要初始值。
let a: T | undefined;
let a: T | null | undefined;
```
- **可選參數**預設就擁有 undefined 型別，啟用**嚴格空值檢查模式**也一樣(例外)。
    ```typescript
    type T1 = (X?: number) => string;
    ```
- (2)
    ```typescript
    let a = null;           // a 變數型別為 null
    let b = undefined;      // b 變數型別為 undefined
    ```
- (3) 非空值斷言運算子 ( ! ) (Non-null assertion operator)
    ```typescript
    interface Entity {
        name: string;
    }
    function valiableEntity(e?: Entity) {
        // 丟出例外 如果 e 是 null or invalid entity
    }
    function processEntity(e?: Entity) {
        valiableEntity(e);
        let s = e!.name
        // Assert that e is non-null and access name
    
    ```

## 標記的聯合類型(Tagged union types)
- 傳統的聯合類型
    ```typescript
    let a : number | string | undefinded;
    ```
- 字串實字聯合類型 (Sstring Literal Types)
    ```typescript
    type test = "Sun" | "Moon" | "Day";
    function( X: test ) {
        // do something
    }
    ```
    >可與 `switch` 搭配使用。
- 數值實字聯合類型 (Numeric Literal Types)
    ```typescript
    function rollDie() : 1 | 2 | 3 | 4 | 5 | 6 {};
    ```
- 列舉成員聯合類型 (Enum Member Types)
    ```typescript
    let kind: Shapekind.Square | Shapekind.Circle;
    ```
- 標記的聯合類型

## never 原始型別
- never 原始型別 是 TypeScript 2.0 推出的
- never 用來宣告某個函式或變數永遠不可能有值
    ```typescript
    let a: never = function test() {while (true) { } };
    ```
- void 型別的特性
    - 宣告 void 型別的變數只能是 undefind or null (代表沒有值)。
    - undefined 和 null 是所有型別的子型別(subtype)。
- never 型別的特性
    - never是所有型別的子型別(subtype)，不須特別宣告。
    - 沒有任何型別是 never 的子型別(除了本身 never 以外)。
    - 若函式表達式或箭頭函式要能自動推導出 never 型別，有以下條件。
        - 函式中沒有任何 return 敘述或回傳的只會有 never 型別。
        - 函式一定不能跑到函式最後一行(end point of the function is not reachable)

## this 的嚴格用法

- 預設函式內使用的 this 預設型別為 any
- TypeScript 2.0 新增 `-noImplicitThis`
    - 在函式中預設無法使用 any 型別的 this 變數。
    - 如果要使用 this 必須在函式的第一個參數加入型別宣告。(編譯後會自動移除)
    ```typescript
    function c (this: any, b: number) {
        return this.title;
    }
    ```

## -noImplicitAny

{% asset_img noImplicitAny.png %}

## -alwayStrict
- 所有 TypeScript 程式碼都會以 strict mode 進行解析。
- 所有輸出的 JavaScript 程式碼都會加上 "use strict" 在每個 Scope。
- 所有相關模組都會進入嚴格編譯模式。
- 建議使用在 non-module 的程式碼。

# 第三方庫應用

以 `node-request` 為例。

1. 安裝 `node-request`

    ```bash
    npm init
    npm install --save request
    ```

1. TypeScript 使用方式
    1. 尋找 tsd 文件 - [TypeSearch](https://microsoft.github.io/TypeSearch/)
    1. 導入 tsd
        ```bash
        npm install --save @types/request
        ```
    1. 編寫代碼
    1. 運行代碼

<table>
    <thead>
        <tr>
            <th width="50%">JavaScript</th>
            <th width="50%">TypeScript</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
```javascript
const request = require('request');
const TestUrl = 'http://www.google.com';
request(TestUrl, function (error, response, body) {
  console.error('error:', error);
  // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
  // Print the response status code if a response was received
  console.log('body:', body);
  // Print the HTML for the Google homepage.
});
```
            </td>
            <td>
```ts
import request = require('request');
const TestUrl: string = 'http://www.google.com';
request(TestUrl, function (error, response, body) {
  console.error('error:', error);
  // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
  // Print the response status code if a response was received
  console.log('body:', body);
  // Print the HTML for the Google homepage.
});
```
            </td>
        </tr>
    </tbody>
</table>