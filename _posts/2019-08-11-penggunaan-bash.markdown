---
layout: post
title: Perintah Bash Linux
date: 2019-08-11 13:00:00
author: doctor. moeclay
categories: bash
---

<div>
<p><b>1. Looping</b></p>
<p>Perintah ini digunakan untuk membuat perulangan dalam script bash.</p>

{% highlight bash  %}
#!/bin/bash
echo "Bash version ${BASH_VERSION}"
for i in {0..10..2}
do
  echo "welcome $i times"
done
{% endhighlight %}

</div>

<div>
<p><b>2. Alias</b></p>
<p>Perintah ini digunakan untuk memanipulasi perintah bash</p>

{% highlight bash %}
alias c='clear'
alias blog='cd /home/alex/blog'
{% endhighlight %}

<p>Untuk membatalkan alias bisa menggunakan : </p>

{% highlight bash %}
unalias c
unalias blog
{% endhighlight %}

</div>

<div>
<p><b>3. Privileged Access</b></p>
<p>Untuk menggunakan command alias tanpa menggunakan perintah root.</p>

{% highlight bash %}
if [ $UID -ne 0 ]; then
  alias update='sudo apt-get update'
  alias upgrade='sudo apt-get upgrade'
fi
{% endhighlight %}

</div>

<div>
<p><b>4. Select Case</b></p>
<p>Untuk memilih sesuai parameter yang ditentukan.</p>

{% hlighlight bash %}
_myos="$(uname)"

case $_myos in
  Linux) echo "Ini OS Linux";;
  Microsoft) echo "Ini OS Microsoft";;
esac
{% endhighlight %}

</div>

<div>
<p><b>5. History Command</b></p>
<p>Untuk melihat daftar jejak penggunaan command.</p>

{% highlight bash %}
history
{% endhighlight %}

</div>

<div>
<p><b>6. Waktu dan Tanggal</b></p>
<p>Untuk menampilkan tanggal dan waktu yang sedang berjalan.</p>

{% highlight bash %}
#tanggal dan waktu lengkap
date

#waktu
date +"%T"

#tanggal
date +"%d-%m-%Y"
{% endhighlight %}

</div>

<div>
<p><b>7. Ping Jaringan</b></p>
<p>Untuk mengecek jaringan ada atau tidaknya.</p>

{% highlight bash %}
ping 192.168.43.1 -c 5 
{% endhighlight %}

</div>

<div>
<p><b>8. Port Terbuka</b></p>
<p>Untuk mengecek port jaringan yang terbuka.</p>

{% highlight bash %}
netstat -tulanp
{% endhighlight %}

</div>

<div>
<p><b>9. Firewall Controll</b></p>
<p>Untuk mengecek firewall jaringan dengan iptables.</p>

{% highlight bash %}
#semua data
sudo iptables -L -n -v --line-numbers
#input only
sudo iptables -L INPUT -n -v --line-numbers
#output
sudo iptables -L OUTPUT -n -v --line-numbers
#forward
sudo iptables -L FORWARD -n -v --line-numbers
{% endhighlight %}

</div>

<div>
<p><b>10. Halt/Reboot/Shutdown</b></p>
<p>Perintah mematikan system.</p>

{% highlight bash %}
sudo /sbin/reboot
sudo /sbin/poweroff
sudo /sbin/halt
sudo /sbin/shutdown
{% endhighlight %}

</div>

<div>
<p><b>11. Web Server Control</b></p>
<p>Untuk mereload dan test web server.</p>

{% highlight bash %}
#nginx web server
nginx -s reload
nginx -t
#lighttp web server
lighttpd reload
lighttpd -f /etc/lighttpd/lighttpd.conf -t
#apache web server
apachectl -k graceful
apachectl -t
{% endhighlight %}

</div>

<div>
<p><b>12. Playing Music/Video</b></p>
<p>Untuk memutar file multimedia.</p>

{% highlight bash %}
#mp3 list all
mplayer *.mp3
#mp3 shuffle
mplayer --shuffle *.mp3
{% endhighlight %}

</div>

<div>
<p><b>13. Check Interface wireless</b></p>
<p>Untuk melihat detail interface wireless.</p>

{% highlight bash %}
iwconfig wlan0
{% endhighlight %}

</div>

<div>
<p><b>14. Memori, CPU, Hardware</b></p>
<p>Untuk melihat detail memori, cpu dan daftar hardware.</p>

{% highlight bash %}
#memori
free -m -l -t
#cpu
lscpu
#hardware
lscpi
{% endhighlight %}

</div>

<div>
<p><b>15. Disk, Task Manager, Memcached</b></p>
<p>Untuk melihat detail disk, task manager dan memcached .</p>

{% highlight bash %}
#disk usage 
df -H
#dish total
du -ch
#task manager
htop
#memcached status
memcached-tool 10.10.27.11:11211 stats
memcached-tool 10.10.27.11:11211 display
# quickly flush out memcached server
echo "flush_all" | nc 10.10.10.27.11:11211
{% endhighlight %}

</div>
