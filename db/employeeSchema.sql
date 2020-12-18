DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE roles (
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id),
        title VARCHAR(30) NOT NULL,
        salary INT NOT NULL,
        department_id INT
)

CREATE TABLE employees (
        id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id),
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NOT NULL
)