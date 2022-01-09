console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function additem( name ){
  basket.push( name );

}
additem('orange');

console.log(`Basket is: ${basket}`);
additem('apple')
console.log('Adding apples (expect true)', basket.includes("apple"));
console.log(`Basket is now: ${basket}`);

//- Create a function called `listItems`. It should:
//  - loop over the items in the `basket` array
//- console.log each individual item on a new line
function listItems(){
  for (i = 0; i < basket.length; i++);
console.log(basket[0]);
console.log(basket[1]);
}
listItems();
