---
date: 2024-07-17 16:09:58
url: 
tags: 
  - uniapp
  - 小程序
title: h5转换为uniapp调研
en-title: h5转换为uniapp调研
---

### 1. 需要修改内容

*   ui库替换
    *   现在项目使用的是vant
*   路由修改
    *   现在项目使用的是vue的route
*   请求修改
    *   现在使用的是axios
*   内部逻辑修改

### 2. 使用vite创建的uniapp项目框架

*   [uni-vue3-vite-ts-pinia](https://github.com/ttk-cli/uni-vue3-vite-ts-pinia)
*   [vite-uniapp-template](https://github.com/viarotel-org/vite-uniapp-template)

### 3. 可用ui库

1.  vant
    *   优点:性能高，组件体积小,无外部依赖，有ts定义，组件多
    *   缺点：只支持微信小程序和H5
2.  官方库 uni-ui
    *   优点: 官方提供长期维护，性能高
    *   缺点: 市场反馈bug太多，体验不好
3.  FirstUi
    *   优点: 支持全跨端平台,nvue组件，样式多，无依赖，界面好看，动画流畅。
    *   缺点:付费组件,付费用户不太多，可能有组件未知bug
4.  antdmini
    *   优点：
    *   缺点：只支持支付宝小程序，微信小程序还在beta中
5.  wot-design-uni
    *   优点:基于vue3+ts，动画流畅
    *   缺点: 部分组件样式不好看，组件数量少，只支持微信小程序和App端
6.  uview-plus
    *   优点: 支持vue3，全面兼容所有端，支持nvue，组件数量多，大量用户使用组件bug较少
    *   缺点: 组件样式较老气
7.  uv-ui
    *   与uview-plus类似也是基于uview2.x 版本改造而来

#### ui库替换：

计划将原本的vant替换为[uv-ui](https://www.uvui.cn/guide/demo.html)

### 4.存在疑惑点以及问题

#### 分包问题：

##### 解决思路：

1.  在Vite创建的UniApp项目中，您可以在根目录下创建一个名为uni.subpackage.json的文件，用于配置小程序的分包逻辑。在该文件中，您可以定义子包的根目录、页面列表等信息。例如：

```json
{
  "subPackages": [
    {
      "root": "subpackage1",
      "pages": [
        "pages/subpackage1/subpage1",
        "pages/subpackage1/subpage2"
      ]
    },
    {
      "root": "subpackage2",
      "pages": [
        "pages/subpackage2/subpage1",
        "pages/subpackage2/subpage2"
      ]
    }
  ]
}
```

1.  将相关页面和组件文件移动到对应的子包目录中。例如，将页面pages/subpackage1/subpage1的文件移动到subpackage1目录下。

2.  在Vite的配置文件中（vite.config.ts），使用vite-plugin-uniapp插件来处理uni.subpackage.json文件。在插件的配置选项中，设置subPackages选项为true，以启用对分包配置文件的处理。例如：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
import { createUniPlugin } from 'vite-plugin-uniapp'

export default defineConfig({
  plugins: [
    vue(),
    createVuePlugin(),
    createUniPlugin({
      subPackages: true
    })
  ]
})

```

1.  在小程序开发工具中进行编译和预览。根据您的分包配置，小程序开发工具将在构建过程中生成对应的分包文件和配置。

==tips:请注意，使用Vite进行UniApp项目开发时，需要使用vite-plugin-uniapp插件来提供对UniApp的支持。在配置插件时，确保已正确设置subPackages选项为true，以启用对分包配置文件的处理。
在实际开发过程中，建议您仔细阅读vite-plugin-uniapp插件的文档，并参考UniApp官方文档中关于小程序分包的详细说明，以确保分包逻辑的正确性和性能。==

### 5.设想方案：

1.  是否可以使用现成的使用vite + ts + vue3技术栈搭建的框架
    *   便于迁移

2.  使用uniapp工具创建项目

遇到问题

```vue
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">
微信一键登录
</button>

 <button open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber">
      微信一键登录
    </button>
```

<!-- 在vue中要使用 @ 替换bind 不然会报错 ：does not have a method "getPhoneNumber" to handle event "getphonenumber".

uni.authorize 权限 -->

