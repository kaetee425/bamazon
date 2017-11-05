var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazonDB"
});

// -- 3. prompt: FIRST = ask user for ID of product like to purchase SECOND = quantity
// -- 4. after placed order, we check if we have enough 
// -- 		if not --> "Insufficient Quantity!" & prevent order
// --		if yes --> SQL database reflect remain 
// --					show total cost of purchase

connection.connect(function(err) {
  if (err) throw err;
	  connection.query("SELECT * FROM products", function (err, res) {
	    if (err) throw err;
	    console.log("Successsssss! Let's Shop!")
	    	for (var i = 0; i < res.length; i++){
	    		console.log(res[i].id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity)
	    	}
	    	runSearch();
	  });
});


function runSearch(){
	inquirer
	.prompt([
		//  3. prompt: FIRST = ask user for ID of product like to purchase SECOND = quantity
		{
			type: "input",
			name: "choices",
			message: "Which product would you like?"
		}
	]).then(function(answer){
		var correct = false;
		for (var i = 0; i < res.length; i++) {
			if (res[i].product_name === answer.choices){
				correct = true;
				var product = answer.choices;
				var id = i;

				inqurier.prompt([{
					type: "input",
					name: "quantity",
					message: "How many of this are you going to buy?",
					validate: function(value){
						if (isNaN(value) === false) {
							return true
						} else {
							return false
						}
					}
				}]).then(function(answer2){
					if ((res[id].stock_quantity - answer2.quantity) > 0){
						connection.query("UPDATE products SET stock_quantity = " + (res[id].stock_quantity - answer2.quantity) + " WHERE product_name= " + product + " ", function(err, res2){
							console.log("Product Bought!");
							for (var i = 0; i < res.length; i++){
					    		console.log(res[i].id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity)
					    	}
						})
					} else {
						console.log("Not a valid selection!")
						runSearch();
					}
				});
			}	
		}
	});
};
