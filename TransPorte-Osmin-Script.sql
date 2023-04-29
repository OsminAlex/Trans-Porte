-- CREATE DATABASE TransPorte
Use TransPorte;

CREATE TABLE Vehiculos(
	matricula varchar(8) unique primary key,
	chasis varchar(12) unique not null,
	marca varchar(25) not null,
	annio int not null,
	color varchar(50) not null
);

-- Validacion de que año se un valor valido

alter table Vehiculos 
add CONSTRAINT chk_annio CHECK (annio >= 1900 AND annio <= 2023);

CREATE Table Tipo(
	idTipo int auto_increment primary key,
	tipo varchar (50) unique not null 
);

CREATE Table Modelo (
	idModelo int auto_increment primary key,
	modelo varchar(50)  unique not null
);

-- Relacion con vehiculo

alter table Vehiculos
add column tipo_v varchar(50) not null,
add foreign key (tipo_v) references Tipo(tipo);

alter table Vehiculos 
add column modelo_v varchar(50) not null,
add foreign key (modelo_v) references Modelo(modelo);


-- Llenando tablas

INSERT INTO Tipo (tipo) VALUES ('Moto'), ('AutoMovil'), ('Camioneta'), ('Camion'), ('Bus');

INSERT INTO Modelo (modelo) VALUES ('Sedan'), ('Hatchback'), ('SUV'), ('Pickup');

-- Peticion Post

/*
 * {
  "matricula":"EEEE8888",
  "chasis":"333355550000",
  "marca":"Toyota",
  "annio":"2018",
  "color":"Blanco",
  "tipo_v":"Camioneta",
  "modelo_v":"Sedan"
}

{
  "matricula":"CCCC8888",
  "chasis":"888844449999",
  "marca":"Nisan",
  "annio":"2015",
  "color":"Negro",
  "tipo_v":"Automovil",
  "modelo_v":"Sedan"
}
 * */