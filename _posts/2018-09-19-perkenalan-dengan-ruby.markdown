---
layout: post
title:  "Perkenalan dengan Ruby !"
date:   2018-09-19 00:10:45
author: doctor. moeclay
categories: ruby
---

Untuk dokumentasi yg lengkap kunjungi : [Ruby Site][ruby]

Disini saya menggunakan linux, berikut : <br>
Buka terminal, masuk ke akun <b>root (#)</b> terlebih dahulu. Lalu ikuti saya command berikut : 


* apt install ruby
* apt install ruby-dev 
* ruby -v 
* gem update --system 
* apt install gcc rubygems 
* gem install compass 
* gem install jekyll 

Contoh sederhana ruby : 

{% highlight ruby %}
def print_hi(name)
  puts "my name is , #{name}"
end
print_hi('moeclay')
#=> prints 'my name is , moeclay' to STDOUT.
{% endhighlight %}

[ruby]: 	   https://www.ruby-lang.org/
