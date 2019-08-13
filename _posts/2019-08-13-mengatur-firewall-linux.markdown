---
layout: post
title: Mengatur Firewall Port Linux
date: 2019-08-13 23:00:00
author: doctor. moeclay
categories: linux
---

<div>
<p><b>Firewall Port Linux</b></p>
<p>Untuk mengatur firewall di linux bisa menggunakan tool bantuan bernama: ufw.</p>
<p>Disini kita akan mencoba : </p>
<ul>
  <li>install telnet service</li>
  <li>membuka port telnet </li>
  <li>mengakses telnet</li>
</ul>

{% highlight bash %}
#install telnet service 
$sudo apt-get install telnetd -y

#mencheck service apa sudah berjalan
$sudo systemctl status inetd

#mengallow port telnet
$sudo ufw allow telnet

#menjalankan ufw agar on system startup
$sudo ufw enable

#mengkoneksikan ke telnet
$ telnet 127.0.0.1
{% endhighlight %}

<p>untuk port default telnet: 23. Bisa diubah untuk menjaga keamanannya.</p>
</div>
