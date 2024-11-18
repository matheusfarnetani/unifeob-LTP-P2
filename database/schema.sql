-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema professor_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema professor_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `professor_db` DEFAULT CHARACTER SET utf8 ;
USE `professor_db` ;

-- -----------------------------------------------------
-- Table `professor_db`.`professores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `professor_db`.`professores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `disciplina` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `professor_db`.`aulas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `professor_db`.`aulas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `descricao` TEXT NULL,
  `professores_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aulas_professores_idx` (`professores_id` ASC) VISIBLE,
  CONSTRAINT `fk_aulas_professores`
    FOREIGN KEY (`professores_id`)
    REFERENCES `professor_db`.`professores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `professor_db`.`alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `professor_db`.`alunos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NULL,
  `telefone` VARCHAR(15) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `professor_db`.`matriculas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `professor_db`.`matriculas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_matricula` DATE NULL,
  `aulas_id` INT NOT NULL,
  `alunos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matriculas_aulas1_idx` (`aulas_id` ASC) VISIBLE,
  INDEX `fk_matriculas_alunos1_idx` (`alunos_id` ASC) VISIBLE,
  CONSTRAINT `fk_matriculas_aulas1`
    FOREIGN KEY (`aulas_id`)
    REFERENCES `professor_db`.`aulas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matriculas_alunos1`
    FOREIGN KEY (`alunos_id`)
    REFERENCES `professor_db`.`alunos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
