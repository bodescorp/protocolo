import { Request, Response } from "express";
import { ListSolicitacaoBySetorService } from "../../services/Solicitacao/ListSolicitacaoBySetorService";



class ListSolicitacaoBySetorController {
    async handle(request: Request, response: Response) {
        const { id_setor } = request.params

        const listSolicitacaoBySetorService = new ListSolicitacaoBySetorService();

        const solicitacoes = await listSolicitacaoBySetorService.execute(id_setor);

        return response.json(solicitacoes);
    }
}

export { ListSolicitacaoBySetorController }