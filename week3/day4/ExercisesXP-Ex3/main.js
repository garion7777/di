//ex3
let sentence = prompt("Please enter a number");
//splitting by ,
let array1=sentence.split(" ");
let number = parseInt(array1[0]);
if (number%2===0)
{
    console.log( number + " is an even number");
 
}else{
    console.log( number + " is an odd number");

}
