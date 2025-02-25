const express = require('express');
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
const CityRepository  = require('./repository/city-repository')

const setupAndStartServer = async () =>{
    //create the express app
    const app = express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.listen(PORT , ()=>{
        console.log(`Server is listening on the port ${PORT}`);
        const repo = new CityRepository();
        repo.deleteCity(1);
   
    })

}

setupAndStartServer();