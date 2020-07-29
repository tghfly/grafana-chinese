go run build.go setup
go run build.go build   

# 备份：
# mv /usr/sbin/grafana-server /usr/sbin/grafana-server.source

systemctl stop grafana-server
sleep 1
/bin/cp -rp ./bin/linux-amd64/grafana-server /usr/sbin/
sleep 1
systemctl start grafana-server
