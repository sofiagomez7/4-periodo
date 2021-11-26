--
-- File generated with SQLiteStudio v3.3.3 on vie. nov. 19 15:04:02 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: pendientes
DROP TABLE IF EXISTS pendientes;

CREATE TABLE pendientes (
    id_pendientes         PRIMARY KEY
                          UNIQUE
                          NOT NULL,
    descripcion   VARCHAR NOT NULL,
    cumplida      BOOLEAN,
    activa        BOOLEAN
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
