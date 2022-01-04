import { Request, Response } from "express"
import { CreateArquivoService } from "../../services/Arquivo/CreateArquivoService";

 
class CreateArquivoController {
    async handle(request: Request, response: Response) {
        //const { key , originalname, mimetype, size, location: url= ""} = request.file as Express.MulterS3.File ; 
        
        const {filename ,originalname, mimetype, size} = request.file as Express.Multer.File
        
        const createArquivoService = new CreateArquivoService();

        const arquivo = await createArquivoService.execute({key:filename, originalname, mimetype, size, url:'' });
       
        return response.json(arquivo);
    }
}

export { CreateArquivoController }
