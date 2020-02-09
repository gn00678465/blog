---
title: 資料型別 Map
date: 2020-02-08 17:02:09
---

# sass map

{% note warning %}
注意Sass Maps 是 Sass 3.3 版才有支援
{% endnote %}
{% note info %}
Sass Maps 提供變數類似於 json 的資料組合，也是 key/value 的結構，可提升程式可讀、變數群組性。
{% endnote %}
寫Sass Maps的時候，要特別注意幾點：
1. 外層要使用小括號。
1. 最後一個key/value後面的逗號可以省略。
1. key的名稱不能重複，否則會編譯錯誤。
1. key/value的名稱可以是許多資料類型(數字、字串、布林等等)。
```SCSS
$map: (
  key1: value1, 
  key2: value2, 
  key3: value3
);
```
## sass:map
1. map-get($map,$key)
1. map-merge($map1,$map2)
1. map-remove($map,$key)
1. map-keys($map)
1. map-values($map)
1. map-has-key($map,$key)
### map-get($map,$key)
{% note info %}
取出 $map 裡指定的 $key 所關連的 value。
{% endnote %}
### map-merge($map1,$map2)
{% note info %}
合併多個 $map。
{% endnote %}
### map-remove($map,$key)
{% note info %}
從 $map 裡面刪除一個移除指定的 $key。
{% endnote %}
### map-keys($map)
{% note info %}
取出所有的 $key。
{% endnote %}
### map-values($map)
{% note info %}
取出所有的 value。
{% endnote %}
### map-has-key($map,$key)
{% note info %}
瀏覽 $map 裡面是否有 $key 值，有則回傳true，沒有便回傳false。
{% endnote %}