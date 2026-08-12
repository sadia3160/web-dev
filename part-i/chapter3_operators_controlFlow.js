//1
let number = 7;

if (number>0){
    console.log("positive");
} else if (number<0) {
    console.log("negative");
} else {
    console.log("zero");
}

//2
let temp = 21;

if (temp>32){
    console.log("Hot");
} else if (temp>=20 && temp<=32) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}


//3
let num = 3;

res = (num % 2 == 0) ? "Even" : "Odd";
console.log(res);


//4
let month = 10;

switch(month) {
    case 1:
        console.log("Winter");
        break;
    case 2:
        console.log("Winter-Spring");
        break;
    case 3:
        console.log("Spring");
        break;
    case 4:
        console.log("Spring-Summer");
        break;
    case 5:
        console.log("Summer");
        break;
    case 6:
        console.log("Summer-Rainy");
        break;
    case 7:
        console.log("Rainy");
        break;
    case 8:
        console.log("Rainy-Autumn");
        break;
    case 9:
        console.log("Autumn");
        break;
    case 10:
        console.log("Autumn-Late Autumn");
        break;
    case 11:
        console.log("Late Autumn-Winter");
        break;
    case 12:
        console.log("Winter");
        break;
}