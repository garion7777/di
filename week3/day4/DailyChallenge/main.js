var sentence="This dinner is not that bad ! You cook well";
const myArray = sentence.split(" ");


var wordNot=parseInt(myArray.indexOf("not"));
var wordBad=parseInt(myArray.indexOf("bad"));
//console.log(wordBad+" "+wordNot);
//evaluating if bad appears after not

if (wordBad>wordNot)
{
    //removing word before bad 
    myArray.splice(parseInt(myArray.indexOf("bad"))-1,1);
    //removing word bad
    myArray.splice(parseInt(myArray.indexOf("bad")),1);

//replacing word good
    myArray[myArray.indexOf("not")]="good";
    console.log(myArray);
}else
{
    console.log(myArray);
}