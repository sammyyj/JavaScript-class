const name = prompt('Enter your Name')
const gender = prompt('male or female')
const age = Number (prompt('Enter your age'))

if(gender == 'male' && age >18 && age <40 ) {
    console.log(`welcome😊`)
}

else if(gender == 'female' && age >17 && age <= 40) {
    console.log(`welcome😀`)

}

else {
    console.log(`Get out ${gender}☹`)
}