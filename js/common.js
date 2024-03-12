// 홈버튼 이미지 변경
$(".home_bt").mouseover(function(){
    $(this).children().attr("src","./img/home_on.svg");
}).mouseout(function(){
    $(this).children().attr("src","./img/home_off.svg");
});

$(".home_bt").click(function(){
    $(this).children().attr("src","./img/home_on.svg");
    home(); //홈버튼 클릭시 홈으로 이동
});

// 뒤로가기 버튼 이미지 변경
$(".back_bt").mouseover(function(){
    $(this).children().attr("src","./img/back_bt_on.png");
}).mouseout(function(){
    $(this).children().attr("src","./img/back_bt.png");
});

$(".back_bt").click(function(){
    $(this).children().attr("src","./img/back_bt_on.png");
    back();
});


// 홈버튼 이동
function home() {
    window.location.href = './main.html';
}
// 뒤로가기 버튼 이동
function back() {
    window.location.href = 'javascript:history.back();';
}