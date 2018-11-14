$(document).ready(function(){
    $("#div1").css(
        {
            "width":"100px",
            "height":"100px",
            "background-color":"red"
        }
    )

    $("div").css("color","red")
    //子代
    $("table th").css({
        "color":"red",
        "font-size":"20px"
    })
    //选最后一个
    $("tr:last").css("color","blue")
    //odd
    $("tr:odd").css("background-color","#ffd")
    //even
    $("tr:even").css("background-color","#ddf")
    //1-4(lt,gt,eq)
    $("tr:lt(5)").css("font-size","14px")
    //5-
    $("tr:gt(4)").css("font-size","12px")
    //
    $("hn").css("font-size","30px")
    //<p>

    $("p").click(
        function(){
            alert("ppppp");
        })

    $("#answer").css({
        "display":"none",
        "width":"100px",
        "height":"100px",
        "background-color":"black"
    })
    $("#question").click(function(){
        $("#answer").css("display","block")
    })
   /* $(document).click(function(){
        $("#answer").css("display","none")
    })*/


   $("#dAll").css({
       "width":"100px",
       "height":"200px",

   })
    $("#d1").css({
        "width":"10px",
        "height":"30px",
        "background-color":"orange",
        "display":"inline-block"
    })
    $("#d2").css({
        "width":"90px",
        "height":"30px",
        "background-color":"gray",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "color":"black",
        "cursor":"pointer"
    })
    $("#d11").css({
        "width":"100px",
        "height":"30px",
        "display":"flex"
    })
    $("#d3").css({
        "width":"100px",
        "height":"30px",
        "background-color":"gray",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "color":"black"
    })
    $("#d4").css({
        "width":"100px",
        "height":"30px",
        "background-color":"gray",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "color":"black"
    })
    $("#d5").css({
        "width":"100px",
        "height":"30px",
        "background-color":"gray",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "color":"black"
    })
    $("#dbll").css({
        "width":"100px",
            "height":"90px",
            "background-color":"gray",
            "justify-content":"center",
            "align-items":"center",
            "color":"black",
            "display":"none"
    })

    $("#d11").click(function(){
        $("#dbll").toggle()/*css("display","block")*/
    })

    $("#d3").on({
        "mouseover":function(){
            $("#d3").css({
                "background-color":"orange",
                "cursor":"pointer"
            })
        },
        "mouseout":function(){
            $("#d3").css("background-color","gray")
        }
    })
    $("#d4").on({
        "mouseover":function(){
            $("#d4").css({
                "background-color":"orange",
                "cursor":"pointer"
            })
        },
        "mouseout":function(){
            $("#d4").css("background-color","gray")
        }
    })
    $("#d5").on({
        "mouseover":function(){
            $("#d5").css({
                "background-color":"orange",
                "cursor":"pointer"
            })
        },
        "mouseout":function(){
            $("#d5").css("background-color","gray")
        }
    })

    $("#table2 ").css({
        "width":"120px",
        "height":"60px",
        "color":"black",
        "background-color":"white"
    })
    $("#table2 td:eq(1)").css({
        "width":"80px",
        "height":"20px",
        "color":"black",
        "background-color":"white"
    })
    $("#username").css({
        "background-color":"white"
    })
    $("#username").focus(function(){
          $("#username").css({
              "border":"1px solid red"
          })

    })
    $("#password").focus(function(){
        $("#password").css({
            "border":"1px solid red"
        })

    })
    $("#verify").focus(function(){
        $("#verify").css({
            "border":"1px solid red"
        })

    })








})

