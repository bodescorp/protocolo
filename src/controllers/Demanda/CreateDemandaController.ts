import { Request, Response } from "express";
import { CreateDemandaService } from "../../services/Demanda/CreateDemandaService";

class CreateDemandaController {
    async handle(request: Request, response: Response) {
        const { id_user, id_curso, id_solicita, id_arquivo, message } = request.body;

        const createDemandaService = new CreateDemandaService();

        const demanda = await createDemandaService.execute({
            id_user,
            id_curso,
            id_solicita,
            id_arquivo,
            message
        })

        return response.json(demanda);


    }
}

export { CreateDemandaController }