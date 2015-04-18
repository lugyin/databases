CREATE DATABASE chat;

USE chat;

CREATE TABLE `messages` (
  `index` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100),
  `roomname` VARCHAR(100),
  `createat` DATETIME NOT NULL DEFAULT NOW(),
  `text` VARCHAR(200),
  PRIMARY KEY  (`index`)
);

CREATE TABLE `users` (
  `username` VARCHAR(100) NOT NULL,
  `friends` VARCHAR(100),
  PRIMARY KEY  (`username`)
);

CREATE TABLE `rooms` (
  `roomname` VARCHAR(100) NOT NULL,
  `username` VARCHAR(100),
  PRIMARY KEY  (`roomname`)
);

-- ALTER TABLE `messages` ADD CONSTRAINT `messages_fk1` FOREIGN KEY (`username`) REFERENCES users(`username`);
-- ALTER TABLE `messages` ADD CONSTRAINT `messages_fk2` FOREIGN KEY (`roomname`) REFERENCES rooms(`roomname`);

-- ALTER TABLE `rooms` ADD CONSTRAINT `rooms_fk1` FOREIGN KEY (`username`) REFERENCES users(`username`);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

