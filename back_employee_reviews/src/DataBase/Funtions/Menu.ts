import { DataMenu } from "../DataMenu";
import Menu_Model from "../Models_BD/Menu_Model";

export class Menu {

    constructor() {

    }

    CreateMenu() {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const MenuCreate: any = await Menu_Model.create(DataMenu).then(result => {
                    resolve({ status: true, message: "Menu created" })
                }).catch(err => {
                    reject({ status: false, message: err })
                })
            } catch (error) {
                reject({ status: false, message: error })
            }
        })
    }

    async ValidateMenu() {
        try {
            const DataMenu: any = await Menu_Model.find()
            if (DataMenu != undefined && DataMenu.length > 0) {
                console.log("Existe el menu")
            } else if (DataMenu != undefined && DataMenu.length == 0) {
                console.log("Se debe crear el menu")
                this.CreateMenu().then((create: any) => {
                    if (create.status == true) {
                        console.log(create.message)
                    }
                }).catch((err: any) => {
                    if (err.status == false) {
                        console.error(err.message)
                    }
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

}