//ex4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//console.log(users.length);

if (users.length===0)
{
    console.log ("no one is online");
}
else if (users.length===1)
{
console.log("user "+users[0]+" is online");
}
else if (users.length===2)
{
    console.log("users " +users[0]+" and"+users[1]+" are online");
}
else if (users.length>2)
{
    let numUsers=parseInt(users.length);
   // console.log(users.length);
   // console.log(users[0]);
    console.log("users " + users[0] +" and " + users[1] 
    + " and " + (numUsers-2) +" others are online");
    //+" and"+users[1]+" and "+ parseInt(users.length)-2 +" others are online");
}