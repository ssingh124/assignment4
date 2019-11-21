const {cp} = require('./connection.js');

const pSQL = require('./promise-mysql');




pSQL.query(cp, 'DROP TABLE IF EXISTS song; DROP TABLE IF EXISTS album; CREATE TABLE album ( album_id int AUTO_INCREMENT,name varchar(255) NOT NULL, genre varchar(255),PRIMARY KEY (album_id))')
         .then(()=>pSQL.query(cp, 'CREATE TABLE song (song_id int AUTO_INCREMENT,name varchar(255) NOT NULL, PRIMARY KEY (song_id),album_id int, FOREIGN KEY(album_id) REFERENCES album(album_id) )'))
         .then(()=>pSQL.query(cp, 'DROP VIEW IF EXISTS song_on_album; CREATE VIEW song_on_album AS SELECT name FROM song WHERE album_id IS NOT NULL; ' ))
       .then(results=>
       {
    console.log(results);
       process.exit() 
           
       })
       .catch(error=>{
           console.log(error); 
           process.exit()
           
       });

