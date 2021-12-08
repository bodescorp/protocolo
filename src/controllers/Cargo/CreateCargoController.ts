import { Request, Response } from "express"
import { CreateCargoService } from "../../services/Cargo/CreateCargoService";

class CreateCargoController {
    async handle(request: Request, response: Response){
        const {name} = request.body

        const createCargoService = new CreateCargoService();

        const cargo = await createCargoService.execute(name);

        return response.json(cargo)
    }
}

export{CreateCargoController}