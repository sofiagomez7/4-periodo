// solicita la dependencia para conectar a la base de datos
const sqlite3 = require('sqlite3').verbose();

//abrir la base de datos
const db_name = 'pendientes.db'
let db = new sqlite3.Database(db_name, (err) => {
    if (err){
        return console.error(err.message);
    }
    console.log('conectado a la base de datos' + db_name);
    });
//crea la tabla usuarios
let tablaUsuarios = db.run
    (
         `CREATE TABLE usuarios (
          id_usuarios INTEGER PRIMARY KEY UNIQUE NOT NULL,
          nom_usuarios VARCHAR NOT NULL,
          correo_usuarios VARCHAR NOT NULL
         )`,
    (err) =>{
        if (err) {
             console.log(err.message)
         }
         else {
             console.log("Tabla creada correctamente")
         }
     });
//insetar usuario
let insertarusuarios = db.run
(
     `INSERT INTO usuarios (
        nom_usuarios,
        correo_usuarios
    )
    VALUES (
        'fernanado',
        'fernando@gmail.com'
    );`,
(err) =>{
    if (err) {
         console.log(err.message)
     }
     else {
         console.log("usuario ccreado correctamente")
     }
 });
 let tablapendientes = db.run
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
         }
         else {
             console.log("Tabla creada correctamente")
         }
     });
module.exports= db;
