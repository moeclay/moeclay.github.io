---
layout: post
title: Mengenal Framework Slim
date: 2019-08-12 00:52:00
author: doctor. moeclay
categories: framework-php
---

<div>
<p><b>Selamat Datang</b></p>
<p>Slim adalah kerangka kerja mikro PHP yang membantu anda dengan cepat menulis aplikasi web dan API yang sederhana dan kuat.</p>
<p>Pada Intinya, Komunikasi permintaan HTTP dan menjalankan aturan dan mengembalikan respons HTTP.</p>

{% highlight php %}
<?php
require __DIR__.'/vendor/autoload.php';

// config slim app
$config = [
  'settings' => ['addContentLengthHeader' => false]
];

$app = new \Slim\App($config);

// define app
$app->get('/hello/{name}', function($request, $response, $args){
  return $response->write("Hello ".$args['name']);
});

// run app
$app->run();
{% endhighlight %}
</div>
