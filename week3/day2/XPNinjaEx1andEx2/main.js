

//ex1


console.log(

    5 >= 1, "predicted: true \n",
    0 === 1,"predicted: false \n",
    4 <= 1,"predicted: false \n",
    1 != 1,"predicted: false \n",
    "A" > "B","predicted: false \n",
    "B" < "C","predicted: true \n",
    "a" > "A","predicted: true \n",
    "b" < "A","predicted: false \n",
    true === false,"predicted: false \n",
    true != true,"predicted: false \n",



)

//ex2
let numbers = prompt("Please enter some numbers separated by ,");
//splitting by ,
let array1=numbers.split(",");
console.log(typeof(array1[0]));
console.log(array1);
  
    let sum = 0; 
    /*loop over array and add each item to sum
    */
    for (const item of array1) {
      sum += parseInt(item);
    }

console.log("sum of array elements: "+sum);