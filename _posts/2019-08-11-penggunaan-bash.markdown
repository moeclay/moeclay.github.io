---
layout: post
title: Perintah Bash Linux
date: 2019-08-11 13:00:00
author: doctor. moeclay
categories: bash
---

<div>
<p><b>1. Looping</b></p>
<p>Perintah ini digunakan untuk membuat perulangan dalam script bash.</p>

{% highlight bash  %}
#!/bin/bash
echo "Bash version ${BASH_VERSION}"
for i in {0..10..2}
do
  echo "welcome $i times"
done
{% endhighlight %}

</div>
<div>
<p><b>2. Alias</b></p>
<p>Perintah ini digunakan untuk memanipulasi perintah bash</p>

{% highlight bash %}
alias c='clear'
alias blog='cd /home/alex/blog'
{% endhighlight %}

<p>Untuk membatalkan alias bisa menggunakan : </p>

{% highlight bash %}
unalias c
unalias blog
{% endhighlight %}

</div>
<div>
<p><b>3. Privileged Access</b></p>
<p>Untuk menggunakan command alias tanpa menggunakan perintah root.</p>

{% highlight bash %}
if [ $UID -ne 0 ]; then
  alias update='sudo apt-get update'
  alias upgrade='sudo apt-get upgrade'
fi
{% endhighlight %}

</div>
