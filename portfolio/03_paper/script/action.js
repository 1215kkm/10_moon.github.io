$(document).ready(function(){
    $('.gnb li').mouseover(function(){
        $(this).find('.lnb').show();
    });
    $('.gnb li').mouseout(function(){
        $('.lnb').hide();
    });    


    $(window).scroll(function(){
        var scrT = $(this).scrollTop();
        var winH = $(window).height();

        console.log(scrT/500);
        $('#visual iframe').css({opacity:1-(scrT/500)});
        $('.text_box').css({marginTop:scrT/2});
        $('#visual .overlay').css({opacity:0+(scrT/500)});
    
        if(scrT >= winH){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        };
    });

    /* $('.list_img li').mouseenter(function(){
        var imgSrc = $(this).find('img').attr('src');
        var imgAlt = $(this).find('img').attr('alt');
        console.log(imgSrc)
        $('.big_img img').attr('src',imgSrc);
        $('.big_img img').attr('alt',imgAlt);

        $(this).addClass('active').siblings().removeClass('active');
    });


    var rollingIndex = 0;
    function rollingImg(){
        rollingIndex++;
        if(rollingIndex == 4){
            rollingIndex = 0;
        }
        var listSrc = $('.list_img li').eq(rollingIndex).find('img').attr('src');
        $('.big_img img').attr('src', listSrc);
        console.log(listSrc);
    }
    var autoRollingImg = setInterval(rollingImg, 2000);
    //clearInterval()
 */


    /* $('#section2 .brand_img').mouseover(function(){
        $(this).find('li .cover').show();
    }) */


});