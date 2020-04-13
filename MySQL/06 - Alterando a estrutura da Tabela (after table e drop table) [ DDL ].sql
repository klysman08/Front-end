-- Alterando a Estrutura da Tabela -- 

alter table pessoas
add column profissao varchar(10);

alter table pessoas
drop column profissao;

alter table pessoas
add column profissao varchar(10) after nome;

alter table pessoas
add column codigo int first;

alter table pessoas
modify column profissao varchar (20);

alter table pessoas
change column profissao prof varchar(30);

alter table pessoas
rename to people;

alter table people
rename to pessoas;

describe pessoas;

create table if not exists cursos (
nome varchar(30) not null unique,
descricao text,
carga int unsigned,
totaulas int unsigned,
ano year default '2019'
) default charset = utf8;

alter table cursos
add column idcurso int first;

describe cursos;