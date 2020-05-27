---
layout: post
title:  "[windows] Lupa Password Windows Server"
date:   2020-05-27 14:16:00
author: doctor. moeclay
categories: windows
---
<div>
<p>Persiapan:</p>
<ul>
  <li>DVD Installation Windows Server</li>
</ul>
</div>

<br>

<div>
<p>Langkah-Langkah:</p>
<p>1. Masuk ke boot windows dvd installation server, (SHIFT+F10) akan terbuka command prompt</p>
<p>2. Masuk ke installation windows (c:\Windows\System32)</p>
<p>3. > ren Utilman.exe Utilman.exe.original </p>
<p>4. > copy cmd.exe Utilman.exe </p>
<p>5. > shutdown -r -t 0</p>
<br>
<p>6. Masuk ke OS Windows (c:\ bukan boot dvd)</p>
<p>7. (Windows Key+U) or Ease of Access akan terbuka command prompt</p>
<p>8. Update password > net user Administrator P@ssword123</p>
<br>
<p>*Password akan berubah, silahkan kembalikan lagi Utilman.exe, hapus(del Utilman.exe) and copy(ren Utilman.exe.original Utilman.exe)</p>
</div>
