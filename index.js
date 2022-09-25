// Arrow Function
const hello = (input) => output



// Function Expression
function makeBread(qty) {
    console.log(arguments);
    const bread = 'bread'.repeat(qty);
    console.log(bread)
    return bread;
};
const loaves = makeBread(7);


// Named Parameters
function makeLunch (opts) {
    const {main, side, drink } = opts;
}

makeLunch('eggs', 'hashbrowns', 'coffee');

// Rest Parameterse
function makeDinner (...args) {
    return 'Dinner includes the following items: ${args.join}'
}



// Arrow syntax
const makeWine = (qty) => {
    return 'wine'.repeat(qty);
}
