import { Request, Response } from "express";
import { CreateDemandaService } from "../../services/Demanda/CreateDemandaService";

class CreateDemandaController {
    async handle(request: Request, response: Response) {
        const { id_solicita, id_arquivo, message } = request.body;

        const { user_id } = request

        const createDemandaService = new CreateDemandaService();

        const demanda = await createDemandaService.execute({
            id_user: user_id,
            id_solicita,
            id_arquivo,
            message
        })

        return response.json(demanda);


    }
}

export { CreateDemandaController }