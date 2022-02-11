import { Request, Response } from "express";
import { ListAlunoService } from "../../services/Aluno/ListAlunoService";




class ListAlunoController {
    async handle(request: Request, response: Response){
        const listAlunoService = new ListAlunoService();

        const alunos = await listAlunoService.execute();

        return response.json(alunos);
    }
}

export { ListAlunoController }