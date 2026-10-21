
function memoize(fn){
    const cache = {}; // stores previously calculated results

    return function(arg){

        if(cache[arg] !== undefined){
            return cache[arg]; // return saved result
        }

        const result = fn(arg); // calculate result
        cache[arg] = result; // save result in cache

        return result;

    };

}

// Slow Function for Testing
function slowSquare(n) {

    // Simulate expensive work
    for (let i = 0; i < 100000000; i++) {}

    return n * n;
}

const memoizedSquare = memoize(slowSquare);

// Timing Test
console.time("First Call");
console.log(memoizedSquare(5));
console.timeEnd("First Call");

// Take noticeable time because the calculation runs

console.time("Second Call");
console.log(memoizedSquare(5));
console.timeEnd("Second Call");

// Much faster because the result comes from the cache