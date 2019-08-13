---
layout: post
title: Menjalankan Program dengan Bahasa C 
date: 2019-08-13 00:52:00
author: doctor. moeclay
categories: cprogramming
---

<div>
<p><b>Dibuat di sistem linux</b></p>
<p>Ini sebuah catatan kecil yang bertujuan untuk menjalankan salah satu program linux dengan Bahasa C.</p>
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
