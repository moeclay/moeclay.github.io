---
layout: post
title: Cara Kerja Program CGI Python
date: 2019-08-14 06:00:00
author: doctor. moeclay
categories: python
---

<div>
<p style="text-align: center;"><img src="https://drive.google.com/uc?id=1tOU1NXoDy5usMlKYrI883gjlt_ZCviA0"/></p>
<p><b>Arsitektur Program CGI</b></p>
<p>CGI (Common Gateway Interface) adalah suatu method standar yang digunakan web server untuk membentuk lamaan web ke file program yang bisa dieksekusi.</p>
<p>Beberapa bahasa pemrograman mengusung konsep cgi diantaranya : </p>
<ul>
<li>c/c++</li>
<li>perl</li>
<li>ruby</li>
<li>python</li>
<li>dll</li>
</ul>

<p><b>Cara Kerja CGI</b></p>
<p>Web Browser menggunakan protocol http untuk mengakses Server Http.</p>
<p>Server Http akan mengeksekusi program cgi sesuai permintaan.</p>
<p>Jika program cgi memiliki akses ke database, maka data akan diproses terlebih dahulu.</p>
<p>Program cgi memberikan kembali hasil sesuai permintaan Server Http.</p>
<p>Server Http akan mengirim ke web browser client.</p>

<p><b>Berikut script python cgi: </b></p>
{% highlight python %}
#!/usr/bin/python
from __future__ import print_function

print("Content-Type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Hello CGI</title>")
print("</head>")
print("<body>")
print("<h1>Hello CGI</h1>")
print("Halaman web ini dibuat menggunakan Python")
print("</body>")
print("</html>")
{% endhighlight %}

</div>
