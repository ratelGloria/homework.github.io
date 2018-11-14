window.onload = function() {
    /*function addDiv() {*/
        var div1 = document.createElement("div");
        methods(div1,"150px","600px",null,null,"flex","green","center","center","static");
        var sp1 = document.createElement("span");
        var div2 = document.createElement("div");
        methods(div2,"400px","300px","150px","100px","block","red",null,null,"absolute");
    addToBody(div2);
    div2.style.display = "none";
    addToBody(div1);

        div1.innerHTML = "<div id=\"div3\" style = \"background-color:white;\"><a href=\"w;\" id=\"a1\">女装</a>/<a href=\"w;\"  id = \"a2\">男装</a>/<a href=\"w;\">内衣</a></div>";
        var aS = document.getElementsByTagName("a");
        function forA(arr){
            for(var i = 0;i<arr.length;i++){
                word(arr[i]);
            }
        }
        forA(aS);
        var a1 = document.getElementById("a1");
        var a2 = document.getElementById("a2");
        var div3 = document.getElementById("div3");
        methods(div3,"150px","30px",null,null,"flex","white","center","center","static");
        div3.onmouseover = function(){
            div2.style.display = "block";
            a1.style.color = "orange";
            a2.style.color = "orange";
        }
        div3.onmouseout = function(){
            div2.style.display = "none";
            a1.style.color = "black";
            a2.style.color = "black";
        }
        function wordColorOver(name){
            name.style.textDecoration = "underline";

        }
        function wordColorOut(name){
            name.style.textDecoration = "none";
            name.style.color = "black";
        }
        a2.onmouseover = function(){
            wordColorOver(a2);
        }
        a2.onmouseout = function(){
            wordColorOut(a2);
        }
        a1.onmouseover = function () {
            a1.style.textDecoration = "underline";
        }
        a1.onmouseout = function () {
            a1.style.textDecoration = "none";
        }
        div2.onmouseover = function () {
            div2.style.display = "block";
        }
        div2.onmouseout = function () {
            div2.style.display = "none";
        }

       /* bodyB.insertBefore(div1,bodyB.lastChild);*/
        function word(name){
            name.style.color = "black";
            name.style.textDecoration = "none";
        }
        function addToBody(name){
            var bodyB = document.body;
            bodyB.appendChild(name);
        }
    function addDiv (){

    }
    function methods(div,width,height,marginL,marginT,display,color,justifyContent,alignItems,position){
        div.style.width = width;
        div.style.height = height;
        div.style.backgroundColor = marginL;
        div.style.marginLeft = marginL;
        div.style.marginTop = marginT;
        div.style.display = display;
        div.style.backgroundColor = color;
        div.style.justifyContent = justifyContent;
        div.style.alignItems = alignItems;
        div.style.position = position;
    }
        addDiv();




}
