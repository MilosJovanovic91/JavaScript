//practise
function isValidPassword(password, username){
    if (password.length < 8){
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }
    if(password.indexOf(username) !==1){
        return false;
    }
    return true;
}

//practise

function avg(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    }
    return resault = total/arr/length;  
}
//practise

function isPangram (sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowerCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}
// cleaner cuz includes is boolean method
function isPangram (sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}
//
/*
function getCard(){
    const values = [
        "1","2","3","4","5","6","7","8","9","10","J","Q","K","A"
    ];
    const valIdx= Math.floor(Math.random() * values.length);
    const value = values[valIdx];

    const suits = ['clubs', 'spades','hearts','diamonds'];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdx];
    return {value: value, suit: suit};
}
*/
// 
/*
function pick(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function getCard(){
    const values = [
        "1","2","3","4","5","6","7","8","9","10","J","Q","K","A"
    ];


const value = pick(values);
const suits = ['clubs', 'spades','hearts','diamonds'];
const suit = pick(suits);
return {value: value, suit: suit};
}
//

*/
function pick(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function getCard(){
    const values = [
        "1","2","3","4","5","6","7","8","9","10","J","Q","K","A"
    ];

    const suits = ['clubs', 'spades','hearts','diamonds'];

    return { value: pick(values), suit: pick(suits)};
}