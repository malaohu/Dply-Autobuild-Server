# Dply-Autobuild-Server
Dply.co自动创建服务器

# 基本说明
利用 dply.co 免费2小时的机器，调试一些脚本服务。

本扩展可以自动创建。


# 操作步骤

* 首先下载该源码到本地。

* 然后打开Chrome浏览器扩展程序 ：chrome://extensions/

* 勾选Chrome开发者模式。

* 加载已解压的扩展程序，选择本地的源码即可。


# 常用脚本

## EB挂机

```
#!/bin/sh
yum -y install expect tigervnc tigervnc-server
wget https://download.Fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm 
rpm -ivh epel-release-6-8.noarch.rpm 
yum search xfce 
yum groupinfo xfce 
yum groupinstall xfce chinese-support -y
yum -y install firefox
wget ftp://192.99.11.204/ebesucher/install_flash_player_11_linux.x86_64.tar.gz
tar zxvf install_flash_player_11_linux.x86_64.tar.gz
mkdir -p ~/.mozilla/plugins/
cp libflashplayer.so ~/.mozilla/plugins/
echo 'VNCSERVERS="1:root"
VNCSERVERARGS[1]="-geometry 1024x1024 "' >> /etc/sysconfig/vncservers
echo '#! /usr/bin/expect
spawn sudo vncserver
expect "Password:"
send "ruyo.net\r"
expect "Verify:"
send "ruyo.net\r"
expect off' > setpwd_centos6.sh
chmod 777 setpwd_centos6.sh
./setpwd_centos6.sh
dbus-uuidgen > /var/lib/dbus/machine-id
echo '#!/bin/bash
while [ 1 ]
do
        echo "Stop Firefox"
        pgrep firefox && killall -9 firefox
        sleep 5
        firefox --display=localhost:1.0 --new-tab http://www.ebesucher.com/surfbar/malaohu & >/dev/null 2>&1
        echo "Restart Firefox"
		sleep 300
done' > autorestart.sh
chmod 777 autorestart.sh
./autorestart.sh
```

## 安装锐速

```
#!/bin/sh
wget https://raw.githubusercontent.com/malaohu/ruyo-shell/master/linux_centos_6_x64_do_serverspeeder.sh
bash linux_centos_6_x64_do_serverspeeder.sh
```

## 安装SS

加密方式：RC4-MD5
密码：RUYO.net
端口：443
```
#!/bin/sh
wget --no-check-certificate -O shadowsocks-go.sh https://raw.githubusercontent.com/malaohu/ruyo-shell/master/shadowsocks-go.sh
chmod +x shadowsocks-go.sh
./shadowsocks-go.sh 2>&1
```

## 刷GV

```
#!/bin/bash
for((i=0;i<$threads;++i));do while :;do
    [curl ...] >/dev/null 2>/dev/null
    # 用刚才的命令替换中括号里的内容（包括两个中括号本身）
done &
done
echo 结束脚本请使用Ctrl+C，使用其它方法可能会出现无法预料的异常，谢谢合作
wait
```