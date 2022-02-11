import { Request, Response } from "express";
import { CreateAlunoService } from "../../services/Aluno/CreateAlunoService";


class CreateAlunoController {
    async handle(request: Request, response: Response) {
        const { id_user, id_curso } = request.body;

        const createAlunoService = new CreateAlunoService()

        const aluno = await createAlunoService.execute({
            id_curso,
            id_user
        })

        return response.json(aluno)
    }
}

export { CreateAlunoController }