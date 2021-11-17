import { Request, response, Response } from "express"
import { CreateArquivoService } from "../../services/Arquivo/CreateArquivoService";

class CreateArquivoController {
    async handle(request: Request, response: Response) {
        const { filename, originalname, mimetype, size } = request.file;

        const createArquivoService = new CreateArquivoService();

        const arquivo = await createArquivoService.execute({ key :filename, originalname, mimetype, size, url: '' });
        
        return response.json(arquivo);
    }
}

export { CreateArquivoController }
