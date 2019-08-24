---
layout: post
title: Remote Desktop tanpa Password W7
date: 2019-08-24 11:00:00
author: doctor. moeclay
categories: windows
---

<div>
<p>Dalam beberapa kasus kita ingin mengakses remote desktop tanpa password di windows.
Berikut Caranya :</p>
<p><b>menggunakan gpedit.msc</b></p>
<ul>
<li>Click Start</li>
<li>Cari aplikasi "Run.exe"</li>
<li>Isi dengan "gpedit.msc"</li>
<li>Selanjutnya "OK" </li>
</ul>
<br>
<p>maka akan muncul jendela "Group Policy Editor"</p>
<br>
<ul>
<li>Open Computer Configuration</li>
<li>Windows Settings</li>
<li>Security Settings</li>
<li>Local Policies</li>
<li>Security Options</li>
<li>Accounts: Limit local account use of blank passwords to console logon only</li>
</ul>
<br>
<p>ubah nilainya menjadi "Disabled" kemudia "OK".</p>
<br>
<p>tutup "Group Policy Editor".</p>


<br>
<p><b>menggunakan regedit.exe</b></p>
{% highlight batch %}
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa]
"LimitBlankPasswordUse"=dword:00000000
{% endhighlight %}
<br>
<p>Tapi jika cara diatas tidak berhasil anda lakukan, sebaiknya buat password windows.
Itu lebih baik.</p>
</div>


