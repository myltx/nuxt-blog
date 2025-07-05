---
date: 2025-07-04 14:06:18
url:
tags:
  - mise
  - node
title: mise 使用
en-title: mise use
---

# Mise 使用说明

> **作者**: 马云龙  
> **更新时间**: 2025-07-04

## 什么是 Mise?

[Mise](https://github.com/jdx/mise) 是一个现代化的运行时版本管理器，由前 `asdf` 贡献者 @jdxcode 开发。它可以用来管理 Node.js、Python、Java、Bun、Go、Rust、Deno 等多种语言和工具的版本，目标是成为更快、更轻量、更易用的开发环境管理工具。

与传统的版本管理器（如 `nvm`, `pyenv`, `asdf`）相比，Mise 具有以下特点：

- 极快的执行速度
- 简洁直观的命令行体验
- 兼容 `.tool-versions`（asdf 的配置文件）
- 跨平台支持 macOS、Linux 和 Windows
- 不依赖 shell 插件，安装即用

---

## 安装

### 使用 Homebrew (macOS / Linux)

```bash
brew install jdx/mise/mise
```
