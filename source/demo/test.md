# 1 
{% raw %}
<style>
.attr {
  max-width: 960px;
  margin: 0 auto;
}

.attr li {
  margin-top: 2px;
  margin-bottom: 2px;
}
.attr li[title~='a1'] {
  color: #16a085;
}
.attr li[title^='b'] {
  background: #3498db;
}
.attr li[title$='2'] {
  border: 2px solid #c0392b;
}
.attr li[title*='abc']::before {
  content: 'o';
  color: #d35400;
}
</style>
<div class="result">
<ol class="attr">
  <li title="a1">屬性：title=a1</li>
  <li title="a2">屬性：title=a2</li>
  <li title="aa3">屬性：title=aa3</li>
  <li title="abc1">屬性：title=abc1</li>
  <li title="b1">屬性：title=b1</li>
  <li title="b2">屬性：title=b2</li>
  <li title="bb3">屬性：title=bb3</li>
  <li title="abc2">屬性：title=abc2</li>
  <li title="c1">屬性：title=c1</li>
  <li title="c2">屬性：title=c2</li>
  <li title="cc3">屬性：title=cc3</li>
  <li title="abc3">屬性：title=abc3</li>
</ol>
</div>
{% endraw %}
