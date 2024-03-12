// 팝업 이동
function popupOpen(){
    $(".popup_open_wrap").animate({bottom:"0"},'slow');
    $(".bt_gr button").css({"background-color":"#DCDCDC"});
}

function popupDown(){
    $(".popup_open_wrap").animate({bottom:"-800"},'slow');
    $(".y_check_box img").animate({opacity:0});
}

function popupOpenLong(){
    $(".popup_open_long_wrap").animate({bottom:"0"},'slow');
    $(".bt_gr button").css({"background-color":"#DCDCDC"});
}

function popupDownLong(){
    $(".popup_open_long_wrap").animate({bottom:"-1580"},'slow');
    $(".y_check_box img").animate({opacity:0});
}

function popupOpenSide(){
    $(".popup_open_side_wrap").animate({left:"35"},'slow');
    $(".bt_gr button").css({"background-color":"#DCDCDC"});
}

function popupDownSide(){
    $(".popup_open_side_wrap").animate({left:"-610"},'slow');
    $(".bt_gr button").css({"background-color":"#DCDCDC"});
}

