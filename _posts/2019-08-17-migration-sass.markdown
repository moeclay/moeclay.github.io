---
layout: post
title: Migrasi ke SASS
date: 2019-08-17 16:00:00
author: doctor. moeclay
categories: ruby
---

<div>
<p><b>Migrasi CSS to SASS</b></p>
<p>SASS adalah SASS(Sassy Stylesheet) memberi kemudahan seperti tidak usah menulis kurung buka /tutup, dan juga tidak perlu menulis titik koma diakhir sintaks. Dengan menggunakan SASS sendiri memudahkan kita dalam menulis CSS seperti penggunaan variabel, nesting, mixins , selector inheritance dll.</p>

<p>Keunggulan lainnya seperti CSS yang lebih tersutruktur, rapi, mudah dipahami, dan yang paling penting dapat berjalan baik di semua browser. </p>

<p><b>Cara Install sass:</b></p>
{% highlight bash %}
gem install sass
{% endhighlight %}

<p><b>Menjalankan Simple Server Ruby:</b></p>
{% highlight bash %}
$ ruby -run -e httpd . -p 8008
{% endhighlight %}

<p><b>Membuild scss secara realtime:</b></p>
{% highlight bash %}
$ sass --watch style.scss:style.css
{% endhighlight %}

<br/>
<p><b>Latihan Dengan Script</b></p>
<p>Buat 2 buah script: index.html dan style.scss</p>
<p>file: index.html</p>
{% highlight html%}
<html>
   <head>
      <title> Import example of sass</title>
      <link rel = "stylesheet" type = "text/css" href = "style.css"/>
   </head>

   <body>
      <h1>Simple Example</h1>
      <h3>Welcome to TutorialsPoint</h3>
      <p class = "class1">Welcome to Tutorialspoint!!!</p>
      <p class = "class2">SASS stands for Syntactically Awesome Stylesheet...</p>
      <br>
      <p class = "tutorialpoint">Tutorial point posting.</p>
      <p class = "lastname">Reza R</p>
   </body>
</html>
{% endhighlight %}

<p>file: style.scss</p>
{% highlight css %}
$version: "1.2";
$author: "Moeclay IO";
$txtcolor: 'yellow';
$fontSize: 20px;
$txtbg: #aaa;
$name: "tutorialpoint";

/*
* Author: #{$author}
* Dokumentation version: #{$version}.
*/

body{
  background-color: #333;
}

h1{
   color: #fff;
}

h3{
   color: #DE5E85;
}

p{
  color: #{$txtcolor};
  font-size:$fontSize;
}

p.#{$name}{
  padding: 5px;
  background-color: #{$txtbg};
  color: #000;
}

p.lastname{
  color: hsl(290,60%,70%);
}
{% endhighlight %}
</div>
