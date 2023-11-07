import inquirer from 'inquirer';
class User {
    constructor() {
        this.userId = "124";
        this.userPin = "nav124";
    }
    isValidUserId(userId) {
        return userId === this.userId;
    }
    isValidUserPin(userPin) {
        return userPin === this.userPin;
    }
}
class ATM {
    constructor() {
        this.balance = 1000;
    }
    checkBalance() {
        return this.balance;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
async function main() {
    const user = new User();
    const atm = new ATM();
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'userId',
            message: 'Enter your User ID:',
        },
        {
            type: 'input',
            name: 'userPin',
            message: 'Enter your User PIN:',
        },
    ]);
    if (user.isValidUserId(userInput.userId) && user.isValidUserPin(userInput.userPin)) {
        console.log('Welcome to the ATM!');
        while (true) {
            const action = await inquirer.prompt({
                type: 'list',
                name: 'choice',
                message: 'Select an action:',
                choices: ['Check Balance', 'Withdraw', 'Deposit', 'Exit'],
            });
            if (action.choice === 'Check Balance') {
                console.log('Your balance: $' + atm.checkBalance());
            }
            else if (action.choice === 'Withdraw') {
                const withdrawalAmount = await inquirer.prompt({
                    type: 'number',
                    name: 'amount',
                    message: 'Enter the amount to withdraw:',
                });
                if (atm.withdraw(withdrawalAmount.amount)) {
                    console.log('Withdrawn $' + withdrawalAmount.amount);
                }
                else {
                    console.log('Insufficient balance.');
                }
            }
            else if (action.choice === 'Deposit') {
                const depositAmount = await inquirer.prompt({
                    type: 'number',
                    name: 'amount',
                    message: 'Enter the amount to deposit:',
                });
                atm.deposit(depositAmount.amount);
                console.log('Deposited $' + depositAmount.amount);
            }
            else if (action.choice === 'Exit') {
                console.log('Exiting the ATM.');
                break;
            }
        }
    }
    else {
        console.log('Invalid User ID or User PIN. Exiting...');
    }
}
main();
