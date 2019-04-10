const billprice = 399;

function gratuity(price){

    return price * 0.2;
}

function totalwithGrat(price){

    price = price + gratuity(price);
    return price;
}

console.log(gratuity(billprice));
console.log(totalwithGrat(billprice).toFixed(2));