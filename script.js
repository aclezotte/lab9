function shoppingListObjects (list) {
    
    function addP (content) {
    var para = document.createElement("p");
    var node = document.createTextNode(content);
    para.appendChild(node);
    var element = document.getElementById("listDiv");
    element.appendChild(para);
    }
    
    var total = 0;
    
    for ( i = 0; i < list.length; i++ ) {
        addP ( list[i].name + ": $" + list[i].price );
        total += list[i].price;
    }
    
    document.getElementById("listDiv").appendChild(document.createElement("hr"));
    
    addP ( "Total: $" + total );
}

var groceryList = [
    milk = {name: "Milk", price: 2.49},
    bread = {name: "Bread", price: 3.99},
    apples = {name: "Apples",price: 4.49,},
    spinach = {name: "Spinach", price: 1.99,}
];

shoppingListObjects (groceryList);