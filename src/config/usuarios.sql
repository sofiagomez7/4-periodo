--
-- File generated with SQLiteStudio v3.3.3 on vie. nov. 19 15:04:36 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: usuarios
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id_usuarios     INTEGER PRIMARY KEY
                            UNIQUE
                            NOT NULL,
    nom_usuarios    VARCHAR NOT NULL,
    correo_usuarios VARCHAR NOT NULL
);

INSERT INTO usuarios (
                         id_usuarios,
                         nom_usuarios,
                         correo_usuarios
                     )
                     VALUES (
                         1,
                         'fernanado',
                         'fernando@gmail.com'
                     );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
