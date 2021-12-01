import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



export async function ensureAdm(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request

    const userRepositories = getCustomRepository(UsersRepositories);

    const {cargo} = await userRepositories.findOne(user_id)

    if (cargo === "Adm") {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}