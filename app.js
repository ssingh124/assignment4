const express= require("express");
const app = express();
app.use(express.json());
app.use(express.static('public'));


const router = require('./routes/index.js');




app.use('/api', router);

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.settings.port, ()=>{
    console.log("listening");
});