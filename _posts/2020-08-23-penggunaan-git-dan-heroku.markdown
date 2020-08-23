---
layout: post
title: Penggunaan GIT dan HEROKU
date: 2020-08-23 20:29:00
author: doctor. moeclay
categories: github
---
<p><b>Dokumentasi Default Git & Heroku</b></p>
```bash
# login heroku
$ heroku login 

# cloning projek
$ heroku git:clone -a myapp
```

<p><b>Buat Repository Baru:</b></p>
{% highlight bash %}
$ git init
{% endhighlight %}



<p><b>Periksa Repository:</b></p>
{% highlight bash %}
#buat salinan ke folder lokal
$ git clone /jalur/ke/repositori

#saat menggunakan server jarak-jauh
$ git clone namapengguna@host:/jalur/ke/repositori
{% endhighlight %}


<p><b>Struktur Folder Kerja:</b></p>
<p>Repositori lokal kamu terdiri dari tiga bagian pokok yang disebut "trees" dikelola oleh git.</p>
<ul>
<li>Direktori Kerja yang menyimpan berkas aktual.</li>
<li>Indeks yang berperan sebagai pengolah data.</li>
<li>HEAD yang mengarah pada komit terakhir</li>
</ul>



<p><b>Tambah dan Komit:</b></p>
{% highlight bash %}
#penambahan data ke index
$ git add <namaberkas>
$ git add *

#penambahan ke head
$ git commit -m "Pesan komit"
{% endhighlight %}



<p><b>Mengirim Perubahan:</b></p>
{% highlight bash %}
#mengirim ke repositori jarak jauh
#ubah maser sesuai cabang yg kamu inginkan
$ git push origin master

#jika berlum terkloning dan ingin dihubungkan ke server jarak jauh
$ git remote add origin <server>
{% endhighlight %}



<p><b>Percabangan:</b></p>
<p>Branching digunakan untuk mengembangkan fitur-fitur secara terisolasi. Cabang utama atau master merupakan cabang bawaan ketika kamu membuat repositori. Gunakan cabang lain untuk pengembangan, setelah selesai, gabungkan kembali ke cabang utama.</p>

{% highlight bash %}
#buat cabang baru dg nama "fitur_x" dan beralih ke dalamnya
$ git checkout -b fitur_x

#beralih kembali ke master
$ git checkout master

#hapus cabang yang tadi dibuat
$ git branch -d fitur_x

#suatu cabang tidak terbuka untuk yang lainnya kecuali jika kamu mengirimkannya ke repositori jarak-jauh.
$ git push origin <cabang>
{% endhighlight %}


<p><b>Perbarui & Gabung:</b></p>
{% highlight bash %}
#memperbarui repositori lokal ke comit terkini
$ git pull

#menggabungkan cabang lain ke cabang aktif
$ git merge <cabang>

#jika terjadi konflik, ubah berkas yg ditunjuk git dab mermarkahinya
$ git add <namaberkas>

#sebelum pergabungkan berlaku, lakukan tinjau
$ git diff <cabang_asal> <cabang_tujuan>
{% endhighlight %}


<p><b>Menandai:</b></p>
<p>Sangat dianjurkan membuat penanda atau tags untuk perangkat lunak yang dirilis.</p>
{% highlight bash %}
#membuat tag
$ git tag 1.0.0 1b2e1d63ff
{% endhighlight %}
<p>1b2e1d63ff adalah 10 karakter pertama dari identitas komit yang ingin kamu referensikan ke penanda.</p>


<p><b>Log:</b></p>
{% highlight bash %}
#pelajari log dasar
$ git log

#menambah sesuai parameter yg diinginkan
#misalnya: author
$ git log --author=moeclay

#tampil log yg dimampatkan
$ git log --pretty=oneline

#seluruh pohon percabangan ascii disertai nama penandanya
$ git log --graph --oneline --decorate --all

#melihat berkas yg berubah
$ git log --name-status

#dokumentasi lanjut
$ git log --help
{% endhighlight %}


<p><b>Mengembalikan Perubahan Lokal:</b></p>
{% highlight bash %}
#jika kamu membuat kesalahan, bisa mengembalikannya ke konten terakhir
$ git checkout -- <namaberkas>

#kembali berdasarkan git enkripsi
$ git reset --hard fc3238fc0d847b6e27ae1c6351884f61f06fdacf

#menggugurkan suutuhnya komit lokal, ambil riwayat terakhir server dan arahkan ke cabang master lokal
$ git fetch origin
$ git reset --hard origin/master
{% endhighlight %}


<p><b>Petunjuk Berguna:</b></p>
{% highlight bash %}
#gui git bawaan
$ gitk

#output git penuh warna
git config color.ui true

#menunjukan log satu baris per komit
$ git config format.pretty online

#menggunakan penambahan interaktif
git add -i
{% endhighlight %}
