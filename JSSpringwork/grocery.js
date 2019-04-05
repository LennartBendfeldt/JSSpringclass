var groceryList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

console.log(groceryList);

groceryList.push('fruit loops');

console.log(groceryList);

groceryList[groceryList.indexOf('coffee')] = 'fair trade coffee';

console.log(groceryList);

groceryList[groceryList.indexOf('chips')] = 'rice';

groceryList[groceryList.indexOf('salsa')] = 'beans';

console.log(groceryList);

var shoppingCart = [];

var buyItem = groceryList.pop();

shoppingCart.push(buyItem);
console.log(shoppingCart);
console.log(groceryList);

while(groceryList.length > 0){

    buyItem = groceryList.pop();
    shoppingCart.push(buyItem);
 
}

console.log(groceryList);
console.log(shoppingCart);

shoppingCart.sort();
console.log(shoppingCart);
shoppingCart.reverse();
console.log(shoppingCart.toString());