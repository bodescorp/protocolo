import { Request, Response } from "express";
import { ListCursoService } from "../../services/Curso/ListCursoService";

class ListCursoController {
    async handle(request: Request, response: Response){
        const listCursoService = new ListCursoService();

        const cursos = await listCursoService.execute();

        return response.json(cursos);
    }
}

export { ListCursoController }