---
date: 2024-07-10 09:24:47
url: 
tags: 
  - interview
title: 刷题记录
en-title: 刷题记录
---

## 1.请实现函数 reverseWord ，对字符串中的单词进行反转，并满足以下条件：
	- 单词排列反序
	- 单词间以空格进行分割，若有多个空格只保留一个
	- 去除字符串所有首尾的所有空
	- 示例：
	- console.log(reverseWord('  hello    the world! ')); 
	- 输出："world! the hello"

### 实现

```typeScript
function reverseWord(str: string):string {
  return str.trim().split(/\s+/).reverse().join(' ');
}

```



