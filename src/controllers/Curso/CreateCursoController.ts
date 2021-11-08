import { Request, Response } from "express"
import {CreateCursoService} from "../../services/Curso/CreateCursoService"

class CreateCursoController {
    async handle(request: Request, response: Response){
        const {name} = request.body

        const createCursoService = new CreateCursoService();

        const curso = await createCursoService.execute(name);

        return response.json(curso)
    }
}

export{CreateCursoController}