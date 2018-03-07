DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES 
  ('COLT', false),
  ('Cheese Burger',false),
  ('Cowboy', true);
  
  select * from burgers
  