//1

//console.log("Hi);          //syntax error

let name = "chihiro";
//console.log(nam);          //reference error

//name();                    //type error


//2
const userTextConvert = (userText) => {
    try{
        const json = JSON.parse(userText); //json string to json type value
        console.log(json.emotion);
    }
    catch(err){
        console.log("Error message: "+err.message);
    }
    finally{
        console.log("excercise done");
    }
} 
const res = userTextConvert({"name":"itou","emotion":"mixed"}); 

//3

//from part1 : ch3

let monthNumber = 10;

function getObj(){
    return {
        1: 'Winter',
        2: 'Winter-spring',
        3: 'Spring',
        4: 'Spring-summer',
        5: 'Summer',
        6: 'Summer-rainy',
        7: 'Rainy',
        8: 'Rainy-autumn',
        9: 'Autumn',
        10: 'Autumn-late autumn',
        11: 'Late Autumn-Winter',
        12: 'Winter'
    };
}

function getSeasonName(monthNo){
    
    let obj = getObj();
    return obj[monthNo];
}

console.log(getSeasonName(monthNumber));

