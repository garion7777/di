//ex1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//let fruitsLength = fruits.length;
//removing first element
fruits.shift();
//sorting 
fruits.sort();
//adding kiwi to end
fruits.push("Kiwi");
console.log(fruits);
//removing item by value matching:string
for( var i = 0; i < fruits.length; i++){ 
    
    if ( fruits[i] === "Apples") { 

        fruits.splice(i, 1); 
    }

}

console.log(fruits);

//reversing order of array
fruits.reverse();
console.log(fruits);

//ex2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);