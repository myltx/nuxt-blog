---
date: 2025-07-03 17:28:45
url:
tags:
  - React
  - Study
title: React 学习计划 - 阶段 1：React 思维迁移
en-title: React Learning Plan Phase 1 React Mindset Migration
---

<!-- # 📚 React 学习计划 - 阶段 1：React 思维迁移 -->

## 🎯 阶段目标

- 理解 React 与 Vue3 的思维差异
- 熟练掌握核心 Hooks（useState, useEffect, useMemo, useCallback, useRef, useContext）
- 能使用 React 重构常用 Vue3 组件，体验差异与优缺点

---

## 🗓️ 预计周期

**3 - 5 天**  
每天 1-2 小时，专注在以下任务。

---

## ✅ 学习任务拆解

### 🔧 **Task 1.1 React 基础回顾**

- [ ] 阅读 React 官方入门教程：https://react.dev/learn
- [ ] 创建一个 vite + React + TypeScript 项目
- [ ] 了解 JSX 与模板语法的差异

---

### 🔧 **Task 1.2 Hooks 系统学习**

> 重点理解 “Hooks 与 Vue Composition API 的映射关系”

#### 📌 useState

- [ ] 实现一个计数器，包含 +1, -1, 重置功能
- [ ] 理解闭包陷阱

#### 📌 useEffect

- [ ] 实现页面加载后调用一次 API
- [ ] 实现依赖变化时更新数据
- [ ] 理解 Vue watchEffect 与 useEffect 的差异

#### 📌 useMemo

- [ ] 在列表渲染中缓存计算总和
- [ ] 理解与 Vue computed 的使用场景区别

#### 📌 useCallback

- [ ] 使用于子组件传递函数 props 时避免不必要渲染

#### 📌 useRef

- [ ] 获取 DOM 元素
- [ ] 保存上一次渲染的变量值

#### 📌 useContext

- [ ] 实现全局主题色切换（Context Provider + Consumer）

---

### 🔧 **Task 1.3 用 React 重构熟悉的 Vue 组件**

> 从自己项目中选择熟悉的组件，推荐：

- [ ] Button 按钮
- [ ] Input 输入框（受控组件）
- [ ] Modal 弹窗（结合状态与条件渲染）
- [ ] List 列表渲染组件

#### 🌟 **Bonus**

- 尝试封装通用组件库风格的 Props 设计

---

## 💡 **思维迁移要点记录**

- React 组件是函数，渲染是函数执行的副作用
- Vue reactive vs React useState
- Vue watchEffect vs React useEffect
- Vue slot vs React children props
- Vue provide/inject vs React Context

---

## ✏️ 每日学习记录模板

### 📅 日期：

### 🚀 今日完成：

-
-
-

### 📝 遇到的问题：

-
-

### 💡 收获与总结：

-
- ***

## 🔗 参考资料

- [React 官方文档](https://react.dev/learn)
- [深入理解 React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React vs Vue 3 对比](https://vuejs.org/guide/extras/comparison.html#react)

---

## 🏁 阶段 1 完成标准

- [ ] 熟练使用六大 Hooks，并理解使用场景
- [ ] 至少重构 3 个 Vue 组件为 React 组件
- [ ] 输出思维迁移笔记，并总结 React 相对 Vue3 的特点

---

> 📌 **备注**：
> 完成后，可直接进入 **阶段 2：Next.js 项目实战**，开始产出可上线的作品。
