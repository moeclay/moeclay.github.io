---
layout: post
title: Linux Sys CopyFile Remote
date: 2019-08-12 00:52:00
author: doctor. moeclay
categories: linuxsys
---

<div>
<p><b>CopyFile via Remote</b></p>
<p>Terkadang kita butuh untuk memindahkan file dari pc lokal ke pc remote dan sebaliknya, disini kita akan mencoba dengan 2 tool: </p>
*scp
*rsync
<p>Disini kita analogikan server berada di ip: 10.10.5.6 dengan user: alex dan kita akan memindahkan ke folder ~/Desktop.</p>

{% highlight bash  %}
#penggunaan via scp
scp berkas.txt alex@10.10.5.6:/home/alex/Desktop/

#penggunaan via rsync 
rsync -avHl berkas.txt alex@10.10.5.6:/home/alex/Desktop/
{% endhighlight %}

<p>Berlaku juga untuk folder.</p>

</div>
