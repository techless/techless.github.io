---
outline: deep
---

# Docker

## 管理

```shell
# 启动 docker
systemctl start docker
# 停止 docker
systemctl stop docker
# 重启 docker
systemctl restart docker
# 查看 docker 状态
systemctl status docker
# 将 docker 开机自启
systemctl enable docker
```

## 查询命令

```shell
# 查看 docker 信息
docker info
# 查看 docker 版本
docker version
```

## 镜像命令

```shell
# 查看所有镜像
docker images
# 搜索镜像
docker search <image>
# 拉取镜像
docker pull <image>
# 删除镜像
docker rmi <image>
# 查看镜像历史
docker history <image>
```

## 容器命令

```shell
# 创建容器
docker create <image>
# 创建容器并启动
docker run -d --name=<container_name> <image>
# 启动容器
docker start <container>
# 停止容器
docker stop <container>
# 查看正在运行的容器
docker ps
# 查看所有容器
docker ps -a
# 重启容器
docker restart <container>
# 删除容器
docker rm <container>
# 进入容器
docker exec -it <container> bash
# 查看容器内进程
docker top <container>
# 查看容器内部细节
docker inspect <container>
# 查看容器内部端口
docker port <container>
# 查看容器日志
docker logs -f <container>
# 查看容器内部文件
docker diff <container>
```

## Docker Compose 命令

```shell
# 启动所有服务
docker-compose up
# 启动某几个服务
docker-compose up <service1> <service2>
# 启动所有服务并后台运行
docker-compose up -d
# 停止某几个服务
docker-compose stop <service1> <service2>
# 停止所有服务
docker-compose stop
```

## 详细

### 创建容器

运行容器

```shell
docker run <options> <image> <command> <args>
```

options 说明

```shell
–name=<container_name> 为容器指定一个名称；

-d 后台运行容器并返回容器 ID

-i 交互模式，通常与 -t 同时使用，写成 -it

-t 伪终端，通常与 -i 同时使用，写成 -it

-P 随主机端口映射

-p 指定端口映射
```
