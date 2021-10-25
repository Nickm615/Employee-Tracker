INSERT INTO department (name)
VALUES ('Logistics'),
('sales'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES ('Project Manager', 80000, 1),
('Junior Software Engineer', 50000, 1),
('Senior Software Engineer', 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jack', 'Johnson',1, null),
('Dude', 'Dudley',1, null),
('Some','Dumbguy',2, 1)