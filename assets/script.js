localStorage.clear();

function submitForm() {

 var nol = prompt("Number of Letters");
 var nocl = prompt("Number of Capital Letters");
 var nosc = prompt("Number of Special Characters");
 var non = prompt("Number of #s");

console.log("nol :" + nol);
console.log("nocl :" + nocl);
console.log("nosc :" + nosc);
console.log("non :" + non);


console.log("nol :" + typeof nol);

if (nol == "") {
 var nol = prompt("Number of Letters");
}

if (non == "") {
 var non = prompt("Number of Capital Letters");
}

if (nosc == "") {
 var nosc = prompt("Number of Special Characters");
}

if (nocl == "") {
 var nocl = prompt("Number of #s");
}

if (nol == "" || non == ""|| nosc == "" || nocl == "" ) {
 alert("All fields require input")
}

function randomNumber(max) { 
 return (Math.ceil(Math.floor(Math.random() * max)));
};

const passwordArray = [];
const sCArray = [];
const numbersArray = [];

var x;
var q;
var f;

nextLetter = "a";
addSC = "c";

if (nol - nocl != 0) {
var fieldEntryTotalLetters = nol - nocl;
var numberOfCharacters = parseInt(nol) - parseInt(nocl) + parseInt(non) + parseInt(nosc) + parseInt(nocl);
} else {
fieldEntryTotalLetters = nocl;
numberOfCharacters = parseInt(nocl) + parseInt(non) + parseInt(nosc);
nol = 0;
}

console.log("fieldEntryTotalLetters :" + fieldEntryTotalLetters);

const totalNumberofChars = numberOfCharacters;


if (numberOfCharacters > 7 && numberOfCharacters < 129) {

console.log(nol.value);

console.log("Lowercase Letters :" + fieldEntryTotalLetters + " Numbers :" + non + " Special Characters :" + nosc + " Capitals :" + nocl)

document.getElementById("totalNumber").innerHTML = "Total # of Characters: " + totalNumberofChars;

console.log("Total Characters :" + totalNumberofChars)
console.log("Total amount of letters: " + fieldEntryTotalLetters);

function randomConversion() {
if (x == 1) {
 nextLetter = "a";
}
else if (x == 2) {
 nextLetter = "b";
}
else if (x == 3) {
 nextLetter = "c";
}
else if (x == 4) {
 nextLetter = "d";
}
else if (x == 5) {
 nextLetter = "e";
}
else if (x == 6) {
 nextLetter = "f";
}
else if (x == 7) {
 nextLetter = "g";
}
else if (x == 8) {
 nextLetter = "h";
}
else if (x == 9) {
 nextLetter = "i";
}
else if (x == 10) {
 nextLetter = "j";
}
else if (x == 11) {
 nextLetter = "k";
}
else if (x == 12) {
 nextLetter = "l";
}
else if (x == 13) {
 nextLetter = "m";
}
else if (x == 14) {
 nextLetter = "n";
}
else if (x == 15) {
 nextLetter = "o";
}
else if (x == 16) {
 nextLetter = "p";
}
else if (x == 17) {
 nextLetter = "q";
}
else if (x == 18) {
 nextLetter = "r";
}
else if (x == 19) {
 nextLetter = "s";
}
else if (x == 20) {
 nextLetter = "t";
}
else if (x == 21) {
 nextLetter = "u";
}
else if (x == 22) {
 nextLetter = "v";
}
else if (x == 23) {
 nextLetter = "w";
}
else if (x == 24) {
 nextLetter = "x";
}
else if (x == 25) {
 nextLetter = "y";
}
else if (x == 26) {
 nextLetter = "z";
}

};

capitalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function specialCharacters() {
if (q == 1) {
 addSC = "!";
}
else if (q == 2) {
 addSC = "@";
}
else if (q == 3) {
 addSC = "#";
}
else if (q == 4) {
 addSC = "$";
}
else if (q == 5) {
 addSC = "%";
}
else if (q == 6) {
 addSC = "^";
}
else if (q == 7) {
 addSC = "&";
}
else if (q == 8) {
 addSC = "*";
}
};

if (nol > 0) {
 for(n=0; n < fieldEntryTotalLetters; n++) {
var x = randomNumber(26) + 1;
console.log("random number generator: " + x);
randomConversion();

console.log("The next letter is " + nextLetter);

passwordArray.push(nextLetter);
}

}
console.log(passwordArray);

console.log("length of pw array: " + passwordArray.length);

    console.log("password array #1 :" + passwordArray);
  console.log("password array length:" + passwordArray.length);

 if (nol == 0) {
    console.log("password array #2 :" + passwordArray);
  console.log("password array length:" + passwordArray.length);
 for(u=0; u < nocl; u++) {
 let t = randomNumber(26) + 1;
 let posVar = randomNumber(passwordArray.length);

  passwordArray.push(capitalArray[t]);
 console.log("Capital Letters :" + capitalArray[t]);
 }
  console.log("password array after if for loop for capital array :" + passwordArray);
  console.log("password array length:" + passwordArray.length);
 } else {
 for(u=0; u < nocl; u++) {
      console.log("password array #3 :" + passwordArray);
  console.log("password array length:" + passwordArray.length);
 let t = randomNumber(26) + 1;
 let posVar2 = randomNumber(passwordArray.length);
       console.log("password array #4 :" + passwordArray);
  console.log("password array length:" + passwordArray.length);
 
 passwordArray.push(capitalArray[t]);
 console.log("Capital Letters :" + capitalArray[t])
 }
console.log("password array after else for loop for capital array :" + passwordArray);
console.log("password array length:" + passwordArray.length);
 }

for(b=0; b < nosc; b++) {
var q = randomNumber(7) + 1;

console.log("random number generator for q: " + q);
specialCharacters();

sCArray.push(addSC);
console.log("special character array :" + sCArray);
}
console.log("password array after sc array push:" + passwordArray);
console.log("password array length:" + passwordArray.length);


for(g=0; g < non; g++) {
var f = randomNumber(passwordArray.length) + 1;
var randomNum4ArrayVar =  randomNumber(8) + 1;

passwordArray.splice(f, 0, randomNum4ArrayVar);
console.log("Random Number :" + randomNum4ArrayVar);
}
console.log("password array after rng:" + passwordArray);
console.log("password array length:" + passwordArray.length);

for(t=0; t < nosc; t++) {
var z = randomNumber(passwordArray.length) + 1;

passwordArray.splice(z, 0, sCArray[t])
console.log("Special Characters :" + sCArray[t]);
}
console.log("password array after sc splice:" + passwordArray);
console.log("password array length:" + passwordArray.length);

}

else if (numberOfCharacters < 8 || numberOfCharacters > 128) {

 document.getElementById("totalNumber").innerHTML = "Must be atleast 8 and no more than 128";
 document.getElementById("passwordHere").innerHTML = "Your Password";
 
}

const arrayToString = passwordArray.toString();

console.log("arrayToString :" + arrayToString);

const removeCommas = arrayToString.replaceAll(',','');

document.getElementById("passwordHere").innerHTML = removeCommas;

console.log(passwordArray);
console.log(sCArray);
console.log(numbersArray);

};
