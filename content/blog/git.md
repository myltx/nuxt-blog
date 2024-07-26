---
date: 2024-07-09 14:07:52
url:
tags:
  - git
title: Git 常用命令笔记
en-title: Git 常用命令笔记
---

## Git 常用命令笔记

### 常用命令

```shell
# 初始化一个 Git 仓库
git init

# 克隆一个远程仓库
git clone [url]

# 将文件添加到暂存区
git add [file]

# 提交暂存区的文件
git commit -m [message]

# 查看当前 Git 状态
git status

# 查看提交历史
git log

# 创建一个新的分支
git branch [branch-name]
```

## 合并分支


```shell
# 将指定分支合并到当前分支
git merge [branch-name]

# 将指定分支的提交应用到当前分支
git rebase [branch-name]

# 从远程仓库拉取代码并合并到当前分支
git pull [remote] [branch]

# 将当前分支的提交推送到远程仓库
git push [remote] [branch]

```

### 合并某个分支上的多个commit
- 假设你有以下情况：
  - feature-branch 分支上有三个提交：A, B, C
  - 你想将这些提交合并到 main 分支上
- 最好是可以 使用 `rebase` 先合并 然后统一合并
```shell
# 确保本地的 feature-branch 和 main 分支都是最新的。
git checkout feature-branch
git pull origin feature-branch

git checkout main
git pull origin main

# 切换到 feature-branch 并进行交互式 rebase。
git checkout feature-branch
git rebase -i HEAD~3

# 切换回 main 分支。
git checkout main

# 使用 cherry-pick 将合并后的提交应用到 main 分支
git cherry-pick <new-commit-hash>

# 推送更改到远程仓库。
git push origin main


```
- 或者直接使用 cherry-pick 合并

```shell
# 切换到 master 分支
git checkout master
# 合并指定 commit 到当前分支  不包含 commit-hash1
git cherry-pick [commit-hash1]..[commit-hash2]

```

## 修改仓库地址
```shell
# 修改远程仓库地址
git remote set-url origin [new-url]

# 查看远程仓库地址
git remote -v
```