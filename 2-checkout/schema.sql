DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

use checkout;

CREATE TABLE IF NOT EXISTS responses (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL,
	addrOne VARCHAR(255) NOT NULL,
	addrTwo VARCHAR(255),
	city VARCHAR(255) NOT NULL,
	state VARCHAR(2) NOT NULL,
	zip INT NOT NULL,
	phone VARCHAR(10),
	cc INT NOT NULL,
	expiry VARCHAR(255) NOT NULL,
	cvv INT NOT NULL,
	billingZip INT NOT NULL,
	session VARCHAR(255) NOT NULL,
	UNIQUE(id),
	UNIQUE(session)
);

DESCRIBE responses;