


// dice roller program
const rollDice = () => {
    const numOfDice = document.getElementById("num_of_dice").value; //gets input # of dice
    const diceResult = document.getElementById("dice_result");
    const diceImages = document.getElementById("dice_image")

    const values = [];
    const images = [];

    for (let x = 0; x < numOfDice; x++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

