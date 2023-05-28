# Brew

## 常用命令

```shell
# 查看版本
brew -v
# 查看命令帮助
brew -help
# 查看已安装程序的更新
brew outdated
# 更新单个软件
brew upgrade xxx
# 更新所有软件
brew upgrade
# 安装软件
brew install xxx
# 卸载软件
brew uninstall xxx
# 清理所有包旧版本(安装包缓存)
brew cleanup
# 显示要删除的内容，但不删除
brew cleanup -n
# 清理单个软件旧版本
brew cleanup xxx
# 查看包信息
brew info xxx
# 查看安装列表
brew list
# 查询可用包
brew search xxx
# 显示包依赖
brew deps xxx
```
