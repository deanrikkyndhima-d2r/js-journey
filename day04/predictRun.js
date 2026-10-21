
function outer(){
    let x = 10;

    function inner(){
        x++;
        return x;
    }
    return inner;
}
const fn = outer();
console.log(fn()); // 11
console.log(fn()); // 12
const fn2 = outer();
console.log(fn()); // 13


let y = 1;
function showY(){
    return y;
}
y = 2;
console.log(showY());

const  adders = [];
for(var i = 0; i < 3; i++){
    adders.push(() => i);
}
console.log(adders.map((f) => f()));
