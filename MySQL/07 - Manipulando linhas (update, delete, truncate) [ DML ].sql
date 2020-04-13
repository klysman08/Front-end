select * from cursos;
insert into cursos values
('1', 'Curso 1', 'Curso de X', '40', '30', '2020'),
('2', 'Curso 2', 'Curso de X', '40', '30', '2020'),
('3', 'Curso 3', 'Curso de X', '40', '30', '2020'),
('4', 'Curso 4', 'Curso de X', '40', '30', '2020'),
('5', 'Curso 5', 'Curso de X', '40', '30', '2020'),
('6', 'Curso 6', 'Curso de X', '40', '30', '2020'),
('8', 'Curso 7', 'Curso de X', '40', '30', '2020'),
('9', 'Curso 8', 'Curso de X', '40', '30', '2020'),
('10', 'Curso 9', 'Curso de X', '40', '30', '2020');

select * from cursos;

-- Alterando um valor na coluna nome na linha com id 1
update cursos
set nome = 'HTML 5'
where idcurso = '1';

-- Alterando diferentes colunas
update cursos
set nome  = 'PHP' , ano = '2015'
where idcurso = '4';

update cursos
set nome = 'Python', ano = '2018', carga = '50'
where idcurso = '5'
limit 1;
-- Em limit, especificamos a alteração em no maximo uma linha.

update cursos
set ano = '2017', carga = '20'
where ano = '2020';

-- Delete indentificado pela linha
delete from cursos
where idcurso = '8';

delete from cursos
where ano = '2015'
limit 2;

-- Apaga todos os registro da tabela (linhas)
truncate table cursoss;