const express = require('express');
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
const CityRepository  = require('./repository/city-repository')
const ApiRoutes = require('./routes/index')
const db = require('./models/index')
const {City} = require('./models/index')

const setupAndStartServer = async () =>{
    //create the express app
    const app = express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api' , ApiRoutes);
    
    app.listen(PORT ,async ()=>{
        console.log(`Server is listening on the port ${PORT}`);
        if(process.env.SYNC_DB){

            db.sequelize.sync({alter : true})
        }
       

   
    })

}

setupAndStartServer();