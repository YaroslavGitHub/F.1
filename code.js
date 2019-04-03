
window.onload = function(){
    var isdrag = false;
    var offsetX = 0;
    var offsetY = 0;
    var scale = 1;
    var j = 0;

    var image = document.querySelectorAll("img");
    console.log(image);
   
    image[j].onmousedown = function(e) {
        e.preventDefault();
        isdrag = true;
        offsetX = e.offsetX + 1;
        offsetY = e.offsetY + 1;
        if(!image[j].style.position){
            image[j].style.position = "absolute";
            image[j].style.left = e.pageX - offsetX + "px";
            image[j].style.top = e.pageY - offsetY + "px";
            image[j].style.transform = `scale(${scale})`;
        }
        console.log(image);
    }

    image[j].onmouseup = function(e){
        isdrag = false;
    }
    image[j].onwheel = function(e){
        scale = (e.wheelDelta > 0) ? (scale - 0.05) : (scale + 0.05);
        scale = scale < 0.2 ? 0.2 : scale;
        scale = scale > 2 ? 2 : scale;
        image[j].style.transform = `scale(${scale})`;
    }
    document.onmousemove = function(e){
        if(isdrag){
            image[j].style.left = e.pageX - offsetX + "px";
            image[j].style.top = e.pageY - offsetY + "px";
        }
    }
}


