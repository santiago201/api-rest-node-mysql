const cors = require('cors');
const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        //ruta de nuesta apirest
        

        //llmado de el metodo que contiene los mideelwares
        this.middelwares();

        //llamado de el archivo router
        this.routes();

    }

    middelwares(){
        this.app.use(cors());

       //uso de archivos json 
        this.app.use((express.json({limit: '50mb'})));
        this.app.use(express.urlencoded({limit: '50mb'}));

    }

    routes(){
        this.app.use('/api',require('../routes/router'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en :${this.port}`)

        })

    }

}


module.exports = Server;
