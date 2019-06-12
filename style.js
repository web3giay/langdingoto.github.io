

$(document).ready(function(){
    $(".menu-top .divMenu").click(function(){
       if(! $(this).parents(".menu-top").hasClass("show")){
           $(this).parents(".menu-top").addClass("show");
       }else{
           $(this).parents(".menu-top").removeClass("show");
       }
    });
    $(window).bind('click',function(e){
        var $clicked = $(e.target);
        if(! $clicked.parents().hasClass("menu-top")){
            $(".menu-top").removeClass("show");
        }
    });
});

$(document).ready(function(){
    $(".mmMenu ul li").each(function(){
        var countsize = $(this).find("ul li").size();
        if(countsize > 0){
            $(this).find("a:first").wrap("<div class='m-sub'></div>");
            $(this).find(".m-sub:first").append("<div class='button-submenu'></div>")
        }
    });
    $(".mmMenu ul li ul").css({'display':'none'});
    $(".mmMenu ul li .button-submenu").click(function(){
        if(! $(this).hasClass("show")){
            $(this).parent().parent().find("ul:first").stop().slideToggle(700);
            $(this).addClass("show");
            $(this).parent().parent().siblings().each(function(){
                if($(this).find(".m-sub:first").find(".button-submenu").hasClass("show")){
                    $(this).find("ul:first").stop().slideToggle(700);
                    $(this).find(".m-sub:first").find(".button-submenu").removeClass("show");
                }
            });
        }else{
            $(this).parent().parent().find("ul:first").stop().slideToggle(700);
            $(this).removeClass("show");
        }
    });
    $(".menu_mobile .icon_menu").click(function(event) {
        if(! $(this).parents(".menu_mobile").hasClass("showmenu")){
            $(".menu_mobile").find(".divmm").addClass('show');
            $('.menu_mobile').addClass("showmenu");
            $('html,body').addClass("openmenu");
        }else{
            $(".menu_mobile").find(".divmm").removeClass('show');
            $('.menu_mobile').removeClass("showmenu");
            $('html,body').removeClass("openmenu");
        }
    });
    $(".menu_mobile .divmm .divmmbg , .menu_mobile .divmm .mmContent .close-mmenu").click(function(event) {
        $(this).parents(".menu_mobile").find(".divmm").removeClass('show');
        $('body').removeClass("openmenu");
        $('.menu_mobile').removeClass("showmenu");
        setTimeout(function() {
            $('html').removeClass("openmenu");
        }, 500);
    });
    $(window).resize(function(){
        if($(window).innerWidth() > 1024){
            $(".menu_mobile").find(".divmm").removeClass('show');
            $('.menu_mobile').removeClass("showmenu");
            $('html,body').removeClass("openmenu");
        }
    });
});
