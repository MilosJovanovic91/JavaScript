

function semafor() {

var boje = document.getElementsByClassName('boje');

    boje[0].style.background = 'red';
    boje[1].style.background = 'silver';
    boje[2].style.background = 'silver';

function changeToYellow () {
    boje[1].style.background = 'yellow';
}
function changeToGreen () {
    boje[0].style.background = 'silver';
    boje[1].style.background = 'silver';
    boje[2].style.background = 'green';
}
var x = setTimeout(changeToYellow, 3000);
var y = setTimeout(changeToGreen, 5000);

var start = setInterval(semafor, 8000);

}

semafor();