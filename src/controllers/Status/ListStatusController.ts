import { Request, Response } from "express";
import { ListStatusService } from "../../services/Status/ListStatusService";

class ListStatusController {
    async handle(request: Request, response: Response){
        const listStatusService = new ListStatusService();

        const status = await listStatusService.execute()

        return response.json(status);
    }
}

export {ListStatusController}