var memory = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var memoryVal = [];
var memoryCard = [];
var flipped = 0;

Array.prototype.memory_shuffle = function(){
var i = this.length, j, temp;

while(--i > 0){
j = Math.floor(Math.random() * (i+1));
temp = this[j];
this[j] = this[i];
this[i] = temp;

}}

//Flip card
function flipCard(cardTile, val){

if(cardTile.innerHTML == "" && memoryVal.length < 2){
cardTile.innerHTML = val;

if(memoryVal.length == 0){
memoryVal.push(val);
memoryCard.push(cardTile.id);

} else if(memoryVal.length == 1){
memoryVal.push(val);
memoryCard.push(cardTile.id);
if(memoryVal[0] == memoryVal[1]){
flipped += 2;

// Clear both arrays
memoryVal = [];
memoryCard = [];


if(flipped == memoryArr.length){
alert("You Won! Congrats!!!");

}

} else {
function flipBack(){
// Flip tiles back over
var tileOne = document.getElementById(memoryCard[0]);
var tileTwo = document.getElementById(memoryCard[1]);
tileOne.innerHTML = "";
tileTwo.innerHTML = "";

// Clear arrays
memoryVal = [];
memoryCard = [];
}
setTimeout(flipBack, 700);
}}}}

function Load(){
memory.memory_shuffle();
var card = document.querySelectorAll(".card");
//loop through cards put same listener on e
for(var i = 0; i < card.length; i++) {
card[i].setAttribute("id", "card_" + i + "_" + memory[i]);
}}

//set the click event of card

document.addEventListener('DOMContentLoaded', function(){
document.body.addEventListener('click', function (event){
if(event.srcElement.className == 'card' ) {
var idElement = event.srcElement.id.split("_");
flipCard(event.srcElement, idElement[2]);
};
});
});
