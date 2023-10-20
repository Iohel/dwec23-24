//Ejericio Planetas
//Se crea una array para mantener 5 planetas.
let array = new Array(5);

//For loop to insert the hard coded planed data making use of switch cases to get the new data.
for (let i = 0; i < array.length; i++) {
    array[i] = new Array();
    switch (i) {
        case 0:
            //Venus
            array[i].push("Venus");
            array[i].push(0.72);
            array[i].push(0.95);
            array[i].push("4/12/1639");
            break;
        case 1:
            //Mars
            array[i].push("Mars");
            array[i].push(1.54);
            array[i].push(0.53);
            array[i].push("13/10/1590");
            break;
        case 2:
            //Saturn
            array[i].push("Saturn");
            array[i].push(9);
            array[i].push(9.44);
            array[i].push("1/1/1655");
            break;
        case 3:
            //Neptune
            array[i].push("Neptune");
            array[i].push(30.1);
            array[i].push(3.88);
            array[i].push("23/9/1846");
            break;
            
        case 4:
            //Uranus    
            array[i].push("Uranus");
            array[i].push(20);
            array[i].push(4.01);
            array[i].push("13 March 1781");   
            break;
        default:
            break;
    };
}

//Constructor where to hold the planets data.
function Planeta(){

    this.name = "name"; 
    this.sunDistance = 0;
    this.sizeRelativeToEarth = 0;
    this.dateOfDiscovery = "";

    this.printInformation = function(){
        console.log("Name: "+ this.name + "\n"+
        "Distance to sun: "+ this.sunDistance + "\n"+ 
        "Size by amounts of earth: "+ this.sizeRelativeToEarth + "\n"+ 
        "Discovered in: "+ this.dateOfDiscovery + "\n");
    }
}

//array to be later used for both showing the infomation and sorting
let planetas = [];

//the following for each iterates the array "array" where each iteration create a new planet object.
array.forEach(info => {
    
    let planeta = new Planeta;

    planeta.name = info[0];
    planeta.sunDistance = info[1];
    planeta.sizeRelativeToEarth = info[2];
    planeta.dateOfDiscovery = info[3];

    planetas.push(planeta)
});

//a for loop to show the info.
for (let i = 0; i < planetas.length; i++) {
    planetas[i].printInformation();
}

//print function into sort algorithim
console.log(planetas.sort((a,b)=>{
    return a.sunDistance - b.sunDistance;
})); 