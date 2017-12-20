# 基于vue2.0+vuex+localStorage写的本地备忘录（todoList2.0）
> 采用vue2.0+vuex+element-ui+localStorage+webpack，实现一个本地存储的备忘录

## 介绍
 之前已经写过一个todoList的demo，也是实现了本地存储，那是初学vue时写的，很基础。      
 地址：[todoList1.0](https://wungjyan.github.io/demo/vue-todolist1.0/index.html#all)    
 写这次demo的初衷是想试用下element-ui，另外练习一下vuex的使用，也是比较基础的东西。
 
## 第一次提交（2017.12.20）

- 采用element-ui实现基本页面布局
- 实现基本功能
  - 支持回车添加事件
  - 添加事件 => 进入未完成列表
  - 未完成列表 = 勾选 => 进入已完成列表
  - 已完成列表 = 取消勾选 => 再次进入未完成列表
  - 未完成列表 = 删除 => 进入已删除列表
  - 已删除列表 = 勾选 = 恢复 => 再次进入未完成列表
  - 本地存储化



