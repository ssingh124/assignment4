let mysql=require("mysql");
const {cp} = require('../db/connection.js');
const pSQL = require('../db/promise-mysql');


//GET METHOD FOR SONGS
exports.getSongs = (req,res)=>{
 pSQL.query(cp, `SELECT album.name AS album_name, song.name AS song_name FROM song LEFT JOIN album ON song.album_id = album.album_id;`)
      .then(results=>{
        res.send(results);
        console.log("From GET SONGS");
        })
     .catch(error=>{
         console.log(error);
         
     });
}

// POST method for songs
exports.postSongs = (req,res)=>{

//getting values for song name and album id
let name=req.body.name;
let a_id=req.body.a_id;

//if its NULL
if(a_id==0)
{
        pSQL.query(cp, `INSERT INTO song (name, album_id) VALUES (${mysql.escape(name)},NULL);`)
      .then(results=>{
       console.log("Setting album id NULL");
        })
     .catch(error=>{
         console.log(error);
         
     });
    
}
else{
    //if album id is not NULL
    pSQL.query(cp,`INSERT INTO song (name, album_id) VALUES (${mysql.escape(name)},${mysql.escape(a_id)});`)
      .then(results=>{
        res.send("Setting album id to album_id");
        })
     .catch(error=>{
         console.log(error);
         
     });
}
}



// Route for getting all the songs from VIEW thats having album id NOT NULL
exports.getAlbumSongs=(req,res)=>{
     pSQL.query(cp,'SELECT * FROM songs_on_albums;')
      .then(results=>{
      res.send(results)
      
      })
    .catch(error=>{
    res.send(error)
    });
   
}


