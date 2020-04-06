var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        db.run(`CREATE TABLE autor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text UNIQUE, 
            livro text , 
            preco INTERGER, 
            CONSTRAINT nome_unique UNIQUE (nome)
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO autor (nome, livro, preco) VALUES (?,?,?)'
                    db.run(insert, ["Fabio ", "React", 1200])
                    db.run(insert, ["Julia", "Design", 800])
                    db.run(insert, ["Ms", "java", 150])
                    db.run(insert, ["Nico", "Aprenda Alemão", 9999])
                }
            });
    }
});


module.exports = db