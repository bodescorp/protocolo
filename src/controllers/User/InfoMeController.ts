import { Request, Response } from "express";
import { InfoMeService } from "../../services/User/InfoMeService";




class InfoMeController {
    async handle(request: Request, response: Response){
        const {user_id} = request
         
        const infoMeService = new InfoMeService();

        const user = await infoMeService.execute(user_id);

        return response.json(user);
    }
}

export { InfoMeController }