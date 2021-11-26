const db = require ("db");

let tablaUsuarios =db.run
    (
         `CREATE TABLE usuarios (
          id_usuarios INTEGER PRIMARY KEY UNIQUE NOT NULL,
          nom_usuarios VARCHAR NOT NULL,
          correo_usuarios VARCHAR NOT NULL
         )`,
    (err) =>{
        if (err) {
             console.log(err.message)
         }else {
             console.log("Tabla creada correctamente")
         }
     });