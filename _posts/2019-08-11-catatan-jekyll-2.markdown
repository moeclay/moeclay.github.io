---
layout: post
title:  "Catatan Jekyll 2"
date:   2019-08-11 00:10:45
author: doctor. moeclay
categories: ruby
---
Dokumentasi Lengkap tentang jekyll di [Jekyllrb][ref1]

<div>
	<blockquote>
		Jekyll merupakan sebuah tool yang disediakan untuk membuat sebuah blog yang berbasis ruby dan dibuat dengan format markdown.
	</blockquote>
	<p>Markdown adalah sebuah bentuk file yang biasanya digunakan untuk format penulisan. Markdown ditemukan oleh <b>John Gruber</b>. Format ini nantinya akan di convert ke html.</p>
</div>

<div>
	<p><b>1. membuat link</b></p>
	<p>Untuk membuat link bisa menggunakan [title][ref1] ini diletakan di body content dan [ref1]: url-nya diletakan di bawah content.</p>
</div>

<div>
	<p><b>2. membuat highlight</b></p>
{% highlight java %}

public class BelajarJekyll {
  public static void main(String[]args) {
    System.out.println("Kode Java");
  }
}

{% endhighlight%}
</div>


[ref1]: https://jekyllrb.com