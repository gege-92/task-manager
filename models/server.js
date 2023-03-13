const express = require('express');
const { dbConnection } = require('../database/config');
//const app = express();


class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        //defino mis rutas
        this.taskManagerPath = '/api/task';

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

        //Conectar DB
        this.conectarDB();
    }

    //Conectar DB
    async conectarDB(){
        await dbConnection();
    }

    //Middlewares
    middlewares(){
        this.app.use( express.static( 'public' ) );
        this.app.use( express.json() );
    }

    //Routes
    routes(){

        this.app.use( this.taskManagerPath, require('../routes/task.routes') ); //   '/api/task'

    }

    //listen
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en el puerto:', this.port);
        })
    }
}


module.exports = Server;