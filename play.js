var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var imgNum = 0;
var img = new Image();

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        console.log("Time Interval: " + imgNum);
        
        if (imgNum > 8296) {
            imgNum = 0;
        }
        
        player(imgNum);
        imgNum++; // 1, 2, 3
    }, 33);
}

function play(num) {
    console.log("number: " + num);
    img.src = "images/PratiqueKMS/PratiqueKMS" + num + ".jpg";
}

img.addEventListener('load', function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
})
