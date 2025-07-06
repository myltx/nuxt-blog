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

##### 💡 代码示例：计数器 +1 -1 重置

- [x] 实现一个计数器，包含 +1, -1, 重置功能

```tsx
import { useState } from "react";

function Counter() {
  // 定义 count 状态，初始值为 0
  const [count, setCount] = useState(0);

  // +1
  const increment = () => {
    // ⚠️ 如果这里写 setCount(count + 1)，需要注意闭包陷阱：
    // 如果你的更新依赖于之前的值，最好使用回调形式
    setCount((prevCount) => prevCount + 1);
  };

  // -1
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // 重置
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}

export default Counter;
```

---

#### 理解闭包陷阱

- [x] 理解闭包陷阱

##### 🔍 闭包陷阱解释

什么是闭包陷阱？
• 当你写：

```tsx
setCount(count + 1);
```

这里的 count 是 **当前渲染时的值**。

###### 如果你连续执行两次：

```js
increment();
increment();
```

- 使用 setCount(count + 1)，两次 increment 读到的是同一个旧值，只会 +1。
- 使用 setCount(prevCount => prevCount + 1)，每次都会读取到最新的 state，结果 +2。

---

##### ✅ 总结

- 如果更新依赖于上一次的 state 值，一定要使用回调形式：

```js
setCount((prevCount) => prevCount + 1);
```

- 这样可以避免闭包陷阱，确保多次更新正确累加
<!--
- React 会将 `count` 的当前值捕获到闭包中，即使你在点击按钮后 `count` 已经更新，React 依然会使用捕获的值。
- 所以，为了避免闭包陷阱，你应该使用回调形式：

-这样，React 会将 `prevCount` 作为当前值传递给回调函数，确保你使用的是最新的值。 -->

---

#### 📌 useEffect

##### 💡 1. useEffect 实现页面加载后调用一次 API

- [x] 实现页面加载后调用一次 API

```tsx
import { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 定义异步函数
    const fetchData = async () => {
      setTimeout(() => {
        setData("我只被请求了一次");
        setLoading(false);
      }, 2000); // 模拟请求
    };

    // 调用
    fetchData();
  }, []); // 依赖数组为空 => 仅页面加载（首次挂载）时调用一次

  return (
    <div>
      <h1>💡 1. useEffect 实现页面加载后调用一次 API</h1>
      <h2>API 数据:</h2>
      <div>{loading ? <p>Loading...</p> : <p>数据加载完成: {data}</p>}</div>
      <h2>🔑 解释</h2>
      <p>
        1. <code>useEffect</code> 在组件挂载时执行一次。
        <br />
        2. <code>useEffect</code> •
        第二个参数是空数组，代表仅在组件挂载（页面加载）时执行一次。。
        <br />
        3. 如果不传依赖数组，每次渲染都会执行（通常会导致无限请求）
        <br />
      </p>
    </div>
  );
}

export default MyComponent;
```

---

###### 🔑 解释

- useEffect(() => { ... }, [])
  - 第二个参数是空数组，代表仅在组件挂载（页面加载）时执行一次。
- 如果不传依赖数组，每次渲染都会执行（通常会导致无限请求）。

##### 💡 2. 依赖变化时更新数据

- [x] 实现依赖变化时更新数据

- 例如，当 id 变化时重新获取数据：

```tsx
import { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      setTimeout(() => {
        setData(`我被请求了 ${id} 次`);
        setLoading(false);

        if (id < 3) {
          setTimeout(() => {
            setId((prevId) => prevId + 1);
          }, 1000);
        }
      }, 2000);
    };

    fetchData();
  }, [id]);

  // 监听 id 更新
  useEffect(() => {
    console.log("ID 实际更新为:", id);
  }, [id]);

  return (
    <div>
      <h1>💡 useEffect 实现 id 变化后调用 API</h1>
      <h2>API 数据:</h2>
      <div>{loading ? <p>Loading...</p> : <p>数据加载完成: {data}</p>}</div>
    </div>
  );
}

export default MyComponent;
```

---

##### 🔑 解释

- **[id]** 放在依赖数组中，意味着：
- 页面加载时调用一次
- 之后每当 id 改变时重新调用

- [x] 理解 Vue watchEffect 与 useEffect 的差异

---

##### 💡 3. Vue 的 watchEffect 与 React useEffect 的差异

<!-- 实现表格 -->

| 功能点       | Vue watchEffect                         | React useEffect                                                        |
| ------------ | --------------------------------------- | ---------------------------------------------------------------------- |
| 自动收集依赖 | ✅ 自动追踪使用到的响应式数据，无需指定 | ❌ 需要手动传入依赖数组                                                |
| 运行时机     | 立即执行一次，之后依赖变化时执行        | 组件渲染后执行，依赖变化时执行                                         |
| 清理函数     | onCleanup(() => {...}) 或 return        | return () => {...} 返回清理函数                                        |
| 响应式系统   | 基于 Vue 响应式                         | React 无响应式，state/props 变化会重新渲染，useEffect 依赖数组追踪变化 |

---

##### 🔍 核心理解

1. Vue watchEffect

   - 类似计算属性，自动收集依赖。
   - 使用简单，但可能执行过多次（每次依赖变化就会运行）。

1. React useEffect
   - 需要明确告诉 React 你依赖哪些值。
   - 避免了不必要的执行，但需要小心遗漏依赖导致逻辑错误。

---

##### ✅ 4. 总结

- 页面加载后调用一次 API：

```js
useEffect(() => { ... }, []);
```

- 依赖变化时调用 API：

```js
useEffect(() => { ... }, [dep]);
```

- Vue watchEffect 与 useEffect
  - Vue 更自动化，依赖自动收集
  - React 更显式，需要依赖数组

---

#### 📌 useMemo

##### 💡 1. useMemo 在列表渲染中缓存计算总和

- 示例场景：有一个商品列表，需要计算总价
- [x] 在列表渲染中缓存计算总和

```tsx
import { Button, Flex } from "antd";
import { useMemo, useState } from "react";

function ShoppingCart() {
  const defaultItems = [
    { id: 1, name: "苹果", price: 3, quantity: 2 },
    { id: 2, name: "香蕉", price: 2, quantity: 5 },
    { id: 3, name: "橙子", price: 4, quantity: 3 },
  ];
  const [items, setItems] = useState(defaultItems);

  // 使用 useMemo 缓存总价计算
  const total = useMemo(() => {
    console.log("计算总价...");
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]); // 只有 items 变化时，才重新计算

  return (
    <div>
      <h2>🛒 购物车</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - 单价: {item.price} x 数量: {item.quantity}
            <Button
              style={{ marginLeft: "8px" }}
              size="small"
              color="danger"
              onClick={() =>
                setItems((prevItems) =>
                  prevItems.filter((i) => i.id !== item.id)
                )
              }>
              删除
            </Button>
          </li>
        ))}
      </ul>
      <h3>💰 总价: {total}</h3>
      <Flex gap={"8px"} style={{ marginBottom: "16px" }}>
        <Button
          onClick={() =>
            setItems((prevItems) => [
              ...prevItems,
              {
                id: prevItems.length + 1,
                name: "新商品",
                price: 5,
                quantity: 1,
              },
            ])
          }>
          添加新商品
        </Button>
        <Button
          onClick={() =>
            setItems((prevItems) =>
              prevItems.map((item) =>
                item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
              )
            )
          }>
          增加苹果数量
        </Button>
        <Button onClick={() => setItems(defaultItems)}>重置购物车</Button>
      </Flex>
    </div>
  );
}

export default ShoppingCart;
```

---

##### 🔑 解释

- useMemo(() => { ... }, [依赖])：

  - 只有依赖变化时，才会重新执行函数。
  - 否则返回上一次缓存的结果，避免不必要的计算。

---

##### 💡 2. useMemo 与 Vue computed 的使用场景区别

- [x] 理解与 Vue computed 的使用场景区别

| 对比维度                            | React useMemo                                    | Vue computed                      |
| ----------------------------------- | ------------------------------------------------ | --------------------------------- |
| 核心功能                            | 缓存计算结果，避免重复计算                       | 计算属性，依赖变化时重新计算      |
| 响应式系统                          | 无内置响应式，需要依赖数组明确指明               | 自动依赖收集，基于 Vue 响应式系统 |
| 使用场景                            | 性能优化：避免组件重新渲染时重复执行消耗大的计算 | 响应式派生数据，逻辑层常用        |
| 是否必须                            | 仅当计算开销较大时使用；否则可以直接写函数       | Vue 中 computed 是常用模式        |
| 语义差异本质是缓存值（Memoization） | 本质是声明式计算属性                             |

---

##### 🔍 示例区别

###### React useMemo：

```js
const total = useMemo(() => {
  // 计算总价
}, [items]);
```

###### ✅ 用途：

- 防止每次渲染都执行 reduce，只在 items 变化时重新计算。

---

###### Vue computed

```js
import { computed } from "vue";

const total = computed(() => {
  return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
```

---

###### ✅ 用途：

- 计算属性自动收集 items 依赖，items 变化时重新计算。
- 在模板中 { total } 使用时，表现为普通变量。

---

##### ✅ 3. 总结

| React useMemo              | Vue computed       |
| -------------------------- | ------------------ |
| 用于性能优化，避免重复计算 | 用于声明式派生数据 |
| 需要明确指定依赖           | 自动追踪响应式依赖 |
| 返回缓存值，不是响应式     | 返回响应式计算属性 |

---

##### ⚠️ 最佳实践

- **React**: 不要滥用 **useMemo**，只有当计算开销较大且 **render** 中重复调用时才使用。
- **Vue**: **computed** 是最常用模式，避免模板逻辑过多。

---

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
