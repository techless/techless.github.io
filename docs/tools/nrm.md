---
outline: deep
---

# NRM

[nrm](https://github.com/Pana/nrm) 是 npm pnpm 的镜像源管理工具，可以快速切换镜像源

## 安装

全局安装

```shell
npm install -g nrm 
```

## 命令

```shell
# 列出当前源
nrm ls
# 查看当前源
nrm current
# 切换源
nrm use <registry>
# 添加源
nrm add <registry> <url> [home]
# 删除源
nrm del <registry>
# 测试源速度，不加 [registry] 测试所有源
nrm test [registry]
# 查看 nrm 版本
nrm -V
# 查看帮助
nrm -h
```
