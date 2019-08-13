---
layout: post
title: Menjalankan Program dengan bahasa c 
date: 2019-08-12 00:52:00
author: doctor. moeclay
categories: cprogramming
---

<div>
<p><b>Dibuat di sistem linux</b></p>
<p>Ini sebuah catatan kecil yang bertujuan untuk menjalankan salah program linux dengan bahasa c.</p>
<p>program yang akan dijalankan : nemo (file manager).</p>

<p><b>Script Programnya :</b></p>
{% highlight c %}
#include <stdlib.h>
#include <stdio.h>

int main(void){
  int result;
  result = system("nemo");
  printf("%d", result);
  return 0;
}
{% endhighlight %}
</div>
