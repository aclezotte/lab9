function shoppingListObjects (list) {
    var total = 0;
    
    for ( i = 0; i < list.length; i++ ) {
        console.log ( list[i].name + ": $" + list[i].price );
        total += list[i].price;
    }
    
    console.log("Total: $" + total);
}

var groceryList = [
    milk = {name: "Milk", price: 2.49},
    bread = {name: "Bread", price: 3.99},
    apples = {name: "Apples",price: 4.49,},
    spinach = {name: "Spinach", price: 1.99,}
];

shoppingListObjects (groceryList);