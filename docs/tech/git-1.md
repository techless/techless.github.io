---
outline: deep
---

# GIT

## 配置

```shell
# 全局配置
git config --global user.name "techless"
git config --global user.email "workth@163.com"
# 局部配置
git config user.name "techless"
git config user.email "workth@163.com"

# 查看配置信息
vim ./gitconfig
# 查看版本
git --version
# 查看配置
git config --local --list
# 查看当前名字
git config user.name
# 查看当前邮箱
git config user.email
# 禁止忽略大小写不敏感
git config core.ignorecase false
```

## 命令

### 初始化 `init`

```shell
# 新仓库 初始化仓库
git init
```

### 克隆 `clone`

```shell
git clone xxx.git
```

### 操作日志 `log`

```shell
# 查询版本日志
git log
# 查询版本变动日志
git log -p
# 查询版本日志 单行简略信息 近10条
git log --oneline -10
# 查询版本变动日志最近一次
git log -p -1
# 查询版本文件变动日志
git log --name-only
# 查询版本文件变动详细日志 (添加还是修改)
git log --name-status
```

### 远程 `remote`

```shell
# 查看远程信息
git remote
# 查询远程信息(详细)
git remote -v
# 添加远程地址 [如删除 origin]
git remote add origin https://github.com/xxx/test.git
# 删除远程地址
git remote rm origin
# 修改远程地址 [如修改 origin]
git remote set-url origin https://github.com/xxx/test.git
# 拉取远程仓库的分支到本地指定分支
git fetch origin origin-branch-name:local-branch-name
```

### 添加暂存区 `add`

```shell
# 添加xxx.txt到暂存区
git add xxx.txt
# 添加所有文件到暂存区
git add .
```

### 提交 `commit`

```shell
# 提交暂存区到本地仓库
git commit -m "提交信息"
# 提交暂存区到本地仓库，-a 代表添加所有修改的文件,不包括新建文件
git commit -a -m "提交信息"
# --amend 代表修改上一次提交的信息
git commit --amend
# --no-edit 代表不修改上一次提交的信息,直接提交
git commit --amend  --no-edit
```

### 拉取版本 `pull`

```shell
git pull
```

### 拉取版本对比 `fetch`

```shell
git fetch
```

### 推送版本库 `push`

```shell
# 推送到远程 master 分支 [需要提前设置好远程信息]
git push -u origin master
```

### 修改 `mv`

```shell
# 改名
git mv xxx.txt yyy.txt
```

-   可能会遇到 indexControler.txt 提交到暂存区,但是显示 indexcontroler.txt,可以用 mv 命令解决

### 删除 `rm`

```shell
# 删除版本库和工作区中文件
git rm xxx.txt
# 仅删除版本库中文件，不删除工作区文件
git rm --cache xxx.txt
```

### 检出 `checkout`

```shell
# 创建dev分支, 并切换到dev分支
git checkout -b dev
# 切换到master分支
git checkout master
# 回退到上一版本
git checkout HEAD^
# 回退前n个版本
git checkout HEAD~n
```

### 分支 `branch`

```shell
# 查看所有分支及当前处于哪个分支
git branch
# 创建dev分支
git branch dev
# 移动分支位置
git branch -f main HEAD~n
# 删除分支
git branch -d dev
# 删除远程dev分支
git push origin -d dev
# 忽略提醒，强制删除dev分支
git branch -D dev
# 查看已合并分支
git branch --merged
# 查看未合并分支
git branch --no-merged

```

### 撤销 `reset` `revert` `restore`

```shell
# 撤销，仅本地有效，未提交前可以使用
git reset HEAD~1
# 撤销，生成新纪录，用于远程提交
git revert HEAD
# 撤销暂存区文件到工作目录
git restore --staged .
```

### 临时存储 `stash`

未写完代码，但需要切换分支，可以用此命令先暂时保存

```shell
# 创建临时存储
git stash
# 列出临时存储
git stash list
# 恢复临时存储
git stash apply
# 删除临时存储
git stash drop stash@{0}
# 恢复最新状态并删除临时存储
git stash pop
```

## .gitignore 文件

忽略提交的文件

```shell
# txt后缀的忽略
*.txt
# txt后缀忽略除了xxx.txt
*xxx.txt
!a.txt
# 忽略文件夹
/xxx
# 忽略子目录下所有txt文件
/xxx/**/*.txt
```

## 问题

The file will have its original line endings in your working directory

```shell
git rm -r --cached .
git config core.autocrlf false

git add .
```

Updates were rejected because the remote contains work that you do

```shell
# 原因是已经建立仓库
# 先将空仓库拉取下来rebase到本地仓库
git pull --rebase origin main
# 然后重新提交
git push -u origin main
```
