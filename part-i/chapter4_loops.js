//1
for(let i=2; i<=50; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

//2
let sum = 0;
for(let i=1; i<=100; i++) {
    sum += i;
}

const check = (100*(100+1))/2;

if (sum === check) {
    console.log("Correct!");
} else {
    console.log("Wrong!");
}

//3
for(let i=1; i<=10; i++){
    console.log(`7 * ${i} = ${7*i}`);
}

//4
for(let i=1; i<=5; i++){
    let emp="";
    let star="";
    for(let j=5; j>i; j--){
        emp+=" ";
    }
    for(let k=1; k<=i; k++){
        star+="*";
    }
    if(i > 1){
        for(let k=1; k<i; k++){
                star+="*";
        }
    }
    console.log(`${emp}${star}`);
}


//5
for(let i=1; i<=30; i++){
   if((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz");
   }
   else if (i % 3 === 0) {
    console.log("Fizz");
   }
   else if (i % 5 === 0) {
     console.log("Buzz");
   }
   else {
    console.log(i);
   }
}


