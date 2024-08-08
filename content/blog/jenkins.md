---
date: 2024-08-08 09:49:06
url: 
tags: 
  - jenkins
title: Jenkins 配置
en-title: Jenkins 配置
---


## node 版本控制

### 下载插件：

![image](/image/jenkins/1.png)
![image](/image/jenkins/2.png)
![image](/image/jenkins/3.png)

### 到系统管理里面的全局工具配置

![image](/image/jenkins/4.png)

### 添加相应的node版本

![image](/image/jenkins/5.png)

### 准备工作完成，配置项目（jenkins叫视图），下面主要的配置项的配置：

![image](/image/jenkins/6.png)
![image](/image/jenkins/7.png)
![image](/image/jenkins/8.png)
![image](/image/jenkins/9.png)
![image](/image/jenkins/10.png)

##  整体的配置流程

- git/svn等代码管理工具拉去代码
- 确定拉去后放置的目录
- 编译环境（node 版本）
- 项目执行命令
- 使用账号密码或者ssh登录相应的服务器，复制打包成功的代码到目标服务器，然后更新到配置服务的目录