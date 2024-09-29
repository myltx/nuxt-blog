---
date: 2024-09-12 10:37:54
url: 
tags: 
  - Nuxt
  - 项目规范
title: Nuxt中项目规范配置
en-title: Nuxt中项目规范配置
---

## 配置 Eslint


### 1. 执行安装命令
Nuxt3 中是使用 [@nuxt/eslint-config](https://eslint.nuxt.com/) 进行代码检查和格式化

```typescript
pnpm add -D @nuxt/eslint eslint typescript

```
### 2. 配置 .eslintrc.cjs 文件
具体配置请参考[Eslint 配置规则](https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files)：
还使用了 [Nuxt Eslint](https://eslint.nuxt.com/) 的配置，具体配置请参考 [Nuxt Eslint Config](https://eslint.nuxt.com/packages/config) 的配置


```typescript
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// @ts-ignore
export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
  rules: {
    'camelcase': 2,
    'indent': [2, 2],
    'semi': [2, 'never'],
    'quotes': ['error', 'single'],
    'no-debugger': 2,
    'no-empty': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    // 'comma-dangle': [2, {
    //   // arrays: 'never',
    //   // objects: 'never',
    //   // imports: 'never',
    //   // exports: 'never',
    //   // functions: 'never',
    // }],
    'spaced-comment': ['error', 'always'],
    // 颜色指定大写
    'no-undef': 2,
    // 禁止空块
    'no-empty-function': 2,
    // 颜色6位长度
    'no-mixed-spaces-and-tabs': 2,
    // 兼容自定义标签名
    'vue/valid-v-for': 0,
    // 忽略伪类选择器 ::v-deep
    'vue/custom-event-name-casing': 0,
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'vue/no-deprecated-slot-attribute': 0,
    // 不验证@未知的名字，为了兼容scss的函数
    'vue/no-deprecated-slot-scope-attribute': 0,
    // 禁止空注释
    'no-multi-spaces': 2,
    // 禁止简写属性的冗余值
    'no-unused-vars': 2,
    // 禁止值的浏览器引擎前缀
    'no-unused-expressions': 2,
    // property-no-vendor-prefix
    'property-no-vendor-prefix': 2,
    // 禁止小于 1 的小数有一个前导零
    'no-zero-prefix': 2,
    // 禁止空第一行
    'no-empty-first-line': 2,
    // 属性的排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
  },
})

```
### 3. 建议 
建议 [VS Code](https://code.visualstudio.com/) 与 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 扩展一起使用。如果愿意，你可以在保存代码时启用自动修复和格式化：
  
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "never",
    "source.fixAll.eslint": "explicit"
  },
  "eslint.experimental.useFlatConfig": true
}
```
![image](/image/nuxt/eslint.png)

## Stylelint
### 1. 安装 Stylelint 及其相关插件 
使用 [Nuxt stylelint](https://nuxt.com/modules/stylelint) 模块。
```bash
  pnpm add -D stylelint
```
### 2.配置
在 nuxt.config.ts 中添加 @nuxtjs/stylelint-module 到 modules 部分。
```typescript
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    [
      "@nuxtjs/stylelint-module",
      {
        /* module options */
      },
    ],
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
```  
### 3. 具体配置
放在module options中
```json
{
  // 颜色指定大写
  "no-undef": 2,
  // 禁止空块
  "no-empty-function": 2,
  // 颜色6位长度
  "no-mixed-spaces-and-tabs": 2,
  // 兼容自定义标签名
  "vue/valid-v-for": 0,
  // 忽略伪类选择器 ::v-deep
  "vue/custom-event-name-casing": 0,
  // 禁止低优先级的选择器出现在高优先级的选择器之后。
  "vue/no-deprecated-slot-attribute": 0,
  // 不验证@未知的名字，为了兼容scss的函数
  "vue/no-deprecated-slot-scope-attribute": 0,
  // 禁止空注释
  "no-multi-spaces": 2,
  // 禁止简写属性的冗余值
  "no-unused-vars": 2,
  // 禁止值的浏览器引擎前缀
  "no-unused-expressions": 2,
  // property-no-vendor-prefix
  "property-no-vendor-prefix": 2,
  // 禁止小于 1 的小数有一个前导零
  "no-zero-prefix": 2,
  // 禁止空第一行
  "no-empty-first-line": 2,
  // 属性的排序
  "order/properties-order": [
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "z-index",
    "display",
    "justify-content",
    "align-items",
    "float",
    "clear",
    "overflow",
    "overflow-x",
    "overflow-y",
    "margin",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "border",
    "border-style",
    "border-width",
    "border-color",
    "border-top",
    "border-top-style",
    "border-top-width",
    "border-top-color",
    "border-right",
    "border-right-style",
    "border-right-width",
    "border-right-color",
    "border-bottom",
    "border-bottom-style",
    "border-bottom-width",
    "border-bottom-color",
    "border-left",
    "border-left-style",
    "border-left-width",
    "border-left-color",
    "border-radius",
    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",
    "font-size",
    "font-family",
    "font-weight",
    "text-align",
    "text-justify",
    "text-indent",
    "text-overflow",
    "text-decoration",
    "white-space",
    "color",
    "background",
    "background-position",
    "background-repeat",
    "background-size",
    "background-color",
    "background-clip",
    "opacity",
    "filter",
    "list-style",
    "outline",
    "visibility",
    "box-shadow",
    "text-shadow",
    "resize",
    "transition"
  ]
}
```
## Husky
### 1. 安装 Husky
```bash
pnpm add husky -D
```
### 2. 初始化脚本
```bash
pnpm exec husky init
```
 完成之后会在根目录生成一个 .husky 文件夹

## Lint-staged

### 1. 安装 Lint-staged
```bash
pnpm add lint-staged -D
```
### 2. 添加命令
向 package.json 的 scripts 中添加命令
```json
{
  "scripts": {
    // ...
    "pre-commit": "lint-staged"
  }
}
```
### 3.配置文件
可以根据项目需要在 package.json 中添加配置，或者根目录新建 .lintstagedrc 配置文件
```json
{
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```
### 4.修改脚本命令
将 .husky/pre-commit 脚本的内容改为
```bash
npm run pre-commit
```
配置完成后，这样当我们每次执行 git 命令的时候就会去检查暂存区的文件，有语法错误就会提示。

## Commitlint
### 1. 安装 Commitlint
```bash
pnpm add @commitlint/config-conventional @commitlint/cli -D
```
### 2. 配置文件
根目录添加 [commitlint.config.cjs]{style="color: #ed6557"} 配置文件
```typescript
module.exports = {
 extends: ['@commitlint/config-conventional'],
 rules: {
   'type-enum': [
     // type枚举
     2,
     'always',
     [
       'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
       'feat', // 新功能
       'fix', // 修补bug
       'docs', // 文档修改
       'style', // 代码格式修改, 注意不是 css 修改
       'refactor', // 重构
       'perf', // 优化相关，比如提升性能、体验
       'test', // 测试用例修改
       'revert', // 代码回滚
       'ci', // 持续集成修改
       'config', // 配置修改
       'chore' // 其他改动
     ]
   ],
   'type-empty': [2, 'never'], // never: type不能为空; always: type必须为空
   'type-case': [0, 'always', 'lower-case'], // type必须小写，upper-case大写，camel-case小驼峰，kebab-case短横线，pascal-case大驼峰，等等
   'scope-empty': [0],
   'scope-case': [0],
   'subject-empty': [2, 'never'], // subject不能为空
   'subject-case': [0],
   'subject-full-stop': [0, 'never', '.'], // subject以.为结束标记
   'header-max-length': [2, 'always', 72], // header最长72
   'body-leading-blank': [0], // body换行
   'footer-leading-blank': [0, 'always'] // footer以空行开头
 }
}
```
### 3.添加命令
向 package.json 的 scripts 中添加命令
```json
{
  "scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
  }
}
```
### 4.commit-msg 配置
新增 .husky/commit-msg 配置文件

```bash
npx husky add .husky/commit-msg
```
:::card
---
content: 如果：add command is deprecated，则表明已经弃用add
type: warning
---
:::
这个时候可以选择手动配置
由于 add 命令被弃用，你可以手动创建钩子文件并添加内容。首先，创建 pre-commit 文件
```bash
mkdir -p .husky
touch .husky/pre-commit
chmod +x .husky/pre-commit
```
然后编辑 .husky/pre-commit 文件并添加以下内容
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx --no-install lint-staged
```
在我们每次提交 commit 的时候，就会帮我们检查提交风格是否符合规范。