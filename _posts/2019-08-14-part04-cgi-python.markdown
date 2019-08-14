---
layout: post
title: Part04 - CGI Database
date: 2019-08-14 16:00:00
author: doctor. moeclay
categories: python
---


<div>
<p><b>Mengambil Database di CGI Python</b></p>
<p>Buat database mysql bernama kontak, lalu buat table telepon dan buat field{id, nama, nomor} dan isi beberapa data ke table telepon.</p>
<p>Buatlah 1 file : database.py</p>

{% highlight python %}
#!/usr/bin/python
#file: database.py
from __future__ import print_function
import mysql.connector

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Database CGI</title>
</head>
<body>
<h3>Demo Akses Database</h3>""")

try:
  # membuat obj koneksi
  conn = mysql.connector.connect(user="root",password="",host="127.0.0.1",database="kontak")
  # membuat obj cursor
  cur = conn.cursor()
  # mengeksekusi statement sql
  cur.execute("SELECT id,nama,nomor FROM telepon")
  # menangkap semua baris di dalam cursor
  result = cur.fetchall()

  # menampilkan dalam bentuk table
  # code
  print("""
<table border="1">
<tr>
  <td width="180">Id</td>
  <td width="180">Nama</td>
  <td width="180">Nomor</td>
</tr>
""")
  for (id,nama,nomor) in result:
    print("<tr>")
    print("<td>",id,"</td>")
    print("<td>",nama,"</td>")
    print("<td>",nomor,"</td>")
    print("<tr>")
  print("""</table>""")
  cur.close()
except:
  print("ERROR: Data tidak dapat diakses")
else:
  # menutup obj cursor dan koneksi
  conn.close()

print("""
</body>
</html>
""")
{% endhighlight %}
