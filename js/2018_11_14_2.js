$(function () {


$("#ul2").css({
    "list-style":"none"

})
$("#ul2 li").css({
    "display":"table-cell",
    "background-color":"#2CA9AB",
    "color":"white",
    "width":"60px",
    "height":"30px",
    "font-size":"13px",
    "text-align":"center",
    "vertical-align":"middle"

})

$("li").on({
    mouseover:function(){
        $(this).css("background-color","#147B81")
    },
    mouseout:function(){
        $("li").css("background-color","#2CA9AB")
    }
})
    $("table tr,td").css({
        "border":"1px solid black",
        "font-size":"13px"
    })
    $("#td2,#td3,#td4,#td5,#delete,#td6").css({
        "text-align":"center",
        "vertical-align":"middle"
    })
    $("#delete").css({
        "text-decoration":"underline",
    })
    $("#td1,#td3").css({
        "height":"20px",
        "width":"50px"
    })
    $("#td2").css({
        "height":"20px",
        "width":"80px"
    })
    $("#td4").css({
        "height":"20px",
        "width":"60px"
    })
    $("#td5").css({
        "height":"20px",
        "width":"40px"
    })
    $("#td6").css({
        "height":"70px",
        "width":"20px"
    })
    $("#divV").css({
        "height":"100px",
        "width":"170px",
        "border":"1px solid black",
        "margin-left":"300px"
    })
    $("#divV").css("display","none")
    $("#delete").on({
        click:function(){
        $("#divV").slideDown("show")
        },
        mouseover:function(){
            $("#delete").css({ "cursor":"pointer"})
    }})
     var checkb1 = document.getElementById("checkbox1");
    var checkb2 = document.getElementById("checkbox2");
    $("#sub1").click(function(){
         ;
        if(true == $("#checkbox1").prop("checked") |  $("#checkbox2").prop("checked")) {

            $("#tr2").css("display", "none")
            $("#divV").css("display", "none")
        }else{
            alert("请选中要删除的商品");
        }
    })
    $("#sub2").click(function(){
        $("#divV").css("display","none")
    })
    checkb1.onclick = function(){
        if(true == checkb1.checked){
            checkb2.checked= true;
        }else{
            checkb2.checked = false;
        }
    }

    $("#question").css({
        "height":"20px",
        "width":"200px",
        "fon-size":"13px",
        "color":"gray",
        "background-color":"white"
    })
    $("#answer").css({
        "height":"60px",
        "width":"150px",
        "fon-size":"13px",
        "color":"black",
        "display":"none"
    })
    $("#question").click(function(){
        $("#answer").toggle();
    })
    $("#question").on({
        mouseover:function(){
            $("#question").css({ "background-color":"#D9EFED","color":"green"})
        },
        mouseout:function(){
            $("#question").css({ "background-color":"white","color":"gray"})
        }
    })

})