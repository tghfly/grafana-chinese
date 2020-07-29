Grafana 6.7.4中文化版本

汉化步骤：

1、备份public目录

mv /usr/share/grafana/public /usr/share/grafana/public.source

2、备份/usr/sbin/grafana-server和grafana-cli

cp /usr/sbin/grafana-server /usr/sbin/grafana-server.source

cp /usr/sbin/grafana-cli /usr/sbin/grafana-cli.source

3、停止grafana服务，拷贝grafana/bin/linux-amd64/grafana-server 和 grafana-cli /usr/sbin目录

systemctl stop grafana-server

/bin/cp grafana/bin/linux-amd64/grafana-server /usr/sbin/

/bin/cp grafana/bin/linux-amd64/grafana-cli /usr/sbin/

4、拷贝grafana/public 到 /usr/share/grafana/

/bin/cp public /usr/share/grafana/

5、启动grafana-server

systemctl start grafana-server


重要说明: 各插件面板待汉化!!!

汉化效果图

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/login.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/config.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/profile.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/changepass.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/sideconfig.png)

![Image text](https://raw.githubusercontent.com/tghfly/grafana/master/chinese-images/panel01.png)
