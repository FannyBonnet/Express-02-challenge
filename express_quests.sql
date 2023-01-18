DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id int primary key NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    city varchar(255) DEFAULT NULL,
    language varchar(255) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
  users (firstname, lastname, email, city, language)
VALUES
  (
    'John',
    'Doe',
    'john.doe@example.com',
    'Paris',
    'English'
  ),
  (
    'Valeriy',
    'Appius',
    'valeriy.appius@example.com',
    'Moscow',
    'Russian'
  ),
  (
    'Ralf',
    'Geronimo',
    'ralf.geronimo@example.com',
    'New York',
    'Italian'
  ),
  (
    'Maria',
    'Iskandar',
    'maria.iskandar@example.com',
    'New York',
    'German'
  ),
  (
    'Jane',
    'Doe',
    'jane.doe@example.com',
    'London',
    'English'
  ),
  (
    'Johanna',
    'Martino',
    'johanna.martino@example.com',
    'Milan',
    'Spanish'
  );
