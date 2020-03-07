---
title: AJAX
tags:
---

{% asset_img AJAX.png%}

<!--more-->

AJAX 全名為 **Asynchronous JavaScript and XML**（非同步 JavaScript 及 XML）

- AJAX 是一種用於創建快速動態網頁的技術。
- 在傳統的網頁（不使用 AJAX）如果需要更新內容，必須重載整個頁面。而AJAX 通過在後台與伺服器進行少量數據交換，使網頁實現異步更新。這意味著可以在不重載整個頁面的情況下，對網頁的某些部分進行更新。

# Javascript

<div class="timeline">
  <dl class="timeline--entry">
    <dt class="timeline--entry__title"><code>var XHR = new XMLHttpRequest()</code></dt>
    <dd class="timeline--entry__detail">要送出一個 HTTP 請求，需要建立一個 <code>XMLHttpRequest</code> 物件、開啟一個 URL，並發起一個請求。</dd>
  </dl>
  readyState will be 0
  <dl class="timeline--entry">
    <dt class="timeline--entry__title"><code>XMLHttpRequest.open(method, url, async)</code></dt>
    <dd class="timeline--entry__detail">
      <li><code>method</code>：要使用的HTTP方法，比如「GET」、「POST」、「PUT」、「DELETE」、等。</li>
      <li><code>url</code>：要向其發送請求的URL。</li>
      <li><code>async</code>：其取得資料的方式可以為非同步（asynchronously）或同步（synchronously）兩種之一。默認為true。
        <ul>
        <li>true：</li>
        <li>false：</li>
        </ul>
      </li>
    </dd>
  </dl>
  <dl class="timeline--entry">
    <dt class="timeline--entry__title"><code></code></dt>
    <dd class="timeline--entry__detail">要送出一個 HTTP 請求，需要建立一個 <code>XMLHttpRequest</code> 物件、開啟一個 URL，並發起一個請求。</dd>
  </dl>
</div>

## readyState

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>UNSENT</td>
      <td><code>XMLHttpRequest()</code> 已被建立，但 <code>open()</code> 方法尚未被呼叫。</td>
    </tr>
    <tr>
      <td>1</td>
      <td>OPENED</td>
      <td><code>open()</code> 方法已被呼叫，但未傳送任何資料。<br>
      於此狀態時，可以使用 <code>setRequestHeader()</code> 方法設定請求標頭（request headers），並可呼叫 <code>send()</code> 方法來發送請求。</td>
    </tr>
    <tr>
      <td>2</td>
      <td>HEADERS_RECEIVED</td>
      <td><code>send()</code> 方法已被呼叫，並且已接收到回應標頭（response header）。</td>
    </tr>
    <tr>
      <td>3</td>
      <td>LOADING</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>DONE</td>
      <td>請求操作已完成。這意味著資料傳輸可能已成功完成或是已失敗。</td>
    </tr>
  </tbody>
</table>