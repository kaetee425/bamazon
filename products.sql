DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
	-- item_id (unique id)
	id INT NOT NULL AUTO_INCREMENT,
	-- product_name
	product_name VARCHAR (100) NOT NULL,
	-- department_name 
	department_name VARCHAR(100) NOT NULL,
	-- price (cost to customer)
	price FLOAT (100) NOT NULL,
	-- stock_quantity (how much available in stores)
	stock_quantity INT (1000) NOT NULL,

	PRIMARY KEY(id)
);

select * from products