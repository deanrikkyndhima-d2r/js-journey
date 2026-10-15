
const values = [0, 1, "", "hello", null, undefined, NaN, [], {}, "0", false];

for (let value of values){
    if (value){
        console.log(value, "=> Truthy");
    }else{
        console.log(value, "=> Falsy");
    }
}