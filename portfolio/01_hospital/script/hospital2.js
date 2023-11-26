$('.lang_select').click(function(){
    $('.lang ul').show();
});

$('.lang ul li').click(function(){
    var merong = $(this).text();
    $('.lang_select i').text(merong)
    $('.lang ul').hide();
});


$('.gnb').mouseenter(function(){
    $('.lnb').show();
    $('.lnb_bg').show();
})
$('.lnb_bg').mouseleave(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
});

$('h1, .lang, .topmenu').mouseenter(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
});


$('.btn_search').click(function(){
    $('#search_wrap').slideToggle(300);
    $('#search_wrap input').focus().val('');
    $('.search_modal').fadeToggle();
});


$('#section01 .tit_box li').click(function(){
    var liDataName = $(this).attr('data-name');
    console.log(liDataName)
    $('.article ul').hide();
    $('.article ul.'+liDataName).show();

    $('#section01 .tit_box li').removeClass('on')
    $(this).addClass('on');

    return false;

});