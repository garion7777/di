

//ex1 

const favFood="Pasta";
const favMeal="Dinner";
console.log ("I eat "+favFood+" at every "+favMeal);

//ex2 part1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
var myWatchedSeriesLength=myWatchedSeries.length;
myWatchedSeriesSentence="I watched "+myWatchedSeriesLength+" Series: " + myWatchedSeries;
console.log(myWatchedSeriesSentence);

//ex2 part2
let position=myWatchedSeries.indexOf("the big bang theory");
//console.log(position);
myWatchedSeries[position]="friends";
myWatchedSeries.push("seinfeld");
myWatchedSeries.unshift("game of Thrones");
position=myWatchedSeries.indexOf("black mirror");
myWatchedSeries.splice(position,1);
console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);
