USE `professor_db` ;

INSERT INTO professores (nome, disciplina, email) VALUES 
('Carlos Silva', 'Matemática', 'carlos.silva@example.com'),
('Maria Oliveira', 'Física', 'maria.oliveira@example.com');

INSERT INTO aulas (nome, descricao, professores_id) VALUES
('Álgebra', 'Aula sobre conceitos básicos de álgebra', 1),
('Mecânica Clássica', 'Introdução à mecânica clássica', 2);

INSERT INTO alunos (nome, email, telefone) VALUES
('Ana Costa', 'ana.costa@example.com', '123456789'),
('João Pedro', 'joao.pedro@example.com', '987654321');

INSERT INTO matriculas (aulas_id, alunos_id, data_matricula) VALUES
(1, 1, '2024-11-16'),
(2, 2, '2024-11-16');
