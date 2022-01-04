import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { CargosRepositories } from "../repositories/CargosRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";



export async function ensureSecretaria(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request

    const userRepositories = getCustomRepository(UsersRepositories);
    const cargosRepositories = getCustomRepository(CargosRepositories);

    const { cargo } = await userRepositories.findOne(user_id)
    
    const cargoAdm = await cargosRepositories.findOne({
        where: {
            name:"Secretária"
        }
    });

    if (cargo == cargoAdm.id) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}