




const originalScore = 150

const firstExam = 30//50
const secondExam = 50//50
const thirdExam = 150//50

const userScore = firstExam + secondExam + thirdExam
if(userScore <= 50) {
    console.log(`user Score is: ${userScore} and u failed`)

}

else if(userScore > 50 && userScore <= 100){
    console.log(`user Score is: ${userScore} and u pass`)
}

else if(userScore > 100){
    console.log(`user Score is: ${userScore} Excellent and u pass`)
}
else{
    console.log(`user Score is : ${userScore} is not valid`)
}
<script src="conditionalstatement.js"></script>
