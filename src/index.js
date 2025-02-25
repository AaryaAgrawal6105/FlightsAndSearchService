const express = require('express');
const {PORT} = require('./config/serverConfif')
const setupAndStartServer = async () =>{
    //create the express app
    const app = express();
   
    app.listen(PORT , ()=>{
        console.log(`Server is listening on the port ${PORT}`);
   
    })

}

setupAndStartServer();