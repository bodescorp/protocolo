import { Request, Response } from "express";
import { ListRespostaService } from "../../services/Resposta/ListRespostaService";




class ListRespostaController {
    async handle(request: Request, response: Response){
        const listRespostaService = new ListRespostaService();

        const respostas = await listRespostaService.execute();

        return response.json(respostas);
    }
}

export { ListRespostaController }