$(window).load(function() {
    $('.loader-icon').removeClass('spinning-cog').addClass('shrinking-cog');
    $('.loader-background').delay(500).fadeOut(); 
});


$(document).ready(function() {
    new GoodParallax ().init ({
        speed: 1.5
    });

    $(document).scroll(function() {
        var y = $('body').scrollTop();
        var var_static = $('header').height();
        
        var x = (100-(y*100/var_static))/100;

        $('.header-center').css('opacity', x);

        if(y >= 50) {
            $('.main-navbar').addClass('active');
        } else if (y < 50) {
            $('.main-navbar').removeClass('active');
        }

        var windscroll = $(window).scrollTop();
        $('.link').each(function(i) {
            if ($(this).position().top <= windscroll+62) {
                $('.main-navbar').find('a.active').removeClass('active');
                $('.main-navbar').find('a').eq(i).addClass('active');
            }
        });
    });

    var top = 62;
    $(window).resize(function() {
        changeTop();
        console.log('resize');
    });
    changeTop();

    function changeTop() {
        if($(document).width() > 770)
            top = 62;
        else
            top = 0;
    }

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-top
                }, 1000);
                return false;
            }
        }
        });
    });

    var scrollTime = 0.4;
    var scrollDistance = 200;

    var $window = $(window);
    $window.on ("mousewheel DOMMouseScroll", function (event) {
        
        event.preventDefault ();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop ();
        var finalScroll = scrollTop - parseInt (delta*scrollDistance);

        TweenMax.to ($window, scrollTime, {
            scrollTo: { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
        });
    });


    var navbar = false;
    $('.main-navbar').find('a').on('click', function() {
        $('.main-navbar').removeClass('fix');
        navbar = false;
    });


    $('.contact_form').on('submit', function(e) {
        $('.contact_form_close').addClass('active');
        $(this).animate({
            opacity: 0,
            height: 0
        }, 500, function() {
            $(this).css('display', 'none');
        });

        e.preventDefault();
    });

    $('.navbar-button').on('click', function() {
        if(!navbar) {
            $('.main-navbar').addClass('fix');
            /*$('.main-navbar').animate({
                top: 0
            });*/
            navbar = true;
        } else if (navbar) {
            $('.main-navbar').removeClass('fix');
            /*$('.main-navbar').animate({
                top: -300
            });*/
            navbar = false;
        }
    });
});
