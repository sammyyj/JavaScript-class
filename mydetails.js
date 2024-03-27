//const myDetails = (fName, lName, age) => {
 //   return [fName, lName, age]
// };

// const myNewDetails = myDetails(`Bright`,`Philip`,`17`);

//const processDetails = (message1, message2, message3) => {
 //   return `${message1} ${myNewDetails[0]} ${myNewDetails[1]} ${message2} `
// };


// console.log(processDetails(`My name is :`, `I am`, `years old`));





const myDetails = (fName, lName, age) => {
    return [fName, lName, age]
};

const myNewDetails = myDetails(
    prompt(`Enter fName`),
    prompt(`Enter lName`),
    prompt(`Enter age`)
    );

const processDetails = (message1, message2, message3) => {
    return `${message1} ${myNewDetails[0]} ${myNewDetails[1]}   ${message2} ${myNewDetails[2]} ${message3} `
};

console.log(processDetails(`My name is :`, `I am`, `years old`));
