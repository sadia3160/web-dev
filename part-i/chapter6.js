//1
const a = [3, 7, 2, 9, 4];
let mx = 0;
for(let i=0; i<a.length; i++){
    if (a[i] > mx) {
        mx = a[i];
    }
}
console.log(`Max number in the array a: ${mx}`);

//2
const ar = [450,150,550];
const tk = ar.map((a)=>a+' BDT');
console.log(tk);

//3
const names = ["Nabu", "Ratri", "Wisteria", "Sabla", "Iti"];
const sel = names.filter((a) => a.length>4);
console.log(sel);

//4
const nums = [1,2,3,4,5,6,7];
const cnt = nums.reduce((sum, item) => Number(item%2===0) + sum, 0);
console.log(`Total even number in the array nums: ${cnt}`);

//5
const students = [ 
  { name: "Masha", cgpa: 3.7 }, 
  { name: "Kiko", cgpa: 3.2 }, 
  { name: "Otake",  cgpa: 3.9 }, 
];

const selected = students
.filter((s) => s.cgpa>=3.5)
.map((s) => s.name);
console.log(selected);


//6
const haul  = [ 
    { item: "Book", price: 180}, 
    { item: "Map", price: 150}, 
    { item: "Coffee", price: 300}, 
];
const prices = haul.sort((s1, s2) => s2.price-s1.price);

console.log(prices);