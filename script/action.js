$(document).ready(function(){
    $('.menu li').eq(0).click(function(){
        $('.detail').show();
        $('.banner01').hide();
        $('.banner02').hide();

        $('.menu li').eq(0).addClass('on');
        $('.menu li').eq(1).removeClass('on');
        $('.menu li').eq(2).removeClass('on');
    })
    $('.menu li').eq(1).click(function(){
        $('.detail').hide();
        $('.banner01').show();
        $('.banner02').hide();

        $('.menu li').eq(0).removeClass('on');
        $('.menu li').eq(1).addClass('on');
        $('.menu li').eq(2).removeClass('on');
    })
    $('.menu li').eq(2).click(function(){
        $('.detail').hide();
        $('.banner01').hide();
        $('.banner02').show();

        $('.menu li').eq(0).removeClass('on');
        $('.menu li').eq(1).removeClass('on');
        $('.menu li').eq(2).addClass('on');
    })

        
    $('.gnb li,.side-nav li').click(function(){
        let gnbIndex = $(this).index();
        let secTop = $('.section_wrap section').eq(gnbIndex).offset().top;

        $(this).addClass('on').siblings().removeClass('on');
        $('html, body').animate({scrollTop:secTop},500)
    });
     
    /* 현재 섹션 위치표시 */
    $(window).scroll(function(){
        let scrT = $(window).scrollTop();
        let sec1T = $('.section_wrap section').eq(1).offset().top;
        let sec2T = $('.section_wrap section').eq(2).offset().top;
        let sec3T = $('.section_wrap section').eq(3).offset().top;
        let sec4T = $('.section_wrap section').eq(4).offset().top;
        
        if(scrT >= 0){
            $('.side-nav li').eq(0).addClass('on').siblings().removeClass('on')
        }
        if(scrT >= sec1T){
            $('.side-nav li').eq(1).addClass('on').siblings().removeClass('on')
        }
        if(scrT >= sec2T){
            $('.side-nav li').eq(2).addClass('on').siblings().removeClass('on')
        }
        if(scrT >= sec3T){
            $('.side-nav li').eq(3).addClass('on').siblings().removeClass('on')
        }
        if(scrT >= sec4T){
            $('.side-nav li').eq(4).addClass('on').siblings().removeClass('on')
        }
    })



    $('.gallery li a').click(function(){
        let galleryImgSrc = $(this).find('img').attr('src');
        let galleryFullSrc = galleryImgSrc.replace('.jpg','_full.jpg');

        console.log(galleryFullSrc)
        $('.gallery_bg').fadeIn(100);
        $('.gallery_bg img').attr('src',galleryFullSrc)

    })
    $('.gallery_bg').click(function(){
        $(this).fadeOut(100)
    })

});





