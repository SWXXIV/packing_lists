/*
This script takes input from the front page and assembles
the packing list from HTML snippets and logic.
*/

var carStuff = require("./Scripts/carcamping.json");
/*
Call variables
*/
var tripType = "";
var nights = 0;

/*
Populate the variables by pulling in form data
*/

function BuildJSON(tripType) {
    var outDoc = {}; 
    switch(tripType){
        case "carcamping": 
           /* Add carcamping fragment array */
           for (let i of carStuff.carcamping) {
            console.log(i)
            }
        break;
        case "biking":
            for (let i of carStuff.bikecamping) {
                console.log(i)
            }
        break;
        case "backpacking":
            for (let i of carStuff.backpacking) {
                console.log(i)
            }
        break;
        
        default:
            console.log("Dont recognize trip type");
        
        
    }
    
           
        
};

//BuildJSON("carcamping");

BuildJSON("backpacking");