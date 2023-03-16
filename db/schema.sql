DROP DATABASE IF EXISTS workout_db;

CREATE DATABASE workout_db;


CREATE TABLE workout (
    id INT NOT NULL,
    workout_name VARCHAR(30),
    dworkout_description VARCHAR(30),
    PRIMARY KEY (id)
);

USE workout_db;

CREATE TABLE movements (
    id INT NOT NULL,
    move_name VARCHAR(30),
    move_sets VARCHAR(30),
    move_reps VARCHAR(30),
    workout_id INT,
    FOREIGN KEY (workout_id) REFERENCES workout(id)
);