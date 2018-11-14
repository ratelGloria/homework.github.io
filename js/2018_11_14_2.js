$(function () {


$("#ul2").css({
    "list-style":"none"

})
$("#ul2 li").css({
    "display":"table-cell",
    "background-color":"#2CA9AB",
    "color":"white"
})
$("#ul2 li").mouseover(function(){
    $("#ul2 li").css("background-color","#147B81")
})
})