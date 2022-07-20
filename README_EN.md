# Keil Assistant

[![](https://vsmarketplacebadge.apphb.com/version/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)      [![](https://vsmarketplacebadge.apphb.com/installs/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)     [![](https://vsmarketplacebadge.apphb.com/downloads/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)     [![](https://vsmarketplacebadge.apphb.com/rating/jiyun-tech.keil-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=jiyun-tech.keil-vscode)

## Forkd from [keil-assistant](https://github.com/github0null/keil-assistant)

## [English](./README_EN.md)

## Summary 📑

Keil assistive tool on VScode.

It provides syntax highlighting, code snippets for Keil projects, and supports compiling and downloading Keil projects.

**Keil uVison 5 and above is supported only**  

**Windows platform only**

***

## Features 🎉

- Load the Keil C51/ARM project
- Automatically monitor keil project files for changes and keep project views up to date
- Compile, recompile, and burn Keil projects by calling the Keil command-line interface

***

## Usage 📖

### Preparatory work

1. Install the C/C++ plug-in
>
2. Go to the Keil-V plug-in Settings and set the absolute path of the Keil executable uv4.exe

***

### Start 🏃‍♀️

1. Create a project on Keil, add files, header path, etc
> 
2. Use Vscode to directly open the directory where keil project file (.uvproj) is located, and the keil project will be automatically loaded by the plug-in;

### Common operations

- **Compile and burn**：Three buttons are provided, one for compile, one for download, and one for recompile