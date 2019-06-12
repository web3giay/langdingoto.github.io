$(document).ready(function(){

    $('#slide-row9').addClass("active");

    $('.sub-slide-oto').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        fade: true,
        autoplaySpeed: 5000,
        speed: 800,
        pauseOnHover: false
    });

    $('#slide-row8').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        fade: true,
        autoplaySpeed: 5000,
        speed: 800,
        pauseOnHover: false
    });

    $('#slide-row9').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
        fade: true,
        autoplaySpeed: 5000,
        speed: 800,
        pauseOnHover: false
    });

    //CAL HEIGHT
    $(window).on("resize load",function(){
        var w_height = $(window).outerHeight();
        var h3 = $(".title-row2").outerHeight();
        var h4 = (w_height - h3) / 2;
            $('.product .wrap_item').css({'height':h4+'px'});
            $('#slide-row8').css({'height' : w_height + 'px'});
        if($(window).innerWidth()>1024){
            var h1 = $("#header").outerHeight();
            var h2 = $("#sologan").outerHeight();

            var h_cal= w_height - (h1 + h2);
            $(".banner-slide").css({"height":h_cal});
            console.log(h_cal);
        }
        else{
            $(".banner-slide").css({"height":"auto"});
            $(".section").find(".lazyloading").addClass("show");
        }
    });
    $('#vnt-container').fullpage({
        scrollOverflow: true,
        verticalCentered: true,
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1025,
        afterLoad: function(index, nextIndex, direction){
            $("#vnt-container .fp-section.active").find(".lazyloading").addClass("show");
        },
    });
    $(window).on("load resize",function(){
        if($(window).innerWidth() < 1025){
            $.fn.fullpage.setResponsive(true);
        }
        else{
            $.fn.fullpage.setResponsive(false);
        }
    });

    $(window).on("resize load",function(){
         var w_height = $(window).outerHeight();
        var h1 = $(".title-row2").outerHeight();
        var h2 = (w_height - h1) / 2;
            $('.product .wrap_item').css({'height':h2+'px'});
            $('#slide-row8').css({'height' : w_height + 'px'});
    });

    $(function(){
      $("#aaa").twentytwenty({
        no_overlay: true //Do not show the overlay with before and after
      });
    });
    $(window).load(function () {
$('.twentytwenty-container').eq(0).twentytwenty({ default_offset_pct: 0.5 });
$('.twentytwenty-container').eq(1).twentytwenty();
});
    // });

    // LAZYLOADING

    $("#vnt-row1 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row2 .lazyloading").each(function(){
        var time1 = (Math.random());
            $(this).find(".product .wrap_item .item").each(function(){
            $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
        });
    });

    $("#vnt-row3 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#bbb .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row5 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row5a .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row5b .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row6 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row7 .lazyloading").each(function(){
        var time1=0.3;
        $(this).find(".box-row7 .sub-box").css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row8 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row9 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row10 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

    $("#vnt-row11 .lazyloading").each(function(){
        var time1=0.3;
        $(this).css({"transition-delay":time1+"s"});
            time1+=0.3;
    });

});




