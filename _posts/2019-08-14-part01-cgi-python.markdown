---
layout: post
title: Part01 - CGI Python
date: 2019-08-14 07:00:00
author: doctor. moeclay
categories: python
---

<div>
<p><b>Membuat Link Antar Program CGI</b></p>
<p>Buatlah 2 file : link.py dan gui.py</p>

{% highlight python %}
#!/usr/bin/python
#file: link.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo Home</title>
</head>
<body>
<h3>Demo Home</h3>
<p>Klik link dibawah untuk mengakses program cgi yang lain.</a>
<a href="gui.py">Python untuk aplikasi GUI</a>
</body>
</html>
""")
{% endhighlight %}

{% highlight python %}
#!/usr/bin/python
#file: gui.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Demo GUI</title>
</head>
<body>
<h3>Demo GUI</h3>
<p>Di python GUI ada berbagai macam: wxpython, tkinter, pyqt, dll.</a>
</body>
</html>
""")
{% endhighlight %}

</div>

<div>
<p><b>Menampilkan Gambar di CGI </b></p>
<p>Buatlah file : gambar.py</p>
{% highlight python %}
#!/usr/bin/python
#file: gambar.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Load Gambar</title>
</head>
<body>
<h3>Menampilkan Gambar di CGI Python</h3>
<img src="http://localhost/cdn/img/pylogo.png" alt="Gambar Python" />
</body>
</html>
""")
{% endhighlight %}
</div>

<div>
<p><b>Membuat Daftar</b></p>
<p>Buatlah file : list.py</p>
{% highlight python %}
#!/usr/bin/python
#file: list.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Membuat Daftar</title>
</head>
<body>
<h3>Membuat List di Python</h3>
<p>Daftar Belanja: </p>
<ul>
<li>Apel</li>
<li>Pisang</li>
<li>Mangga</li>
<li>Semangaka</li>
</ul>
</body>
</html>
""")
{% endhighlight %}
</div>

<div>
<p><b>Membuat Table</b></p>
<p>Buatlah file : table.py</p>
{% highlight python %}
#!/usr/bin/python
#file: table.py
from __future__ import print_function

print("""Content-type: text/html\r\n\r\n
<html>
<head>
<title>Membuat Table</title>
</head>
<body>
<h3>Membuat Table di Python</h3>
<p>Nama penemu bahasa pemrograman</p>
<table border="1">
<tr>
<th>Bahasa Pemrograman</th>
<th>Nama Penemu</th>
</tr>
<tr>
<td>Bahasa Perl</td>
<td>Larry Wall</td>
</tr>
<tr>
<td>Bahasa Ruby</td>
<td>Yukihiro Matsumoto</td>
</tr>
<tr>
<td>Bahasa C</td>
<td>Dennis Ritchie</td>
</tr>
<tr>
<td>Bahasa C++</td>
<td>Bjarne Stroustrup</td>
</tr>
<tr>
<td>Bahasa Java</td>
<td>James Gosling</td>
</tr>
<tr>
<td>Bahasa Python</td>
<td>Guido Van Rossum</td>
</tr>
</table>
</body>
</html>
""")
{% endhighlight %}
</div>
