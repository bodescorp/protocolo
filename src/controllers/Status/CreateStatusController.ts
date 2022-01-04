import { Request, Response } from "express";
import { CreateStatusService } from "../../services/Status/CreateStatusService";


class CreateStatusController {
    async handle(request: Request, response: Response){
        const {name} = request.body

        const createStatusService = new CreateStatusService();

        const  status = await createStatusService.execute(name);

        return response.json(status)
    }
}

export {CreateStatusController}