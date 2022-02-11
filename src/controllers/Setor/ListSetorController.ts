import { Request, Response } from "express";
import { ListSetorService } from "../../services/Setor/ListSetorService";




class ListSetorController {
    async handle(request: Request, response: Response){
        const listSetorService = new ListSetorService();

        const setores = await listSetorService.execute();

        return response.json(setores);
    }
}

export { ListSetorController }