CREATE DATABASE ng_listCourse_db;

USE ng_listCourse_db;

CREATE TABLE Courses(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nameCourse VARCHAR(255),
    duration VARCHAR(255),
    intensity VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE Courses;

CREATE TABLE Students(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nameStudent VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    course VARCHAR(255)
);

DESCRIBE Students;