---
title: typescript
tags:
---
{% cq %}
TypeScript 是一個具有型別的 JavaScript {% label primary@超集合 %} (Superset)
- 所有 JS 語法，都是合法的 TypeScript 語法。
- 記得以 `;` 結尾。
{% endcq %}

<!--more-->

# 基本使用

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
            </td>
        </tr>
    </tbody>
</table>

# TypeScript 編譯器
## 環境建立
1. 先安裝指令工具
    ```Bash
    npm install -g typescript
    ```
1. 初始化 `tsconfig.json` 設定檔
    ```TypeScript
    tsc --init
    ```
    此時專案資料夾內會出現一個名為 `tsconfig.json` 的檔案，這就是 TypeScript 編譯器的設定檔。
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
1. 編譯方式
    - 編譯所有檔案(讀取 tsconfig.json 設定檔)
        TypeScript 編譯器就會自動掃描當前目錄以及子目錄所有 `.ts` 結尾的檔案並且產出 JS 檔案。
        ```TypeScript
        tsc
        ```
        >當專案 built 出現錯誤而無法確認錯誤時，可使用 `tsc` 指令確認 TypeScript 編譯時是否有錯誤訊息。
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
## 列舉型別 (Enum)

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
var today = day.Friday;
//day.Friday作為判斷能讓程式碼更一目瞭然
if (today == day.Friday) console.log("Today is Friday!");

console.log(day[5]);        //return "Friday"
console.log(day["Friday"]); //return 5
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

>TypeScript 2.4版後 `emnu` 內可指定 `string` 型別，但須統一。

[列舉型別](https://medium.com/@notwist123/typescript-列舉型別-enumerate-96fc2eedd581)

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

### 排除過度屬性檢查的性別宣告技巧

```typescript
interface Ilabel {
    label: string;           // 必要屬性，必須傳入!
    [propName: string]: any; //允許任意屬性傳入
}
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

## TypeScript 2.0 推出的 never 原始型別
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