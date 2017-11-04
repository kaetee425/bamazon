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
			validate: function(num){
				if (num > 0 && num < 14) {
					return num
				} else {
					return "We don't have that! Choose another"
				}
			};
		},

		{
			name: "quantity",
			message: "How many of this product are you going to buy?",
			validate: function(num){
				if (typeOf(num) === "number"){
					return true
				} else {
					return "ugh...can you give us a quantity?"
				}
			};
		},

		};
	]).then(function(answer){
		console.log(answer.id)
		console.log(answer.quantity)
	});
};
