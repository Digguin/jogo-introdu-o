function desenhaImagens(){
    canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    img = new Image();
    img.onload = function(){
        ctx.drawImage(img,0,0);
        ctx.drawImage(image,600,0,100,100);
    }
}