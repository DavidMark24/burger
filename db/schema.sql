    CREATE DATABASE burgers_db;

    USE burgers_db;

    CREATE burgers (
        id INTEGER NOT NULL AUTO_INCREMENT,
        burger_name VARCHA (100) NOT NULL,
        devoured BOOLEAN,
        PRIMARY KEY(id)
    )