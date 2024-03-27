

const myDetails = [
    'class One',
    ['no of students is :', [1,2,3]],

    'Class Two',
    ['10','my is positive :',false, true],

    'Class Three', 
    ['and is ','my negative :',false, true ]
]


console.log(myDetails[1][0] + myDetails[3][0]) 
console.log(myDetails[3][1].slice(3,16) + myDetails[3][3])
console.log(myDetails[5][0] + myDetails[5][1].slice(3, 13) + myDetails[5][2])


let fruits = ['mangoe', 'banana', 'apple', 'orange']

console.log(fruits.pop())
fruits.push(['grape', 'strawberry', 'lime'])

fruits[0] = 'mangoes'

console.log(fruits)