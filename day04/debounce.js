
function debounce(fn, delay){
    let timerId; // stores the current timeout ID

    return function (...args){

        // Cancel the previous timer if this function is called
        clearTimeout(timerId);

        // Start a new timer
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
    
}

//Test code
const log = debounce((msg) => console.log(msg), 500);

log("a"); // Starts a timer for "a"

log("b");
// Cancels the timer for "a"
// Starts a new timer for "b"

log("c");
// Cancels the timer for "b"
// Starts a new timer for "c"

// Only "c" will be printed after 500ms