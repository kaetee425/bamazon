var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazonDB"
});

connection.connect(function(err){
	if (err) throw err;
	runSearch();
});

function runSearch(){
	inquirer
	.prompt([
		//  3. prompt: FIRST = ask user for ID of product like to purchase SECOND = quantity
		{
			name: "id",
			message: "What is the ID of the product you want?"
			// type: "input"
			// validate: function(num){
			// 	if (num > 0 && num < 14) {
			// 		return num
			// 	} else {
			// 		return "We don't have that! Choose another"
			// 	}
			// };
		}, {
			name: "quantity",
			message: "How many of this product are you going to buy?",
			// type: "input"
			// validate: function(num){
			// 	if (typeOf(num) === "number"){
			// 		return true
			// 	} else {
			// 		return "ugh...can you give us a quantity?"
			// 	}
			// };
		}
	]).then(function(answer){
		var query = "SELECT position, product name, price FROM products WHERE ?";
		connection.query(query, {id: answer.id}, function(err, res){
			for (var i = 0; i < res.length; i++) {
				console.log("ID: " + res[i].id + " || Product Name: " + res[i].product_name + " || Price: " + res[i].price);
			}
		// runSearch();
		});

	});
};
