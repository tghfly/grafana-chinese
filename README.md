Grafana 6.7.4中文化版本

重要说明: 各插件面板待汉化!!!

汉化步骤： 

克隆 github 仓库到本地，备份并停止本地服务器grafana，将github仓库中bin目录和public目录覆盖到本地服务器，重启grafana.

如果要基于本仓库再次做汉化，可先从grafana官方github仓库克隆v6.7.x的代码，然后将本仓库的build.go、pkg、packages、public目录覆盖到克隆下来的官方仓库中即可.

有关 Grafana 汉化以及实践视频教程，可关注我的b站账号 itcooking ,相关视频以及文档链接如下：

https://www.bilibili.com/video/BV15a4y1a75c

https://www.bilibili.com/video/BV1PV411k7Rz

https://www.bilibili.com/read/cv5926605


具体汉化步骤： 

1、备份public目录

mv /usr/share/grafana/public /usr/share/grafana/public.source

2、备份/usr/sbin/grafana-server和grafana-cli

cp /usr/sbin/grafana-server /usr/sbin/grafana-server.source

cp /usr/sbin/grafana-cli /usr/sbin/grafana-cli.source

3、停止grafana服务，拷贝grafana/bin/linux-amd64/grafana-server 和 grafana-cli /usr/sbin目录

systemctl stop grafana-server

/bin/cp -rp grafana/bin/linux-amd64/grafana-server /usr/sbin/

/bin/cp -rp grafana/bin/linux-amd64/grafana-cli /usr/sbin/

4、拷贝grafana/public 到 /usr/share/grafana/

/bin/cp -rp public /usr/share/grafana/

5、启动grafana-server

systemctl start grafana-server


汉化效果图

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/login.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/config.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/profile.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/changepass.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/sideconfig.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/panel01.png)
