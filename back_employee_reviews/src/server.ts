import express from 'express'
import mongoose from "mongoose";
import { environment } from './environment';

import { Menu } from './DataBase/Funtions/Menu';
import { Rol } from './DataBase/Funtions/Rol';

//const mongoose = require('mongoose');

class server {

    private app: express.Application;

    constructor(
        private menu: Menu = new Menu(),
        private rol: Rol = new Rol()
    ) {
        this.app = express();
        this.config()
    }

    start() {
        //inicializa express
        this.app.listen(this.app.get('port'), () => {
            console.log('Employee Reviews ready in port', this.app.get('port'));
            console.log(`Version ${environment.Version}`)
        })
    }

    ConnectToDatabase() {
        try {
            mongoose.connect(environment.BaseDeDato.Url, {
                //useNewUrlParser: true,
                dbName: 'Employee_Reviews',
            }).then(async (db: any) => {
                console.log(`>>>Connected to DataBase`)
                //Se valida que exista un menu en la base de datos, este menu es para el front
                this.menu.ValidateMenu()
                //Se valida la existencia de un rol
                this.rol.validateRol()

                //Se inicia express
                this.start()

            }).catch((error: any) => {
                console.error('Error connecting to MongoDB:', error);
            })

        } catch (error) {
            console.error(error)
        }
    }

    config() {
        //configuracion 
        this.app.set('port', process.env.PORT || 3030);
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(function (req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
            next();
        });

        this.ConnectToDatabase()
        this.Routes()
    }

    Routes() {
        //Aca se configuran todas las rutas del API
        try {

            this.app.get('/', async (req: any, res: any) => {
                res.send('Bienvenido al backend')
            })

        } catch (error) {
            console.error(error)
        }
    }

}

const StartServer = new server()