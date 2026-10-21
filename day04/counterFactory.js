
function createCounter(start = 0,  step = 1){
    let count = start; // private variable stored in the closure

    return{
        increment(){
            count += step;
        },

        decrement(){
            count -= step;
        },

        reset(){
            count = start;
        },

        getValue(){
            return count;
        }


    };
}


// Create two independent counters
const counter1 = createCounter(0, 1);
const counter2 = createCounter(100, 10);

counter1.increment();
counter2.increment();
console.log(counter2.getValue()); // 2
// counter1: 0 -> 1 -> 2

console.log(counter2.getValue()); // 100
// counter2 is still 100
// chenges to counter1 do not affect counter2

counter2.increment();

console.log(counter2.getValue()); // 110
// counter2: 100 -> 110

console.log(counter1.getValue()); // 1
// counter1 is still 2
// Tjhis proves each call to createCounter()
// creates a separate closure with its own count

// prove count is private
console.log(counter1.count); // undefined
// count is NOT a property on the returnedobject
// It exists only inside the closure

counter1.count = 999;

console.log(counter1.count); // 999
// This creates a NEW object property called count
// It does NOT change the private closure variable

console.log(counter1.getValue()); // 1
// The real count is still 2
// Therefore the count variable cannot be modified directly
// from outside the factory function

counter1.reset();

console.log(counter1.getValue()); // 0
// reset() restores count to its original start value
