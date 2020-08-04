var btn = document.getElementById('btn');
var ad = document.getElementById('ad');
var vd = document.getElementById('vd');
var btn2 = document.getElementById('btn2');

btn.addEventListener('click', function() {
    ad.play();
    vd.play();
});
btn2.addEventListener('click', function() {
    ad.pause();
    vd.pause();
});
