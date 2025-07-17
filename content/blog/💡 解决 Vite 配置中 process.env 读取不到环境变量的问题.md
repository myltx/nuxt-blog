---
date: 2025-07-17 16:08:28
url: url
tags:
  - Vite
title: 💡 解决 Vite 配置中 process.env 读取不到环境变量的问题
en-title: Solve the problem that process.env cannot read environment variables in Vite configuration
---

## ✨ 前言

在使用 Vite 进行前端开发时，我们经常需要读取 .env 文件中的环境变量配置，例如 API 地址、端口、静态资源路径等。最近我在项目中遇到一个问题：

- ✅ 配置 A 可以正常使用
- ❌ 配置 B 无法正确读取环境变量
- 下面记录一下排查过程与原因分析，帮助自己加深理解，也方便后来者。

---

### ✅ 可正常使用的配置

```js
import { createServer, defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const { VITE_HTML_DIR, VITE_API_URL, VITE_PORT } = loadEnv(
    mode,
    process.cwd()
  );
  console.log(VITE_HTML_DIR, VITE_API_URL, VITE_PORT);
  return {
    root: VITE_HTML_DIR || "html",
    server: {
      proxy: {
        "^/ajax": {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace("/ajax", ""),
        },
      },
      port: VITE_PORT || 9090,
      host: "0.0.0.0",
      before: (app) => {
        app.use("/", createServer({}).middlewares);
      },
    },
  };
});
```

##### 🔍 特点

- 使用了 defineConfig(({ mode }) => {...}) 函数式配置。
- 使用 loadEnv 加载 .env 文件并获取变量。

### ❌ 无法使用的配置

```js
import { createServer, defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  root: process.env.VITE_HTML_DIR || "html",
  server: {
    proxy: {
      "^/ajax": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace("/ajax", ""),
      },
    },
    port: process.env.VITE_PORT || 9090,
    host: "0.0.0.0",
    before: (app) => {
      app.use("/", createServer({}).middlewares);
    },
  },
});
```

##### 🔍 特点

- 使用对象式配置 defineConfig({ ... })。
- 使用 dotenv.config() 加载 .env 文件，直接读取 process.env.VITE_API_URL。

---

### 🧐 问题表现

在第二份配置中，process.env.VITE_API_URL 读取到的值为 undefined，导致 Vite proxy 无法代理到目标 API，接口全部 404。

---

### 💡 问题原因

##### 1. dotenv.config() 和 loadEnv 的区别

- dotenv.config() 仅加载根目录下的 .env 文件，不会加载 .env.development、.env.production 之类的文件。
- Vite 提供的 loadEnv(mode, root) 函数，会根据 mode（如 development / production）加载：
  - .env
  - .env.local
  - .env.[mode]
  - .env.[mode].local

并返回合并后的对象。

---

##### 2. loadEnv 不会自动注入到 process.env

调用 loadEnv 返回的环境变量需要手动使用，例如：

```js
const env = loadEnv(mode, process.cwd());
console.log(env.VITE_API_URL);
```

如果希望它写入 process.env，需要：

```js
Object.assign(process.env, env);
```

---

##### 3. 函数式配置 vs 对象式配置

- 函数式配置可以拿到 mode 参数，方便调用 loadEnv。

- 对象式配置没有 mode 参数，除非你通过 process.env.NODE_ENV 判断当前模式，但这在 Vite 启动流程中存在时序问题，容易拿不到正确 mode。

---

### 🔧 解决方案

##### ✅ 方案 1. 使用函数式配置

最推荐，官方最佳实践。

```js
import { createServer, defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    root: env.VITE_HTML_DIR || "html",
    server: {
      proxy: {
        "^/ajax": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace("/ajax", ""),
        },
      },
      port: env.VITE_PORT || 9090,
      host: "0.0.0.0",
      before: (app) => {
        app.use("/", createServer({}).middlewares);
      },
    },
  };
});
```

##### ✅ 方案 2. 对象式配置时手动合并 env

如果必须使用对象式配置，可在文件顶部调用 loadEnv 并 merge 到 process.env：

```js
import { createServer, defineConfig, loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "development", process.cwd());
Object.assign(process.env, env);

export default defineConfig({
  root: process.env.VITE_HTML_DIR || "html",
  server: {
    proxy: {
      "^/ajax": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace("/ajax", ""),
      },
    },
    port: process.env.VITE_PORT || 9090,
    host: "0.0.0.0",
    before: (app) => {
      app.use("/", createServer({}).middlewares);
    },
  },
});
```

##### 🎯 最佳实践

- ✔️ 使用 函数式配置 并调用 loadEnv
- ✔️ 避免混用 dotenv.config() 与 loadEnv
- ✔️ 在需要多环境配置时，统一封装 getEnv() 工具函数

### ✏️ 总结

这次踩坑让我深入理解了：

- Vite 环境变量的加载机制
- loadEnv 与 dotenv 的本质区别
- 配置函数式与对象式的应用场景

希望对你有所帮助。如果你在项目配置或多环境管理上有其他问题，欢迎留言一起讨论。
