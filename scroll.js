var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var scrollYPos = 0;
var img = new Image();

img.src = "images/PratiqueKMS/PratiqueKMS0.jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY/18);
    console.log(scrollYPos);
    
    if (scrollYPos > 8296) {
        scrollYPos = 8296;
    }
    
    player(scrollYPos);
});

function player(num) {
    img.src = "images/PratiqueKMS/PratiqueKMS" + num + ".jpg";
}

img.addEventListener('load', function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
})
