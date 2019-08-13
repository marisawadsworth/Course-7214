const name = "Marisa"

//Use "const" if you know the value isn't going to change otherwise use "let"

console.log(name)


///////////////////////////////////////////////////////////////////


const a = 13
const b = 15

if (a == b) {
    console.log("The values are the same")
} else {
    console.log("The values are different")
}


///////////////////////////////////////////////////////////////////


//Using let because the value of 5 is changing.
for (let  i = 0; i < 5; i++) {
    console.log(i)
}


///////////////////////////////////////////////////////////////////

//DOM - Document Object Model
// Is not accessible when using node

///////////////////////////////////////////////////////////////////


//Multipule line
function Greeting (name) {
    return `Hello ${name} - how are you?`
}

console.log(Greeting("Marisa"))

//Single line
let Greeting2 = (name) => `Hello ${name}, how are you?`

console.log(Greeting2("Marisa"))