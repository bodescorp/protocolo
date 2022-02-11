import { Request, Response } from "express";
import { InfoRespostaService } from "../../services/Resposta/InfoRespostaService";




class InfoRespostaController {
    async handle(request: Request, response: Response){
        const {id_demanda} = request.params
         
        const infoRespostaService = new InfoRespostaService();

        const resposta = await infoRespostaService.execute(id_demanda);

        return response.json(resposta);
    }
}

export { InfoRespostaController }