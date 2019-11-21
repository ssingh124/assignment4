let mysql=require("mysql");
const {cp} = require('../db/connection.js');
const pSQL = require('../db/promise-mysql');



//Route for getting all albums de=rom album table
exports.getAlbums = (req,res)=>
{
    pSQL.query(cp, 'SELECT * FROM album' )
     .then(results=>{
         console.log("From alubum get")
     res.send(results);
     })
    .catch(error=>{
        console.log(error); 
    res.send(error);
    });

}



//Route for POST method to add albums to database
exports.postAlbums=(req,res)=>{
      console.log(req.body.name);
   
    console.log("from POST albums page");
    let nn=req.body.name;
    let gg=req.body.genre;
    
    console.log(gg);
     console.log(nn);
     
    pSQL.query(cp, `INSERT INTO album (name, genre) VALUES(${mysql.escape(nn)},${mysql.escape(gg)});`)
      .then(results=>{
        res.send("Successfull");
        })
     .catch(error=>{console.log(error);});
}




