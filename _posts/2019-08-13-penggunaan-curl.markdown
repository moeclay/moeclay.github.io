---
layout: post
title: Penggunaan CURL di Linux
date: 2019-08-13 23:00:00
author: doctor. moeclay
categories: linux
---

<div>
<p><b>Berikut beberapa penggunaan CURL</b></p>
<p>Curl adalah sebuah program yang memungkinan kita memindai data dari atau ke sebuah server tanpa interaksi dari masing-masing user.</p>


{% highlight bash %}
#menampilkan informasi header server
$ curl -I http://example.com

#mengambil data dalam format json
$ curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET https://api.minergate.com/

#mempost data dengan file
$ curl -X POST -d data.json https://api.minergate.com/1.0/auth/login

{% endhighlight %}
</div>
