---
title: typescript
tags:
---

# 環境建立
1. 先安裝指令工具
    ```bash
    npm install -g typescript
    ```
1. 建立 `tsconfig.json` 設定檔
    ```bash
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
    ```
    tsc
    ```
    TypeScript 編譯器就會自動掃描所有 `.ts` 結尾的檔案並且產出 JS 檔案。
# 