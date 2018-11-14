window.onload = function() {

    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    function divStyle(name, width, height, backgroundColor, display, justifyContent, alignItems) {
        name.style.width = width;
        name.style.height = height;
        name.style.backgroundColor = backgroundColor;
        name.style.display = display;
        name.style.justifyContent = justifyContent;
        name.style.alignItems = alignItems;
    }

    divStyle(d1, "500px", "500px", "green", "flex", "center", "center");
    divStyle(d2, "300px", "300px", "black", "flex", "center", "center");
    divStyle(d3, "100px", "100px", "red", "block", null, null);

    d1.onclick = function () {
        alert("div1");
    }
    d2.onclick = function () {
        alert("div2");
    }
    d3.onclick = function () {
        alert("div3");
        event.cancelBubble = true;
    }
    var sub1 = document.getElementById("sub1");
    var div4 = document.createElement("div");
    var bodyB = document.body;
    bodyB.appendChild(div4);
    divStyle(div4,"200px","200px","blue","block",null,null);
    div4.style.display = "none";
    sub1.onclick = function(){
        div4.style.display = "block";
        event.cancelBubble = true;
    }
    document.onclick = function(){
        alert("点击窗体");
    }
    div4.onclick = function(){
        event.cancelBubble = true;
    }



}

