import { Request, Response } from "express";
import { CreateFuncionarioService } from "../../services/Funcionario/CreateFuncionarioService";

class CreateFuncionarioController {
    async handle(request: Request, response: Response) {
        const { id_cargo, id_setor, id_user } = request.body;

        const createFuncionarioService = new CreateFuncionarioService()

        const funcionario = await createFuncionarioService.execute({
            id_cargo,
            id_setor,
            id_user
        })

        return response.json(funcionario)
    }
}

export { CreateFuncionarioController }