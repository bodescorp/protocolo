import {Request, Response} from "express"
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response){
        const {name, matricula, password} = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, matricula, password});

        return response.json(user);
    }
}

export { CreateUserController}
