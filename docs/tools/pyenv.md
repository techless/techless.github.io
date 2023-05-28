# Pyenv

## 安装

```shell
brew install pyenv
brew install pyenv-virtualenv
```



## 命令

```shell
# 查看 pyenv 版本
pyenv --version

# 查看当前 python 版本
pyenv version

# 查看当前可用 python 版本
pyenv versions

# 查看所有可安装的版本
# mbp m2测试安装 `python 3.10.4` 可用
pyenv install --list

# 安装指定版本
pyenv install 3.6.5

# 安装新版本后执行 rehash
pyenv rehash

# 删除指定版本
pyenv uninstall 3.5.2

# 指定全局版本
pyenv global 3.6.5

# 指定多个全局版本, 3版本优先
pyenv global 3.6.5 2.7.14
```
