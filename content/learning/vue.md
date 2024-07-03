---
date: 2023-08-14 12:15:49
url:
tags:
  - interview
  - js
  - vue
title: 面试题-VUE
en-title: 面试题-VUE
---

# Vue

## 1.为什么要在列表组件中写 key，其作用是什么？

`key` 是给每一个 `vnode` 的唯一 `id`,可以依靠 `key`,更准确,更快的拿到 `oldVnode` 中对 应的 `vnode` 节点

## 2.v-if 和 v-show 使用场景

- `v-if` 是惰性的条件渲染，直到渲染条件为真时才渲染内容。
- `v-show` 会先把内容渲染出来，基于 `css` 的 `display` 属性进行切换

## 3.computed 和 watch 区分使用场景。

- `Computed` 是计算属性，依赖其他属性值，且有缓存，只有当他依赖的属性值发生变化时，下一次获取 `computed` 值时才会重新计算。适用于数据计算。
- `Watch` 是数据的监听回调，当数据变化时会执行回调。适用于数据变化时执行异步操作或开销较大的操作。

## 4.data 为什么是一个方法而不是对象？

因为组件可能被复用为多个实例，如果是对象，那么所有实例会共享一份 data，显然是不行的。而 funtion 会开辟一份独立的内存空间，实例之间不会互相影响。

## 5.Vuex 持久化？

- 存放在 `localStorage` 或者 `sessionStorage` 里面，进入页面时判断是否丢失，丢失再去 `localStorage` 或者 `sessionStorage` 里面取；
- 在 `app.vue` 根组件的 `created` 里面判断是否丢失，在进行上面的操作；

## 6.说一下什么是 Vue 中的数据双向绑定，以及原理.

- `vue`是一个 mvvm 框架，即数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化。这也算是 vue 的精髓之处了。**值得注意的是，**我们所说的数据双向绑定，一定是对于 UI 控件来说的，非 UI 控件不会涉及到数据双向绑定。
- 原理
  - `vue` 实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过 `Object.defineProperty()` 来劫持各个属性的 `setter`，`getter`，在数据变动时发布消息给订阅者，触发相应监听回调

- 下边例子是不会触发视图更新的

```typescript
<template>
  {{ obj.a }}
</template>
  export default {
    data() {
        return  {
              obj:{}
        }
          },
          mounted() {
            this.obj.a = 5;
          }
        }
```

- 可以使用 [Vue.set()](https://cn.vuejs.org/v2/api/#Vue-set) 解决这个问题

## 8. Vue 中[$route](https://v3.router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1)和[$router](https://v3.router.vuejs.org/zh/api/#router-%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)的区别？

- `$route` 是“路由信息对象”，包括 `path`，`params`，`hash`，`query`，`fullPath`，`matched`，`name` 等
  路由信息参数。
- `$router`是“路由实例”对象包括了路由的跳转方法，钩子函数等。

## 9. Vue 中 [mixins](https://cn.vuejs.org/v2/api/#mixins)是什么，有什么应用场景？

- `Mixin`是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问 `mixin` 类的方法而不必成为其子类
- `Mixin`类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂

使用场景：在日常的开发中，我们经常会遇到在不同的组件中经常会需要用到一些相同或者相似的代码，这些代码的功能相对独立
这时，可以通过 `Vue` 的 `mixin` 功能将相同或者相似的代码提出来

示例：

定义一个 `modal` 弹窗组件，内部通过 isShowing 来控制显示

```javascript
const Modal = {
  template: "#modal",
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
};
```

定义一个 `tooltip` 提示框，内部通过 isShowing 来控制显示

```javascript
const Tooltip = {
  template: "#tooltip",
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
};
```

通过观察上面两个组件，发现两者的逻辑是相同，代码控制显示也是相同的，这时候 `mixin` 就派上用场了

首先抽出共同代码，编写一个 `mixin`

```javascript
const toggle = {
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
};
```

两个组件在使用上，只需要引入 mixin

```javascript
const Modal = {
  template: "#modal",
  mixins: [toggle],
};

const Tooltip = {
  template: "#tooltip",
  mixins: [toggle],
};
```

更详细内容可以[查看](https://vue3js.cn/interview/vue/mixin.html#%E4%B8%80%E3%80%81mixin%E6%98%AF%E4%BB%80%E4%B9%88)

## 10.Vue 的 [slot](https://cn.vuejs.org/v2/guide/components-slots.htmlhttps://cn.vuejs.org/v2/api/#slot) 是什么? 什么时间用?

- 定义：`Slot` 通俗的理解就是“占坑”，在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中 `slot` 位置）并且可以作为承载分发内容的出口

- 插槽 `prop` 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 `prop` 渲染出不同的内容。 这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。

具体内容信息可以[查看](https://cn.vuejs.org/v2/guide/components-slots.html)

## 11.Vue 的优点是什么？

- 低耦合。视图`（View）`可以独立于 `Model` 变化和修改，一个 `ViewModel` 可以绑定到不同的 `View` 上，当 `View` 变化的时候 `Model` 可以不变，当 `Model` 变化的时候 View 也可以不变
- 可重用性。你可以把一些视图逻辑放在一个 `ViewModel` 里面，让很多 `view` 重用这段视图逻辑
- 可测试。界面素来是比较难于测试的，而现在测试可以针对 `ViewModel` 来写

## 12.[ref](https://cn.vuejs.org/v2/api/#ref) 的作用.

示例：

```javascript
<template>
  <div class="wrap" ref="wrap"></div>
</template>

<script >
  export default {
    data() {
      name:'wrap'
    },
    methods: {
      getName() {
        console.log(this.name)
      }
    }
  }
</script>

```

- 获取 `dom` 元素 `this.$refs.wrap`
- 获取子组件中的 `data this.$refs.wrap.name`
- 调用子组件中的方法 `this.$refs.wrap.getName() `
