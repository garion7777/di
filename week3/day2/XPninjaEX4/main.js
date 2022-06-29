//ex4
let sentence = prompt("Please enter a number");
//splitting by ,
let array1=sentence.split(" ");
let number = parseInt(array1[0]);
console.log("number entered: "+ number);
let reply="";
//examining the bumber
  if (number<2)
  {
    reply+="boom";
  }
   if (number>2)
   {
    let temp=number;
    reply+="b";
    while (temp!=0)
    {
    reply+="o";
    temp--;

    }
    reply+="m";
   }

   if (number%2===0)
   {
    reply+="!"

   }
   if (number%5===0)
   {
    reply=reply.toUpperCase();

   }
   if ((number%2===0)&&(number%5===0))
    {   
        reply+="!";
        reply=reply.toUpperCase();
    }

console.log(reply);