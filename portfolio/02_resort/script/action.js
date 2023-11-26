$(document).ready(function(){
    var max = 0;
    $('.lnb').each(function(){
        var lnbH = $(this).outerHeight(true);
        if(max < lnbH){   //최대값구하기
            max = lnbH
        };
        $('.lnb_bg').height(max);
    });
    $('.gnb').mouseover(function(){
        var lnbPadding = $('.lnb').css('paddingTop');
        var lnbPadding = parseInt(lnbPadding);
        console.log(max-lnbPadding*2)

        $('.lnb').height(max-lnbPadding*2);
        $('.lnb, .lnb_bg').stop().slideDown(200);
    }).mouseleave(function(){
        $('.lnb, .lnb_bg').slideUp(200);
    });




    //window scroll
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        var visH = $('#visual_main').height();
        var winH = $(window).height();
        var sec4Top = $('#section4').offset().top;

        if(scrT >= visH-(winH/2)){
            $('#section1').addClass('on');
        } else {
            $('#section1').removeClass('on');
        }

        if(scrT >= visH-winH/4){
            $('#section2').addClass('on');
        } else {
            $('#section2').removeClass('on')
        }

        if(scrT >= sec4Top-(winH/2)){
            $('#section4').addClass('on');
        } else {
            $('#section4').removeClass('on');
        }
    })
    //scroll end
})