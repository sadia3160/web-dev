//1
function isEven(n) {
    return (n % 2 === 0);

}
for(let i=1; i<=10; i++){
    if(isEven(i)) { console.log(`${i} = even`) }
    else { console.log(`${i} = odd`) }
}

//2
const celsiusToFahrenheit = (c) => c*(9/5)+32;
//console.log(celsiusToFahrenheit(36));

//3
function max3(a, b, c) {
    let ans = (a>b) ? (a>c?a:c) : (b>c?b:c);
    return ans;
}
//console.log(max3(213,532,324));

//4
function fizzbuzz(limit) {
    if((limit % 3 == 0) && (limit % 5 == 0)){
    console.log("FizzBuzz");
   }
   else if (limit % 3 === 0) {
    console.log("Fizz");
   }
   else if (limit % 5 === 0) {
     console.log("Buzz");
   }
   else {
    console.log(limit);
   }
}
for(let i=1; i<=30; i++){
   fizzbuzz(i);
}

//5

function applyTwice(fn, value) {
    return fn(fn(value));
}

console.log(applyTwice((n)=>n*2, 50));