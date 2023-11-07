import inquirer from 'inquirer';
async function main() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessCount = 0;
    while (true) {
        const { guess } = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Guess a number between 1 and 100:',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number
        });
        guessCount++;
        if (guess < randomNumber) {
            console.log('Too low!');
        }
        else if (guess > randomNumber) {
            console.log('Too high!');
        }
        else {
            console.log(`Correct! You found the number in ${guessCount} guesses.`);
            break;
        }
    }
}
main();
