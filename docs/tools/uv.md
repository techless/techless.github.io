# pyenv

python 版本管理工具

## Mac 安装

```shell
# On macOS and Linux.
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 项目管理命令

```shell
# 初始化当前目录为一个新项目 (生成 pyproject.toml)
uv init
# 创建一个名为 <name> 的新项目文件夹
uv init <name>
# 安装包并添加到依赖列表 (自动更新 lock 文件)
uv add <package>
# 卸载包并从依赖列表移除 (自动更新 lock 文件)
uv remove <package>
# 安装开发环境依赖 (如 pytest, ruff)
uv add --dev <包名>
# 根据 lock 文件同步环境 (安装所有依赖，确保环境一致)
uv sync
# 在虚拟环境中运行脚本 (如果环境未就绪会自动处理)
uv run <脚本.py>
# 显示项目依赖树
uv tree
```

# Python 管理命令

```shell
# 列出本机已安装和可用的 Python 版本
uv python list
# 下载并安装 Python 3.10 (具体版本如 3.10.4 也可以)
uv python install 3.10
# 将当前项目锁定使用 Python 3.10 (生成 .python-version 文件)
uv python pin 3.10
# 卸载指定的 Python 版本
uv python uninstall 3.10
```

## 传统模式命令

不要 pyproject.toml, 只快速创建个环境装个包

```shell
# 创建虚拟环境 (默认在 .venv 目录)
uv venv
# 创建指定 Python 版本的虚拟环境
uv venv --python 3.10
# 安装包 (速度极快)
uv pip install <包名>
# 从 requirements.txt 安装
uv pip install -r requirements.txt
# 列出当前环境已安装的包
uv pip list
# 导出当前环境的包列表
uv pip freeze
# 编译依赖文件 (生成锁定的 requirements.txt)
uv pip compile requirements.in
```

## 工具运行

类似 `pipx`, 用于运行命令行工具(如 black, ruff, httpie)，而不污染全局环境

```shell
# 全局安装工具 (例如: uv tool install ruff)
uv tool install <工具名>
# 列出已安装的全局工具
uv tool list
# (最常用) 临时下载并运行工具，用完即走 (例如: uvx cowsay hello)
uvx <工具名>
# 从特定包运行命令 (例如: uvx --from json5 json5 --version)
uvx --from <包> <命令>
```

## 维护&清理

```shell
# 更新 uv 自身到最新版本
uv self update
# 清理 uv 的缓存 (释放磁盘空间)
uv cache clean
# 查看当前 uv 版本
uv version
```

## 场景

#### 新项目起手

```shell
uv init myapp
cd myapp
uv add requests
uv run hello.py
```

### 临时跑脚本 (无需建环境)

```shell
# 比如想用 python 3.12 跑一个脚本，还需要 pandas 库
uv run --python 3.12 --with pandas script.py
```

### 运行工具

```shell
uvx ruff check .
```
