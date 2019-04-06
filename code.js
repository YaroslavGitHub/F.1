var images = document.getElementsByTagName("img");


var isdrag = false;
var coor = {
    offX: 0,
    offY: 0
};
var scale = 1;
var obj = {};
var zindex = 1;


document.onmousedown = function(e) {
    e.preventDefault();
    for (var i = 0; i < images.length; i++) {
        images[i].classList.add("image");
        images[i].style.transform = `scale(1)`;
    }

    var image = e.target.closest(".image");

    if (!image) return;

    obj.tag = image;
    isdrag = true;
    coor.offX = e.offsetX;
    coor.offY = e.offsetY;
    image.style.zIndex = zindex++;
    image.classList.add("image1");
}

document.onmouseup = function (e) {
    isdrag = false;
}


document.onwheel = function (e) {
    scale = Number(obj.tag.style.transform.substring(6).slice(0, -1));
    if (e.deltaY < 0) scale += 0.05;
    if (e.deltaY > 0) scale -= 0.05;
    obj.tag.style.transform = `scale(${scale})`;
}

document.onmousemove = function (e) {
    if (!obj.tag) {
        return;

    } else if (isdrag) {

        obj.tag.style.left = e.pageX - coor.offX + "px";
        obj.tag.style.top = e.pageY - coor.offY + "px";
    }
}