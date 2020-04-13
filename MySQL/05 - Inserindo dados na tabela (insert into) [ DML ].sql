create database cadastro
default character set utf8
default collate utf8_general_ci;

create table pessoas (
id int not null auto_increment,
nome varchar(10) not null,
nascimento date,
sexo enum ('M', 'F'),
peso decimal (5,2),
altura decimal (3,2),
nascionalidade varchar (20) default 'Brasil',
primary key (id)

) default charset = utf8;

use cadastro;

-- Inserindo dados na tabela --

insert into pessoas
(nome, nascimento, sexo, peso, altura, nascionalidade)
values
('klysman4', '1994-07-28', 'M', '70', '1.84', 'Brasil');

insert into pessoas values
(DEFAULT, 'klysman5', '1994-07-28', 'M', '70', '1.84', 'Brasil');

insert into pessoas values
(DEFAULT, 'klysman6', '1994-07-28', 'M', '70', '1.84', 'Brasil'),
(DEFAULT, 'klysman7', '1994-07-28', 'M', '70', '1.84', 'Brasil'),
(DEFAULT, 'klysman8', '1994-07-28', 'M', '70', '1.84', 'Brasil');

select * from pessoas;

desc pessoas;
select *from pessoas;



