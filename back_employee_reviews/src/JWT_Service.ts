import { environment } from "./environment";

const jwt = require('jsonwebtoken');

export class JWT_Services {

    constructor() { }

    CreateToken(Data: any) {
        try {
            //Se genera el JWT segun la data enviada
            const TokenJWT = jwt.sign({ Data }, environment.JWT.Secret, { expiresIn: environment.JWT.Expires })
            return TokenJWT

        } catch (error) {
            console.error(error)
        }
    }

    VerifyToken(DataJWT: any) {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                jwt.verify(DataJWT, environment.JWT.Secret, function (err: any, decoded: any) {
                    if (decoded) {
                        resolve({
                            status: true,
                            Data: decoded
                        })
                    } else {
                        console.log("err")
                        console.log({
                            name: err.name,
                            message: err.message,
                            date: err.date,
                            expiredAt: err.expiredAt
                        })
                        resolve({
                            status: false,
                            message: err.message,
                            error: err
                        })
                    }
                });
            } catch (error) {
                console.error(error)
            }
        })
    }

}
