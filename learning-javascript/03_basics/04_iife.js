// Imediately Invoked Function Expression (IIFE)
// because of global scope pollution some somtimes problem get created so for removing pollution of global scope we use IIFE function

// named IIFE
(function coffee() {
    console.log(`DB connected`)
})(); 

// if we do not use ";" above so next iife function won't run as we need to stop first above iife function using semicolon

// unnamed IIFE
( () => {
    console.log(`DB connected two`)
})();

// passing parameter 
(function chaipati(name) {
    console.log(`My name is ${name}`)
})("shivankar")