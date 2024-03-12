$(".bt_gr").click(function(){
    popupOpenLong();
});

$(".content_box ul li").click(function(){
    $(this).css({"background-color":"#FFD600"}).siblings().css({"background-color":""});
    $(this).children(".point").css({"background-color":"#fff"});
    $(this).siblings().children(".point").css({"background-color":""});
});
