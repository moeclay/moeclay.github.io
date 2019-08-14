---
layout: post
title: Part03 - CGI Form Python
date: 2019-08-14 15:00:00
author: doctor. moeclay
categories: python
---


<div>
<p><b>Membuat Combobox di CGI</b></p>
<p>Buatlah 2 file : comboboxform.py dan comboboxproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: comboboxform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Combobox</title>
</head>
<body>
<h3>Demo Membuat Combobox</h3>
<form action="comboboxproses.py" method="post">
  Nama<br>
  <input type="text" name="nama" /><br><br>

  Pendidikan:
  <select name="pendidikan" size="1">
    <option value="SD">SD</option>
    <option value="SMP">SMP</option>
    <option value="SLTA">SLTA</option>
    <option value="Diploma">Diploma</option>
    <option value="S1">S1</option>
    <option value="S2">S2</option>
    <option value="S3">S3</option>
  </select>
  <p><input type="submit" value="Kirim" /></p>
</form>
</body>
</html>
""")

{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: comboboxproses.py
from __future__ import print_function
import cgi

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
nama = form.getvalue("nama")
pendidikan = form.getvalue("pendidikan")

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action Checkbox Button</title>
</head>
<body>
<h3>Demo Penanganan Checkbox Button</h3>""")

print("Nama: ",nama,"<br/>")
print("Hobi: ",pendidikan,"<br/>")


print("""
</body>
</html>
""")
{% endhighlight %}
</div>


<div>
<p><b>Membuat Textarea di CGI</b></p>
<p>Buatlah 2 file : textareaform.py dan textareaproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: textareaform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Textarea</title>
</head>
<body>
<h3>Demo Membuat Textarea</h3>
<form action="textareaproses.py" method="post">
  Nama<br>
  <input type="text" name="nama" /><br><br>

  Alamat:<br>
  <textarea name="alamat"></textarea>
  <p><input type="submit" value="Kirim" /></p>
</form>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: textareaproses.py
from __future__ import print_function
import cgi

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
nama = form.getvalue("nama")
alamat = form.getvalue("alamat")

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action Checkbox Button</title>
</head>
<body>
<h3>Demo Penanganan Checkbox Button</h3>""")

print("Nama: ",nama,"<br/>")
print("Alamat: ",alamat,"<br/>")


print("""
</body>
</html>
""")
{% endhighlight %}
</div>


<div>
<p><b>Membuat Upload File di CGI</b></p>
<p>Buatlah 2 file : uploadform.py dan uploadproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: uploadform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Upload File</title>
</head>
<body>
<h3>Demo Membuat Upload File</h3>
<form action="uploadproses.py" method="post" enctype="multipart/form-data">
  Nama File<br>
  <input type="file" name="f" size="50" /><br>

  <p><input type="submit" value="Upload" /></p>
</form>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: uploadproses.py
from __future__ import print_function
import cgi,os

# menentukan directory tujuan
temp = "/opt/lampp/htdocs/cdn/uploads/"

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
f = form['f']

if f.filename:
  # mengambil nama file
  namafile = os.path.basename(f.filename)
  # membuat file baru
  fo = open(temp+namafile,"wb")
  fo.write(f.file.read())
  info = "Upload file berhasil"
else:
  info = "Upload file gagal"

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action Upload</title>
</head>
<body>
<h3>Demo Penanganan Upload File</h3>""")

print(info,"<br/>")
print("Lokasi upload: ",temp,namafile)


print("""
</body>
</html>
""")
{% endhighlight %}
