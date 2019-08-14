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
