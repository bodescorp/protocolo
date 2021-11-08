import {Request, response, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async Handle(request: Request, Response: Response){
        const {name, matricula, cargo} = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, matricula, cargo});

        return response.json(user);
    }
}

export { CreateUserController}