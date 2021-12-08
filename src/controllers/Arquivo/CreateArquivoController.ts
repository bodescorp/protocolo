import { Request, Response } from "express"
import { CreateArquivoService } from "../../services/Arquivo/CreateArquivoService";

 
class CreateArquivoController {
    async handle(request: Request, response: Response) {
        //const { key , originalname, mimetype, size, location: url= ""} = request.file as Express.MulterS3.File ; 
        
        const {filename:key ,originalname, mimetype, size, destination: url= ""} = request.file
        
        const createArquivoService = new CreateArquivoService();

        const arquivo = await createArquivoService.execute({key , originalname, mimetype, size, url });
       
        return response.json(arquivo);
    }
}

export { CreateArquivoController }
