import { Request, Response } from "express";
import { ListArquivoService } from "../../services/Arquivo/ListArquivoService";


class ListArquivoController {
    async handle(request: Request, response: Response){
        const listArquivoService = new ListArquivoService();

        const arquivos = await listArquivoService.execute();

        return response.json(arquivos);
    }
}

export { ListArquivoController }