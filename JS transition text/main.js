/*
var text = 'samo neki text';
var xx = text.split('');// razdvoji sve karaktere
console.log(xx);

var bb = xx.pop(); // izbaci poslednji karakter
console.log(xx);

var bb = xx.shift(); // prvi karakter - kontra od "pop"
console.log(bb);
*/
function sleep (){
    
    i++;
    if (i > 2){
        i = 0;
        ar = makeText(); //reset,vraca se na pocetak ceo proces
    }
    scroll.innerHTML = '';
    start();

}


function makeText() {

    var text = 'Sublime Text';
    var text1 = 'Brackets';
    var text2 = 'Atom';
    
    var sText = text.split('');
    var sText1 = text1.split('');
    var sText2 = text2.split('');
    var nasAray  = [sText,sText1,sText2];
    return nasAray;
}



var ar = makeText();
var scroll = document.getElementById('scroll');
var loop;

var i = 0;


//funkcija izbacuje karakter po karakter sve dok ne dodje do kraja,
//a kada dodje do kraja prebacuje se na nasAray, pa selektuje njegove elemente
function start () {
    if (ar[i].length > 0){
        scroll.innerHTML += ar[i].shift();
        loop = setTimeout(start, 200); 
    }else {
        var ss = setTimeout(sleep, 2000);// setTiemout samo jednom zavrsi proces
    }
}
start();