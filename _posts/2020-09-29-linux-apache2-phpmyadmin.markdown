---
layout: post
title: Install phpmyadmin linux server apache2
date: 2020-08-23 20:29:00
author: doctor. moeclay
categories: webserver
---
<p><b>Install phpmyadmin & php package</b></p>
{% highlight bash %}

# install phpmyadmin
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install phpmyadmin php7.2-mbstring php7.2-gettext

# pilih apache2
# masukan password mysql server

# enable php extention
$ sudo phpenmod mbstring
$ sudo systemctl restart apache2

{% endhighlight %}
