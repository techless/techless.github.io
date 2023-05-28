---
outline: deep
---

# Git

## 安装 Git

> <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>

```shell
# Windows
winget install --id Git.Git -e --source winget
# CentOS
yum install git
# Ubuntu / Debian
apt-get install git
# Mac
brew install git
```

## Git 操作合集

### 初次配置

- /etc/gitconfig 文件
- ~/.gitconfig 或 ~/.config/git/config 文件
- 工作目录中的 .git/config

每个级别覆盖上一级别的配置

查看所有配置以及它们所在的文件：

```shell
git config --list --show-origin
```

#### 用户信息

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

使用 `--global` 选项，更改的配置文件位于用户主目录下，如果不使用，那么就是当前的仓库的配置文件。

#### 检查配置信息

列出当前 Git 配置信息，重复的配置会被覆盖，仅显示最后一次设置的值。

```shell
git config --list
```

查看某个配置 `git config <key>`

```shell
git config user.name
```

### 获取 Git 仓库

#### 已有项目

```shell
git init
```

#### 克隆现有仓库

```shell
git clone https://github.com/techless/techless.github.io.git
# 自定义目录名为 demo
git clone https://github.com/techless/techless.github.io.git demo
```

### 别名

常用别名

```shell
# 查看简要状态
git config --global alias.st 'status -sb'
# 检出
git config --global alias.co 'checkout'
# 查看单行提交历史
git config --global alias.ll 'log --oneline'
# 最近一次提交
git config --global alias.last 'log -1 HEAD --stat'
# 提交
git config --global alias.cm 'commit -m'
# 远程仓库
git config --global alias.rv 'remote -v'
# 差异
git config --global alias.d 'diff'
# 差异外部工具
git config --global alias.dv 'difftool -t vimdiff -y'
# 配置列表
git config --global alias.gl 'config --global -l'
# 搜索提交
git config --global alias.se '!git rev-list --all | xargs git grep -F'
# 贡献者排序
rank = shortlog -sn --no-merges
```

## Git 命令

### status

```shell
# 查看当前文件状态
git status
# (简洁) 查看当前文件状态
git status -s
```

### add

```shell
# 将新文件或已修改的文件放入暂存区，或者冲突文件标记为已解决状态
git add README.md
# (所有文件) 将新文件或已修改的文件放入暂存区，或者冲突文件标记为已解决状态
git add .
```

### commit

```shell
# 提交暂存区到仓库区
git commit -m "first commit"
# (跳过暂存区) 提交暂存区到仓库区
git commit -am "first commit"
# 提交到上一次的commit，可以修改上一次的commit
git commit --amend
```

### diff

```shell
# 查看工作区和暂存区的差异
git diff
# (简洁) 查看差异
git diff --stat
# 查看暂存区和版本库的差异
git diff --cached
git diff --staged
# 查看工作区和版本库的差异
git diff HEAD
# 查看当前分支与指定分支的差异
git diff master
# 查看两个分支的差异
git diff branch1 branch2
```

### rm

```shell
# 从工作区和暂存区删除文件
git rm README.md
# 从暂存区删除文件，但保留工作区文件
git rm --cached README.md
```

### mv

```shell
# 移动或重命名文件，也可以用于修改大小写
git mv README.md README
```

### log

```shell
# 查看提交历史
git log
# (简洁) 查看提交历史，显示最近的10次提交
git log --oneline -10
# 查看提交历史，显示具体文件差异
git log -p
# 查看提交历史，显示简要文件差异
git log --stat
# 显示分支、合并历史
git log -graph
# 查看提交历史，格式化显示
git log --pretty=format:"%h - %an, %ar : %s"
# 过滤时间
git log --since=2.weeks
git log --after=1.day
# 过滤作者
git log --author=techless
# 过滤提交者
git log --committer=techless
# 过滤内容中添加或删除某些字符串
git log -S function_name
# 过滤提交说明中包含某些字符串
git log --grep feat
# 不显示合并提交
git log --no-merges
```

### reset

```shell
# 重置暂存区为指定版本
git reset HEAD^
git reset HEAD~1
```

### restore

```shell
# 恢复工作区文件
git restore README.md
# 恢复暂存区文件
git restore --staged README.md
```

### remote

```shell
# 查看远程仓库
git remote -v
# 添加远程仓库
git remote add origin
# 删除远程仓库
git remote rm origin
# 重命名远程仓库
git remote rename origin upstream
# 查看远程仓库具体信息
git remote show origin
# 设置远程仓库的url
git remote set-url origin
```

### fetch

```shell
# 从远程仓库获取代码，并拉取所有分支引用
git fetch origin
```

### pull

```shell
# 从远程仓库获取代码
git pull
```

### push

```shell
# 推送到远程仓库
git push origin master
```

### Tag

```shell
# 列出所有tag
git tag
# 创建tag
git tag -a v1.0 -m "my version 1.0"
# 创建轻量级tag
git tag v1.0
# 后期打tag
git tag -a v1.0 9fceb02
# 查看tag信息
git show v1.0
# 推送tag到远程仓库
git push origin v1.0
# 推送所有tag到远程仓库
git push origin --tags
# 删除本地tag
git tag -d v1.0
# 删除远程tag
git push origin :refs/tags/v1.0
git push origin --delete v1.0
# 查看tag指向的文件版本
git checkout v1.0

```

### branch

```shell

```
