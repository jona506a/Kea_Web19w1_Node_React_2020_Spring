// hoisting
greetingTwo('hello');

const greetings = (greeting) => {
    console.log(greeting);
};

function greetingTwo() {
    console.log("hoisting works")    
}

