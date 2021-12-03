import { Request, Response } from "express";
import { ListSolicitacaoService } from "../../services/Solicitacao/ListSolicitacaoService";



class ListSolicitacaoController {
    async handle(request: Request, response: Response){
        const listSolicitacaoService = new ListSolicitacaoService();

        const solicitacoes = await listSolicitacaoService.execute();

        return response.json(solicitacoes);
    }
}

export { ListSolicitacaoController }