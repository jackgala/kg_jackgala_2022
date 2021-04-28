// convert input of numbers and spaces to a string value of the word of those numbers separated by commas

// array of strings
let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
// converted_string string
let converted_string = '';

// function conversion
function convert(){

//get supstring of input by character
process.argv.slice(2).forEach((val) => {
    //for each character in the string
    for(let x = 0; x < val.length; x++){
        //test to see if the right values are returned
        console.log(val[x]);
        //add the string from a array of strings at index [ascii value - ascii value of '0']
        if(val[x].charCodeAt(0) < 58 && val[x].charCodeAt(0) > 47 ){
            converted_string += numbers[val[x].charCodeAt(0) - 48]
        }
    }
    //if it's a space
    //add a comma to converted_string
    converted_string += ','
    console.log(converted_string);

})
//print out the converted_string

}

convert();

