// 함 클릭시 색상변경
$(".y_check_box img").click(function(){
    $(this).css({opacity:1}).siblings().css({opacity:0});
    $(".bt_gr button").css({"background-color": "#FFC500"});
});

// 버튼 클릭시 팝업 변경
$(".bt_gr button").click(function(){
    popupOpen();
});