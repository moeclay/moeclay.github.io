$(document).ready(function(){
    $('.photo img').click(function(){
        $('.zoom').remove();
        var src = $(this).attr('src');
        var title = $(this).attr('title');
        
        // lihat photo
        $('<div class="perbesar"><img src="'+src+'"/><p>'+title+'</p><span class="tutup">tutup</span></div>').appendTo('body').hide().fadeIn('slow');

        // tututp photo
        $('.tutup').click(function(){
            $('.perbesar').fadeOut('slow');
        });
    });

    // social media
    var socials = ["Facebook", "Instagram", "Github"];
    var socials_link = [
        "https://www.facebook.com/moe.clay.io",
        "https://www.instagram.com/moe.clay.io/",
        "https://github.com/moeclay"
    ];
    var i = 0;
    var str = '';
    while (i < socials.length) {
        str += '<a target="_blank" href="'+socials_link[i]+'"><img src="images/'+socials[i].toLowerCase()+'.png" alt="'+socials[i]+'" /></a>';
        i++;
    }
    
    // sisipkan ke html
    $(str).appendTo( ".social" );
});