import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/User/AuthenticateUserService";


class AuthenticateUserController {
    async handle(request: Request, response: Response){
        const {matricula, password} =  request.body

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            matricula, 
            password
        });
        
        return response.json(token);
    }
}

export {AuthenticateUserController}