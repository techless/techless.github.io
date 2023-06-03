# Pipenv

## 命令
```shell
# 查看当前环境位置
pipenv --venv
# 安装包到dev
pipenv install --dev xxx
# 查看项目位置
pipenv --where
# 查看虚拟环境python解释器位置
pipenv --py
# 查看包依赖关系
pipenv graph
# 运行命令
pipenv run xxx
# 更新所有包
pipenv update
# 更新包
pipenv update xxx
# 查看过期包信息
pipenv update --outdated
# 生成lock文件
pipenv lock
# 生成requirements文件
pipenv requirements > requirements.txt
```
