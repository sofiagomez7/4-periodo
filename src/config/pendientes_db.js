const db = require ("db");

let tablaUsuarios =db.run
    (
         `CREATE TABLE pendientes (
            id_pendientes         PRIMARY KEY
                                  UNIQUE
                                  NOT NULL,
            descripcion   VARCHAR NOT NULL,
            cumplida      BOOLEAN,
            activa        BOOLEAN
        );`,
    (err) =>{
        if (err) {
             console.log(err.message)
         } else {
             console.log("Tabla creada correctamente")
         }
     });
