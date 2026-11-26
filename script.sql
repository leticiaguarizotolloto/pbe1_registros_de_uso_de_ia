
DROP DATABASE IF EXISTS usos_ia;
CREATE DATABASE usos_ia;
USE usos_ia;

-- DDL: Criação das tabelas

CREATE TABLE usuario (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE usoia (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT NOT NULL,
    sistema VARCHAR(100) NOT NULL,
    tipo ENUM('Empresa','Escola','Outros') DEFAULT 'Empresa' NOT NULL,
    finalidade VARCHAR(100) NOT NULL,
    tecnologia VARCHAR(100) NOT NULL,
    nivelRisco ENUM('Baixo','Medio','Alto') DEFAULT 'Baixo' NOT NULL,
    revisaoHumana BOOLEAN DEFAULT TRUE NOT NULL
);

-- Chave estrangeira

ALTER TABLE usoia
ADD CONSTRAINT fk_registra
FOREIGN KEY (usuarioId) REFERENCES usuario(id);

-- DML: Inserção de dados

INSERT INTO usuario (nome, email, senha) VALUES
('Joao Silva', 'joao.silva@email.com', PASSWORD('senha123')),
('Maria Oliveira', 'maria@email.com', PASSWORD('senha123')),
('Jose de Aguiar', 'jose@email.com', PASSWORD('senha123'));

INSERT INTO usoia (
    usuarioId, sistema, tipo, finalidade,
    tecnologia, nivelRisco, revisaoHumana
) VALUES
(1, 'Assistente de atendimento', 'Empresa', 'Responder duvidas de clientes', 'IA generativa', 'Baixo', TRUE),
(1, 'Reconhecimento facial', 'Empresa', 'Bater ponto', 'Visao computacional', 'Baixo', TRUE),
(2, 'Biometria', 'Outros', 'Validar identidade', 'Visao computacional', 'Medio', TRUE),
(2, 'Pesquisa de satisfacao', 'Escola', 'Avaliacao do servico de educacao', 'IA generativa', 'Baixo', FALSE),
(3, 'Avaliacao institucional', 'Escola', 'Correcao de gabarito', 'Visao computacional', 'Medio', FALSE);

-- Consultas para conferir

SELECT * FROM usuario;
SELECT * FROM usoia;
SHOW TABLES;
