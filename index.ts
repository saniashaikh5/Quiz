#! /usr/bin/env node

import inquirer from "inquirer"

let points = 0

let input1 = await inquirer.prompt([{
    name: "userAnswer1",
    type: "list",
    message: "what is the capital of pakistan?",
    choices: ["Karachi", "islamabad", "Lahore"]
}
]);
    if (input1.userAnswer1 === "islamabad" ){
        console.log("Correct!");
        points++
    } else {
        console.log("Wrong Answer. Try Again!")
    }

    let input2 = await inquirer.prompt([{
        name: "userAnswer2",
        type: "list",
        message: "what is the capital of America?",
        choices: ["NewYork", "Los Angeles", "Washington D.C"]
    }
    ]);
        if (input2.userAnswer2 === "Washington D.C" ){
            console.log("Correct!");
            points++
        } else {
            console.log("Wrong Answer. Try Again!")
        };

        let input3 = await inquirer.prompt([{
        name: "userAnswer3",
        type: "list",
        message: "The best tecnologicl option to work in the dengrous setustion is:",
        choices: ["telephone", "telecom", "telepresence", "television"]
    }
    ]);
        if (input3.userAnswer3 === "telephone" ){
            console.log("Correct!");
            points++
        } else {
            console.log("Wrong Answer. Try Again!")
        };

let input4 = await inquirer.prompt([{
        name: "userAnswer4",
        type: "list",
        message: "the word pakistan was first used in a pamplet named:",
        choices: ["Now or Never", "Nonechal", "medicine", "prperty"]
    }
    ]);
        if (input4.userAnswer4 === "Now or Never" ){
            console.log("Correct!");
            points++
        } else {
            console.log("Wrong Answer. Try Again!")
        };


        let input5 = await inquirer.prompt([{
        name: "userAnswer5",
        type: "list",
        message: "what is the capital of france?",
        choices: ["Lyon", "Nice", "Paris", "Lille"]
    }
    ]);
        if (input5.userAnswer5 === "Paris" ){
            console.log("Correct!");
            points++
        } else {
            console.log("Wrong Answer. Try Again!")
        };

if (points >= 3){
    console.log("Congratulations!");
    console.log(`Your points: ${points}`);
    points++
} else {
    console.log("You loss! Try Again")
    console.log(`Your points: ${points}`);

}

