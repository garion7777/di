

//ex3



let sentence = prompt("Please enter a sentence with the word Nemo");
//splitting by ,
let array1=sentence.split(" ");

console.log(array1);
  
    let word = "Nemo"; 
   if (array1.indexOf(word)>=0)
   {
    console.log("Found Nemo as element number: "+(array1.indexOf(word)));
   }
   else
   console.log("Nemo could not be found..");

