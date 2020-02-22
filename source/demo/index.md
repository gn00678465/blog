---
title: Hello World
---

## include sample

Please load another markdown file with the following code.

<!-- md template.md -->

```mermaid
graph TB
start(开始)-->inputA[输入用户名密码]
inputA-->opA{数据库查询子类}
opA-->conditionA{是否有此用户}
conditionA--yes-->conditionB{密码是否正确}
conditionA--no-->inputA
conditionB--yes-->opB[读入用户信息]
conditionB--no-->inputA
opB-->en(登录)
```
