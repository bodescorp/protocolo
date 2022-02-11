import { Request, Response } from "express";
import { CreateRepostaService } from "../../services/Resposta/CreateRespostaService";

class CreateRespostaController {
    async handle(request: Request, response: Response) {
        const { id_demanda, id_arquivo, status, message } = request.body;
        // const { id_demanda } = request.params
        const { user_id } = request

        const createRepostaService = new CreateRepostaService();

        const resposta = await createRepostaService.execute({
            id_user: user_id,
            id_demanda,
            id_arquivo,
            status,
            message
        })

        return response.json(resposta)
    }
}

export { CreateRespostaController }