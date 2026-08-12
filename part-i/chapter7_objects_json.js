//1

me = {
    name: "Sadia Sultana",
    dept: "CSE",
    semester: "4.1",
    skills: ['C',' C++',' python',' Java',' HTML',' CSS']
}

console.log(`${me.name} - currently in ${me.semester} semester from ${me.dept} has these ${me.skills} skills`);


//2
me = {
    name: "Sadia Sultana",
    dept: "CSE",
    semester: "4.1",
    skills: ['C',' C++',' python',' Java',' HTML',' CSS'],
    describe(){
        return `${me.name} - currently in ${me.semester} semester from ${me.dept} has these ${me.skills} skills`;
    }
}

console.log(me.describe());


//3
const {name, semester} = me;
console.log(name, semester);


//4
function tot_stock(product){
   s= product.reduce((sum, item) => Boolean(item.name)+sum, 0);
   return s;
}

prd1 = {
    name: 'book'
}
prd2 = {
    name: 'pen'
}
prd = [prd1, prd2]

console.log(tot_stock(prd));


//5

done = { part1: "yes", part2: "no", part3: "no", total: 1};

const text = JSON.stringify(done);
console.log(text);

const back = JSON.parse(text);
console.log(back);
