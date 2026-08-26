const sentence = "Hello Honey Bunny Hello Hello";
const words = sentence.split(" ");

const myMap = new Map();

for(let i=0; i<words.length; i++){
    val = myMap.get(words[i]) ?? 0;
    console.log(val);
    if(val){
        myMap.set(words[i], val+1);
    } else {
        myMap.set(words[i], 1);
    }
}

for(const [key, value] of myMap) {
    console.log(key+" : "+value+" times.");
}