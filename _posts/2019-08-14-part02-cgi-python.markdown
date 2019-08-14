---
layout: post
title: Part02 - CGI Form Python
date: 2019-08-14 14:00:00
author: doctor. moeclay
categories: python
---


<div>
<p><b>Method GET</b></p>
<p>Parameter dalam form get akan disertakan dalam URL.</p>
<p>Buatlah 2 file : getform.py dan getproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: getform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Get</title>
</head>
<body>
<h3>Demo Membuat Form dengan GET</h3>
<form action="getproses.py" method="get">
  Nama<br>
  <input type="text" name="nama" /><br>
  Kota<br>
  <input type="text" name="kota" />
  <p><input type="submit" value="Kirim" /></p>
</form>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: getproses.py
from __future__ import print_function
import cgi

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
nama = form.getvalue("nama")
kota = form.getvalue("kota")

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action GET</title>
</head>
<body>
<h3>Demo Penanganan GET</h3>""")

print("Nama: ",nama,"<br/>")
print("Kota: ",kota,"<br/>")

print("""
</body>
</html>
""")
{% endhighlight %}
</div>


<div>
<p><b>Method POST </b></p>
<p>Parameter dalam form post tidak akan ditampilkan dalam URL.</p>
<p>Buatlah 2 file : postform.py dan postproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: postform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo POST</title>
</head>
<body>
<h3>Demo Membuat Form dengan POST</h3>
<form action="postproses.py" method="post">
  Nama<br>
  <input type="text" name="nama" /><br>
  Kota<br>
  <input type="text" name="kota" />
  <p><input type="submit" value="Kirim" /></p>
</form>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: postproses.py
from __future__ import print_function
import cgi

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
nama = form.getvalue("nama")
kota = form.getvalue("kota")

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action POST</title>
</head>
<body>
<h3>Demo Penanganan GET</h3>""")

print("Nama: ",nama,"<br/>")
print("Kota: ",kota,"<br/>")

print("""
</body>
</html>
""")
{% endhighlight %}
</div>


<div>
<p><b>Menangani Radio</b></p>
<p>Radio form digunakan untuk memilih salah satu </p>
<p>Buatlah 2 file : radioform.py dan radioproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: radioform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Radio</title>
</head>
<body>
<h3>Demo Membuat Radio Button</h3>
<form action="radioproses.py" method="post">
  Nama<br>
  <input type="text" name="nama" /><br><br>

  Jenis Kelamin<br>
  <input type="radio" name="gender" value="P" />Pria
  <input type="radio" name="gender" value="W" />Wanita<br><br>

  Agama:
  <input type="radio" name="agama" value="0" />Islam
  <input type="radio" name="agama" value="1" />Protestan
  <input type="radio" name="agama" value="2" />Katolik
  <input type="radio" name="agama" value="3" />Budha
  <input type="radio" name="agama" value="4" />Hindu<br>
  <p><input type="submit" value="Kirim" /></p>
</form>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: radioproses.py
from __future__ import print_function
import cgi

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
nama = form.getvalue("nama")
kodegender = form.getvalue("gender")
kodeagama = int(form.getvalue("agama"))

#membuat directory gender
gender = {'P':"Pria",'W':"Wanita"}

#membuat tuple agama
agama = ("Islam","Protestan","Katolik","Budha","Hindu")

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action Radio Button</title>
</head>
<body>
<h3>Demo Penanganan Radio Button</h3>""")

print("Nama: ",nama,"<br/>")
print("Jenis Kelamin: ",gender[kodegender],"<br/>")
print("Agama: ",agama[kodeagama],"<br>")

print("""
</body>
</html>
""")
{% endhighlight %}
</div>

<div>
<p><b>Menangani Checkbox</b></p>
<p>Checkbox digunakan untuk memilih lebih dari satu pilihan.</p>
<p>Buatlah 2 file : checkboxform.py dan checkboxproses.py</p>

{% highlight python %}
#!/usr/bin/python
#file: checkboxform.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Checkbox</title>
</head>
<body>
<h3>Demo Membuat Checkbox Button</h3>
<form action="checkboxproses.py" method="post">
  Nama<br>
  <input type="text" name="nama" /><br><br>

  Hobi:
  <input type="checkbox" name="hobi" value="Membaca" />Membaca
  <input type="checkbox" name="hobi" value="Olahraga" />Olahraga
  <input type="checkbox" name="hobi" value="Belanja" />Belanja
  <input type="checkbox" name="hobi" value="Bertamasya" />Bertamasya

  <p><input type="submit" value="Kirim" /></p>
</form>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: checkboxproses.py
from __future__ import print_function
import cgi

# membuat object dari class FieldStorage
form = cgi.FieldStorage()

# mengikat data
nama = form.getvalue("nama")
hobi = form.getvalue("hobi")

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Action Checkbox Button</title>
</head>
<body>
<h3>Demo Penanganan Checkbox Button</h3>""")

print("Nama: ",nama,"<br/>")
print("Hobi: <br/>")

if(type(hobi)==list):
  for h in hobi:
    print("- ",h,"<br>")
else:
  print("- ",hobi)

print("""
</body>
</html>
""")
{% endhighlight %}
</div>
