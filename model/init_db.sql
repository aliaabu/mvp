--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT, 
    `title` VARCHAR(255) NOT NULL,
    `url` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `location` VARCHAR (255) NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `start_time` TIME NOT NULL,
    `end_time` TIME NOT NULL,
    `price` INT NOT NULL,
    `age` INT NOT NULL,
    PRIMARY KEY(id)
    );

