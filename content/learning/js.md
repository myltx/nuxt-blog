---
date: 2023-08-14 12:15:49
url: 
tags:
  - interview
  - js
title: 面试题-JS
en-title: 面试题-JS
---
# JS
## 1.箭头函数和 function 的区别.

> 箭头函数根本就没有绑定自己的 `this`，在箭头函数中调用 `this` 时，仅仅是简单的沿着作 用域链向上寻找，找到最近的一个 `this` 拿来使用

## 2.什么是防抖和节流？有什么区别？如何实现？

> 函数防抖(`debounce`):在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。（函数防抖就是法师发技能的时候要读条，技能读条没完再按技能就会重新读条。）

```javascript
function debounce(fun, delay) {
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(fun.id);
    fun.id = setTimeout(function () {
      fun.call(that, _args);
    }, delay);
  };
}
```

> 函数节流(`throttle`)：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。（函数节流就是 `fps` 游戏的射速，就算一直按着鼠标射击，也只会在规定射速内射出子弹。）

```javascript
function throttle(fun, delay) {
  let last, deferTimer;
  return function (args) {
    let that = this;
    let _args = arguments;
    let now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fun.apply(that, _args);
      }, delay);
    } else {
      last = now;
      fun.apply(that, _args);
    }
  };
}
```

> - 使用场景：
>
> > - `debounce`
>
> > > - `search` 搜索联想，用户在不断输入值时，用防抖来节约请求资源。
> > >
> > > - `window` 触发 `resize` 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
> >
> > - `throttle`
>
> > > - 鼠标不断点击触发，`mousedown`(单位时间内只触发一次)
> > > - 监听滚动事件，比如是否滑到底部自动加载更多，用 `throttle` 来判断

## 3.['1', '2', '3'].map(parseInt) what & why ?

> 第一眼看到这个题目的时候，脑海跳出的答案是 `[1, 2, 3]`，但是真正的答案是`[1, NaN, NaN]`。 首先让我们回顾一下，`map` 函数的第一个参数 `callback`。这个 `callback` 一共可以 接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该 元素的索引。 `arr.map(callback: (value: T, index: number, array: T[]) => U, thisArg?: any)` 而 `parseInt` 则是用来解析字符串的，使字符串成为指定基数的整数。接收两个 参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。 `parseInt(string, radix)` 了解这两个函数后，我们可以模拟一下运行情况 `parseInt('1', 0) //radix` 为 `0` 时，且 `string` 参数不以 `0x` 和 `0` 开头时， 按照 `10` 为基数处理。这个时候返回 `1parseInt('2', 1)` //基数为 1（1 进制）表示的数中，最大值小于 `2`，所以无法解析，返回 `NaNparseInt('3', 2) //基数 为 2（2 进制）`表示的数中，最大值小于 3，所以无法解析，返回 `NaN`

## 4.[Object.is()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 与原来的比较操作符 “===”、“==” 的区别？

> - 两等号判等，会在比较时进行类型转换；
> - 三等号判等（判断严格），比较时不进行隐式类型转换，（类型不同则会返回`false`）；
> - `Object.is` 在三等号判等的基础上特别处理了 `NaN `、`-0 `和 `+0 `，保证 `-0` 和 `+0` 不再相同，但
>   `Object.is(NaN, NaN)` 会返回 `true`;
> - `Object.is` 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。

## 5.JS 的 [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符做了哪些事情

> `new` 操作符新建了一个空对象，这个对象原型指向构造函数的 `prototype`，执行构造函数 后返回这个对象。

## 6. 说一下什么是 virtual dom

> 用 `JavaScript` 对象结构表示 `DOM `树的结构；然后用这个树构建一个真正的 `DOM` 树， 插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树 进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的 `DOM` 树上，视图就 更新了。`Virtual DOM` 本质上就是在 `JS` 和 `DOM` 之间做了一个缓存。

## 7. var、let、const 区别?

>
