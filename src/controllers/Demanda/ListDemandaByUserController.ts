import { Request, Response } from "express";
import { ListDemandaByUserService } from "../../services/Demanda/ListDemandaByUserService";


class ListDemandaByUserController{
    async handle(request: Request, response: Response){
        const {user_id} = request

        const listDemandaByUserService = new ListDemandaByUserService();

        const demandas = await listDemandaByUserService.execute(user_id);

        return response.json(demandas);
    }
}

export {ListDemandaByUserController}