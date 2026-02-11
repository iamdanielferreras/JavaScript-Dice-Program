/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/

function rollDice(){
    const numOfDice =  document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        console.log(values);
        images.push(`<img src="dice-${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);

}
