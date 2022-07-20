# Keil Assistant

[![](https://vsmarketplacebadge.apphb.com/version/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)      [![](https://vsmarketplacebadge.apphb.com/installs/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)     [![](https://vsmarketplacebadge.apphb.com/downloads/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)     [![](https://vsmarketplacebadge.apphb.com/rating/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)

## Forkd from [keil-assistant](https://github.com/github0null/keil-assistant)

## [English](./README_EN.md)

## 简述 📑

vscode 上的 Keil 辅助工具，与 c/c++ 插件配合使用.

能够为 Keil 项目提供 语法高亮、代码片段 的功能，并支持对 keil 项目进行 编译、下载。

**仅支持 Keil uVison 5 及以上版本**  

**仅支持 Windows 平台**

***

## 功能特性🎉

- 自动识别加载 Keil C51/ARM 项目
- 自动监视 keil 项目文件的变化，及时更新项目视图
- 通过调用 Keil 命令行接口实现 编译，重新编译，烧录 keil 项目

***

## 用法 📖

### 准备工作

1. 安装 C/C++ 插件
>
2. 进入 Keil-V 插件设置，设置好 keil 可执行文件 UV4.exe 的绝对路径

***

### 开始使用 🏃‍♀️

1. 在 Keil 上创建好项目，添加好文件，头文件路径等，并测试编译通过
> 
2. 使用 `vscode` 打开项目路径，插件会自动加载 keil 项目；

### 常用操作

- **编译，烧录**：提供了 4 个状态栏按钮，分别代表 编译，重新编译，下载，切换构建目标
