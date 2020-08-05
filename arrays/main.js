let topSongs = [
    'First Time ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];
topSongs.push('Forturate Son'); // add this at the end of array

const nextSong = topSongs.pop(); //take the last from an array and mem it

 //unshift puts element on the start position

 let dishesToDo = ['big platter'];

 dishesToDo.unshift('large plate');
 dishesToDo.unshift('small plate');
 dishesToDo.unshift('cereal bowl');// 3
 dishesToDo.unshift('mug');         //2
 dishesToDo.unshift('dirty spoon');//1st from start

//shift removes it from starting position

dishesToDo.shift(); //removes dirty spoon

dishesToDo.unshift('fork','knife');//fork will be the first

//

const array1 = ['a','b', 'c'];
const array2 = ['d','e','f'];

console.log(array1.concat(array2));
// ['a','b','c','d','e','f'];

let allArrays = array1.concat(array2, array3);
//it combines them all
//

let ingredients = [
    'water',
    'corn',
    'flour',
    'cheese',
    'shrimp',
    'eel'
];

ingredients.includes('fish');//it checks is there that item,return true or false
//false
ingredients.includes('water', 3);// from index 3 and further this is false
ingredients.includes('water', 0);// true

if(ingredients.includes('flour')){
    console.log("I am gluten free,i can not eat this");
}
//

ingredients.indexOf('eel');//returns 6
ingredients.indexOf('pigeon');//returns -1 because its false

//

let letters = ['T','C','E','P','S','E','R',];
letters.reverse();
//returns ['R','E','S','P','E','C','T']
//

letters.join('&');
//returns " T&C&E&P&S&E&R" - makes string from an array

let animals = ['shark','salmon','whale','bear','lizard','tortoise'];

let swimmers = animals.slice(0, 2);// shark, salmon ,returns from 0 and goes to 2 but not includes 2
let mammals = animals.slice(2, 4);// whale, bear
let swimmers = animals.slice(4)// this is from 4 to the end- lizard, tortoise

let quadruped = animals.slice(-3);// gives last 3 items
animals.slice();//returns everything, good practise for making copy
//


let animals = ['shark','salmon','whale','bear','lizard','tortoise'];

animals.splice(1, 0, 'octopus');
//from where to start deleting
//how many elements
//add octopus
//returns shark, octopus, salmon, whale... 

animals.splice(3, 2);
//returns whale, bear
console.log('animals');
//returns all except whale and bear

//








