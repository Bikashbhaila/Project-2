DROP DATABASE IF EXISTS maps_db;
CREATE DATABASE maps_db;


USE maps_db;

CREATE TABLE Main_map (
  Map_id INTEGER(11) auto_increment NOT NULL,
  Map_Name varchar(100),
  PRIMARY KEY (Map_id)
);

CREATE TABLE City (
  Map_id INTEGER(11) auto_increment NOT NULL,
  City_Name VARCHAR(100),
  Population INTEGER(100),
  Is_Capital Boolean,
  Has_Castle Boolean,
  Has_Market Boolean, 
  PRIMARY KEY (Map_id)
);


INSERT INTO Main_map (Map_Name) VALUES ("Bravoos");
INSERT INTO Main_map (Map_Name) VALUES ("Westboro");
INSERT INTO Main_map (Map_Name) VALUES ("WitchTown");
INSERT INTO Main_map (Map_Name) VALUES ("Hamburg");

INSERT INTO City (City_Name, Is_Capital, Has_Castle, Has_Market) VALUES ("Mancity", "True", "True", "False");
INSERT INTO City (City_Name, Is_Capital, Has_Castle, Has_Market) VALUES ("OldYork", "True", "True", "False");
INSERT INTO City (City_Name, Is_Capital, Has_Castle, Has_Market) VALUES ("NewYork", "True", "True", "False")
INSERT INTO City (City_Name, Is_Capital, Has_Castle, Has_Market) VALUES ("Richland", "True", "True", "False")

