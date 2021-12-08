import { Request, Response } from "express";
import { ListCargoService } from "../../services/Cargo/ListCargoService";

class ListCargoController {
    async handle(request: Request, response: Response){
        const listCargoService = new ListCargoService();

        const cargos = await listCargoService.execute();

        return response.json(cargos);
    }
}

export { ListCargoController }