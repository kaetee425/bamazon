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

-- 1. insert mock data 
-- 2. bamazonCustomer.js - first display all the items available (id, names, price)
-- 3. prompt: FIRST = ask user for ID of product like to purchase SECOND = quantity
-- 4. after placed order, we check if we have enough 
-- 		if not --> "Insufficient Quantity!" & prevent order
--		if yes --> SQL database reflect remain 
--					show total cost of purchase


-- how to show top row??