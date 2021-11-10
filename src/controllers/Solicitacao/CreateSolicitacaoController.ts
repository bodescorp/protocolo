import { Request, Response } from "express";
import { CreateSolitacaoService } from "../../services/Solicitacao/CreateSolicitacaoService";

class CreateSolicitacaoController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createSolicitacaoService = new CreateSolitacaoService();

        const solicitacao = await createSolicitacaoService.execute(name);

        return response.json(solicitacao);

    }
}

export { CreateSolicitacaoController }