import { Request, Response } from "express";
import { InfoDemandaService } from "../../services/Demanda/InfoDemandaService";




class InfoDemandaController {
    async handle(request: Request, response: Response){
        const {id_demanda} = request.params
         
        const infoDemandaService = new InfoDemandaService();

        const demanda = await infoDemandaService.execute(id_demanda);

        return response.json(demanda);
    }
}

export { InfoDemandaController }