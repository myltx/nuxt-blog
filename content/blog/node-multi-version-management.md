---
date: 2024-07-05 15:44:14
url: blog/npm
tags:
  - nvm
  - mise
  - nrm
  - node
title: Node多版本控制
en-title: Node多版本控制
---

- 建议使用 [nvm](https://github.com/nvm-sh/nvm) 或者 [mise](https://mise.jdx.dev/) 进行 `node` 版本管理
<!-- - [nvm 教程(window)](https://juejin.cn/post/6844904134827573256)
- [nvm 教程(mac)](https://juejin.cn/post/6844904056024989710) -->

## 区别

- 专注点：nvm 专注于 Node.js 版本管理，而 mise 是一个多语言版本管理工具，适用于需要管理多种编程语言版本的开发者。
- 功能范围：mise 的功能范围更广，支持多个编程语言的版本管理，而 nvm 仅限于 Node.js。
- 平台支持：mise 支持更多的平台，提供了跨平台的版本管理能力。

## mise

### 安装
  ```shell
  $ curl https://mise.run | sh
  $ ~/.local/bin/mise --version
  mise 2024.7.0
  ```
### 使用
```shell
# 全局
$ mise use --global node@20
$ node -v
v20.0.0

# 单项目
$ mise use node@20
$ node -v
v20.0.0

```


## nvm
### macos

- 已安装 `node`

  - 如未安装过 `node` 可以跳过次步

  ```shell
  # 查看已经安装在全局的模块
  npm ls -g --depth=0
  # 删除全局 node_modules 目录
  sudo rm -rf /usr/local/lib/node_modules
  # 删除 node
  sudo rm /usr/local/bin/node
  # 删除全局 node 模块注册的软链
  cd /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm
  ```

#### 安装

- 在下载 `nvm` 之前先检查当前用户的 home 目录下是否存在 `.bash_profile` 文件，没有的话要先创建。

- 创建完毕之后是不用对文件进行任何写入操作的，因为后面下载 `nvm` 的时候，它会自动找到我们新建的这个文件并写入相应内容。
- 如果提示 `nvm: command not found`
- 原因是每次执行 `source ~/.bash_profile` 只生效一次 (我使用的是 `zsh` )
- 所以我在 `.zshrc` 文件中添加 `source ~/.bash_profile`解决了这个问题，如还出现这个问题可以自行谷歌或者百度解决

  ```shell
  # 1.新建一个 .zshrc 文件（如果没有的话）
  touch ~/.zshrc
  # 2.在 ~/.zshrc文件最后，增加一行
  source ~/.bash_profile
  ```

### window

#### 下载

- [nvm-下载地址](https://github.com/coreybutler/nvm-windows/releases)
- [git 地址](https://github.com/nvm-sh/nvm)
- 介绍
  - `nvm-noinstall.zip`： 绿色免安装版本，但是使用之前需要配置
  - `nvm-setup.zip`：这是一个安装包，下载之后点击安装，无需配置就可以使用，方便
  - `Source code(zip)`：zip 压缩的源码
  - `Sourc code(tar.gz)`：tar.gz 的源码，一般用于\*nix 系统

#### 安装

- 这里我们使用 `nvm-setup.zip` 进行安装

  1.  下载 `nvm-setup.zip`，解压后运行 `nvm-setup.exe`
  2.  选择安装目录，建议不要安装在系统盘
  3.  点击 `next`，选择 `next`，直到安装完成
  4.  打开 `cmd`，输入 `nvm`，如果出现 `nvm` 的命令提示，说明安装成功
  5.  安装 `node`，输入 `nvm install node`，等待安装完成
  6.  使用 `nvm use node`，切换到 `node` 版本
  7.  使用 `nvm list`，查看已经安装的 `node` 版本

#### 常用命令

```shell
nvm install node # 安装最新版本node
nvm install 14.17.0 # 安装指定版本node
nvm use 14.17.0 # 使用指定版本node
nvm list # 查看已经安装的node版本
nvm uninstall 14.17.0 # 卸载指定版本node
```

## nrm
- 可以帮助您轻松快速地在不同的 npm 注册表之间切换(切换npm下载源)
[git 地址](https://github.com/Pana/nrm)

### 安装

```shell
npm install -g nrm
```

### 常用命令

```shell
#查看源列表
nrm ls
#添加新的npm源
nrm add 别名 源地址
#切换源
nrm use 源名称
#npm源测速（全部）
nrm test
#npm源测速（指定测速）
nrm test 源名称
#删除源
nrm del 源名称
```
