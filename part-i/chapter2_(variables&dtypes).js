//1
const name = "Sadia";
const dept = "CSE";
let sem = "4.1";

console.log(`${name} from ${dept} is in ${sem}`);

//2
console.log(typeof null);
/*
1995y - tag system was used for value representation internally.
typeof operator - uses binary representation to read the type
tag for object was 0.
This is why, typeof null prints object.
*/

//3
console.log(Number("19.5") + 0.5);

//4
console.log("5" + 3);
console.log("5" - 3);
//This occurs due to type coercion where js coverts (string) + (any type) = (string) and (string) -,*,/,% (any type) = (that operation happens).


