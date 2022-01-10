import { Request, Response } from "express";
import { CreateSetorService } from "../../services/Setor/CreateSetorService";

class CreateSetorController {
    async handle(request: Request, response: Response){
        const {name} = request.body

        const createSetorService = new CreateSetorService();

        const setor = await createSetorService.execute(name);

        return response.json(setor)
    }
}

export {CreateSetorController}