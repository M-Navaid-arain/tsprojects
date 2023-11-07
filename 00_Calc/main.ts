import inquirer from "inquirer";
console.log("Simple Calculator App\n")
let answers=await inquirer.prompt([
   
    {
        type:"number",
        name:"num1",
        message:"Enter 1st Number:"
    },
    {
        type:"number",
        name:"num2",
        message:"Enter 2nd Number:"
    },
    {
        type:"list",
        name:"operator",
        choices:['+','-','*','/'],
        message:"Select the Operator:"
    }
])

if (answers.operator=='+'){
    console.log(`Result: \n${answers.num1} ${answers.operator} ${answers.num2} = ${answers.num1+answers.num2}`)
}else if (answers.operator=='-'){
    console.log(`Result: \n${answers.num1} ${answers.operator} ${answers.num2} = ${answers.num1-answers.num2}`)
}else if (answers.operator=='*'){
    console.log(`Result: \n${answers.num1} ${answers.operator} ${answers.num2} = ${answers.num1*answers.num2}`)
}else if (answers.operator=='/'){
    console.log(`Result: \n${answers.num1} ${answers.operator} ${answers.num2} = ${answers.num1/answers.num2}`)
}