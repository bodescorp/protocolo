import { Request, Response } from "express";
import { ListDemandaByUserCargoService } from "../../services/Demanda/ListDemandaByUserCargoService";


class ListDemandaByUserCargoController{
    async handle(request: Request, response: Response){
        const {user_id} = request

        const listDemandaByUserService = new ListDemandaByUserCargoService();

        const demandas = await listDemandaByUserService.execute(user_id);

        return response.json(demandas);
    }
}

export {ListDemandaByUserCargoController}