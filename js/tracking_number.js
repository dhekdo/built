// 리스트 클릭시 색상 변경
$(".con_tracking li").click(function(){
    $(this).css({"background-color":"#FFD600"}).siblings().css({"background-color":""});
    $(this).children().css({color:"#000"}).parent().siblings().children().css({color:""});
    $(".popup_open_side_wrap .mini_bt_gr button").css({"background-color":"#FFD600"})
});

// 사이드 팝업 확인 버튼 클릭시 전체 팝업 오픈
$(".popup_open_side_wrap .mini_bt_gr").click(function(){
    $(".popup1").css({"z-index":"10"});
    $(".popup1").animate({opacity:1}); 
});

// 전체 팝업 확인 버튼 클릭시 팝업 닫기
$(".all_popup .mini_bt_gr").click(function(){
    $(".all_popup").animate({opacity:0}, function(){
        $(".all_popup").css({"z-index":"-10"});
    });
})

// 추가 수거 버튼 클릭시 전체 팝업 오픈
$(".box_wrap .plus_popup").click(function(){
    $(".popup2").css({"z-index":"10"});
    $(".popup2").animate({opacity:1}); 
});