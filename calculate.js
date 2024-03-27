const num1 = Number(prompt(`Enter num1`))
const sign =(prompt(`Enter sign`))
const num2 =Number(prompt(`Enter num2`))

if (sign ==`+` ){
   console.log(`${num1 + num2}`) 
}

else if(sign == `-`){
    console.log(`${num1 - num2}`)
}
else if(sign == `/`){
    console.log(`${num1 / num2}`)
}
else if(sign == `*`){
    console.log(`${num1 * num2}`)
}
else{
    console.log(`${invalid sign}`)
}