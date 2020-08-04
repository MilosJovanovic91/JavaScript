/*
var broj = Math.min(255, 233, 22, 58);

var user = {
    name: 'Milos',
    prezime: 'Jovanovic',
    info: function(){
        document.write(user.name + ' ' +  user.prezime);
    }
}
var user1 = {
    name: 'Petar',
    prezime: 'Petrovic',
    info: function(){
        document.write(user1.name + ' ' +  user1.prezime);
    }
} */ 
// nije primer ni za sta posebno,samo primena za objekte i gore i dole

function Users(name, prezime) {
    this.name = name;
    this.prezime = prezime;
    this.info = function() {
        document.write(name + ' ' + prezime );
    }
}
var danilo = new Users('Zmaj', 'Smaug');
var natalija = new Users('Natalija', 'Markovic');
natalija.info();