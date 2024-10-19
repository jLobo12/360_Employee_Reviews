import express from 'express'
import { environment } from './environment';


class server {

    private app: express.Application;

    constructor(

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

        this.start()
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