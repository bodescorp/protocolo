import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { FuncionariosRepositories } from "../repositories/FuncionariosRepositories";




export async function ensureFuncionarios(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request

    const funcionariosRepositories = getCustomRepository(FuncionariosRepositories);

    const funcionariosExists = await funcionariosRepositories.findOne({ where: { id_user:user_id } })


    if (funcionariosExists) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}