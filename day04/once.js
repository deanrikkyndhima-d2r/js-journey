
function once(fn){
    let hasRun = false; // remembers if fn has been called
    let result; // remembers fn's return value

    return function(){

        if(!hasRun){
            result = fn(); // run fn only the first time
            hasRun = true;

        }
        return result; // always return the saved result

    };
    
}

// Test it
const init = once(() => {
    console.log("initialized");
    return 42;
});

console.log(init());
// initialized
// 42
// fn runs for the first time, result is stored

console.log(init());
// 42
// fn does not run again, returns stored result

console.log(init());
// 42
// still returns the stored result