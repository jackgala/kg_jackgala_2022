// convert input of numbers and spaces to a string value of the word of those numbers separated by commas

// array of strings
let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
// converted_string string
let converted_string = undefined;

// function conversion
function convert(){

//for the numbers in the string input
process.argv.slice(2).forEach((val) => {
    //for each character in the string
    for(let x = 0; x < val.length; x++){
        //test to see if the right values are returned
        console.log(val[x]);
    }
    console.log(',');
})
//get supstring of input by character
//if it's a space
//add a comma to converted_string
//if it's a number(use ascii keys to verify)
//add the string from a array of strings at index [ascii value - ascii value of '0']

//print out the converted_string

}

convert();

