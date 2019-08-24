---
layout: post
title: Remote Desktop tanpa Password W7
date: 2019-08-24 11:00:00
author: doctor. moeclay
categories: windows
---

<div>
Dalam beberapa kasus kita ingin mengakses remote desktop tanpa password di windows.
Berikut Caranya :
<p><b>menggunakan gpedit.msc</b></p>
- Click Start
- Cari aplikasi "Run.exe"
- Isi dengan "gpedit.msc"
- Selanjutnya "OK" 
<br>
maka akan muncul jendela "Group Policy Editor"
<br>
- Open Computer Configuration
- Windows Settings
- Security Settings
- Local Policies
- Security Options
- Accounts: Limit local account use of blank passwords to console logon only
<br>
ubah nilainya menjadi "Disabled" kemudia "OK".
<br>
- tutup "Group Policy Editor".


<br>
<p><b>menggunakan Regedit.exe</b></p>
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa]
"LimitBlankPasswordUse"=dword:00000000
<br>

Tapi jika cara diatas tidak berhasil anda lakukan, sebaiknya buat password windows.
Itu lebih baik.
</div>


