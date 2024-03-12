// 클릭시 다른 택배사 어둡게
$(".main_contents ul li").click(function(){
    $(this).css({opacity:"1"});
    $(this).siblings().css({opacity:"0.5"}).parent().siblings().children().css({opacity:"0.5"});
    $(".bt_gr button").css({"background-color":"#FFC500", color:"#000"})
});