import Roles_Model from "../Models_BD/Roles_Model";

export class Rol {
    constructor() { }

    async validateRol() {
        const Roles: any = await Roles_Model.find()

        if (Roles != undefined && Roles.length == 0) {
            console.log("Se debe crear el rol Admin")

            const CreateRol: any = await Roles_Model.create({ Name: "Admin", Permission: ["*"] }).then(result => {
                console.log("Rol created")
            }).catch(err => {
                console.error(err)
            })

        } else {
            console.log("Rol ya existe")
        }
    }

}