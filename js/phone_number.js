// input값 입력시 버튼 색상 변경
$(".number_wrap ul li").on("click", function() { phoneCheck(); });

function phoneCheck(){
    if( $("#phone_first").val() && $("#phone_second").val() ) {
        $(".bt_gr button").css({"background-color":"#FFC500", color:"#000"});
    }

}
