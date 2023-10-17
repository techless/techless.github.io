# PM2

## 安装

```shell
npm install pm2 -g
```

## 命令

```shell
# 启动
pm2 start npm --name "[package.json中的name]" -- run start
# 查看进程
pm2 list
# 结束并删除进程
pm2 delete [进程name]
# 监控
pm2 monit
# 日志
pm2 logs
# 停止
pm2 stop xxx
# 停止所有
pm2 stop all
# 重启
pm2 restart xxx
# 重启所有
pm2 restart all
# 重载
pm2 reload xxx
# 重载所有
pm2 reload all
```
