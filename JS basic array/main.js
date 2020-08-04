var bil = [100, 200, 300, 500, null, [1,2,3,], {x:1, y:2}];
bil[3] = 2000;
bil[1000] = 23;

var kesh = [13,45,58];
kesh.push[2] = 79; // dodaje se na poslednje mesto ovaj element
kesh.pop[1]; // izbacuje se poslednji element

console.log(bil.length);
console.log(bil[500]);

var nova = bil.concat();
nova[0] = 'Milos'; // na prvo mesto se ubacuje Milos umesto stare vrednosti, ona se brise
console.log(bil);
console.log(nova);


bil.splice(1,1); //obrisi sa 1 mesta.Koliko? samo 1.





