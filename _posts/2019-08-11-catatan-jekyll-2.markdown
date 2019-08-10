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

<code>
	{% highlight bahasa %}
	{% endhighlight %}
</code>
<br>
Beberapa bahasa pemrograman yang didukung :

* Cucumber (‘*.feature’)
* abap (‘*.abap’)
* ada (‘.adb’, ‘.ads’, ‘*.ada’)
* ahk (‘.ahk’, ‘.ahkl’)
* apacheconf (‘.htaccess’, ‘apache.conf’, ‘apache2.conf’)
* applescript (‘*.applescript’)
* as (‘*.as’)
* as3 (‘*.as’)
* asy (‘*.asy’)
* bash (‘.sh’, ‘.ksh’, ‘.bash’, ‘.ebuild’, ‘*.eclass’)
* bat (‘.bat’, ‘.cmd’)
* befunge (‘*.befunge’)
* blitzmax (‘*.bmx’)
* boo (‘*.boo’)
* brainfuck (‘.bf’, ‘.b’)
* c (‘.c’, ‘.h’)
* cfm (‘.cfm’, ‘.cfml’, ‘*.cfc’)
* cheetah (‘.tmpl’, ‘.spt’)
* cl (‘.cl’, ‘.lisp’, ‘*.el’)
* clojure (‘.clj’, ‘.cljs’)
* cmake (‘*.cmake’, ‘CMakeLists.txt’)
* coffeescript (‘*.coffee’)
* console (‘*.sh-session’)
* control (‘control’)
* cpp (‘.cpp’, ‘.hpp’, ‘.c++’, ‘.h++’, ‘.cc’, ‘.hh’, ‘.cxx’, ‘.hxx’, ‘*.pde’)
* csharp (‘*.cs’)
* css (‘*.css’)
* cython (‘.pyx’, ‘.pxd’, ‘*.pxi’)
* d (‘.d’, ‘.di’)
* delphi (‘*.pas’)
* diff (‘.diff’, ‘.patch’)
* dpatch (‘.dpatch’, ‘.darcspatch’)
* duel (‘.duel’, ‘.jbst’)
* dylan (‘.dylan’, ‘.dyl’)
* erb (‘*.erb’)
* erl (‘*.erl-sh’)
* erlang (‘.erl’, ‘.hrl’)
* evoque (‘*.evoque’)
* factor (‘*.factor’)
* felix (‘.flx’, ‘.flxh’)
* fortran (‘.f’, ‘.f90’)
* gas (‘.s’, ‘.S’)
* genshi (‘*.kid’)
* glsl (‘.vert’, ‘.frag’, ‘*.geo’)
* gnuplot (‘.plot’, ‘.plt’)
* go (‘*.go’)
* groff (‘.(1234567)’, ‘.man’)
* haml (‘*.haml’)
* haskell (‘*.hs’)
* html (‘.html’, ‘.htm’, ‘.xhtml’, ‘.xslt’)
* hx (‘*.hx’)
* hybris (‘.hy’, ‘.hyb’)
* ini (‘.ini’, ‘.cfg’)
* io (‘*.io’)
* ioke (‘*.ik’)
* irc (‘*.weechatlog’)
* jade (‘*.jade’)
* java (‘*.java’)
* js (‘*.js’)
* jsp (‘*.jsp’)
* lhs (‘*.lhs’)
* llvm (‘*.ll’)
* logtalk (‘*.lgt’)
* lua (‘.lua’, ‘.wlua’)
* make (‘.mak’, ‘Makefile’, ‘makefile’, ‘Makefile.’, ‘GNUmakefile’)
* mako (‘*.mao’)
* maql (‘*.maql’)
* mason (‘.mhtml’, ‘.mc’, ‘*.mi’, ‘autohandler’, ‘dhandler’)
* modelica (‘*.mo’)
* modula2 (‘.def’, ‘.mod’)
* moocode (‘*.moo’)
* mupad (‘*.mu’)
* mxml (‘*.mxml’)
* myghty (‘*.myt’, ‘autodelegate’)
* nasm (‘.asm’, ‘.ASM’)
* newspeak (‘*.ns2’)
* objdump (‘*.objdump’)
* objectivec (‘*.m’)
* objectivej (‘*.j’)
* ocaml (‘.ml’, ‘.mli’, ‘.mll’, ‘.mly’)
* ooc (‘*.ooc’)
* perl (‘.pl’, ‘.pm’)
* php (‘.php’, ‘.php(345)’)
* postscript (‘.ps’, ‘.eps’)
* pot (‘.pot’, ‘.po’)
* pov (‘.pov’, ‘.inc’)
* prolog (‘.prolog’, ‘.pro’, ‘*.pl’)
* properties (‘*.properties’)
* protobuf (‘*.proto’)
* py3tb (‘*.py3tb’)
* pytb (‘*.pytb’)
* python (‘.py’, ‘.pyw’, ‘.sc’, ‘SConstruct’, ‘SConscript’, ‘.tac’)
* rb (‘.rb’, ‘.rbw’, ‘Rakefile’, ‘.rake’, ‘.gemspec’, ‘.rbx’, ‘.duby’)
* rconsole (‘*.Rout’)
* rebol (‘.r’, ‘.r3’)
* redcode (‘*.cw’)
* rhtml (‘*.rhtml’)
* rst (‘.rst’, ‘.rest’)
* sass (‘*.sass’)
* scala (‘*.scala’)
* scaml (‘*.scaml’)
* scheme (‘*.scm’)
* scss (‘*.scss’)
* smalltalk (‘*.st’)
* smarty (‘*.tpl’)
* sourceslist (‘sources.list’)
* splus (‘.S’, ‘.R’)
* sql (‘*.sql’)
* sqlite3 (‘*.sqlite3-console’)
* squidconf (‘squid.conf’)
* ssp (‘*.ssp’)
* tcl (‘*.tcl’)
* tcsh (‘.tcsh’, ‘.csh’)
* tex (‘.tex’, ‘.aux’, ‘*.toc’)
* text (‘*.txt’)
* v (‘.v’, ‘.sv’)
* vala (‘.vala’, ‘.vapi’)
* vbnet (‘.vb’, ‘.bas’)
* velocity (‘.vm’, ‘.fhtml’)
* vim (‘*.vim’, ‘.vimrc’)
* xml (‘.xml’, ‘.xsl’, ‘.rss’, ‘.xslt’, ‘.xsd’, ‘.wsdl’)
* xquery (‘.xqy’, ‘.xquery’)
* xslt (‘.xsl’, ‘.xslt’)
* yaml (‘.yaml’, ‘.yml’)
</div>

<div>
	<p><b>3. Templating Jekyll</b></p>
	<p>Jekyll menggunakan templating yang bernama liquid. Untuk dokumentasinya lihat di [Liquid Website][ref2].</p>
</div>

[ref1]: https://jekyllrb.com
[ref2]: https://shopify.github.io/liquid/