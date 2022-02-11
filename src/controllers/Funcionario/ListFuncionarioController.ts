import { Request, Response } from "express";
import { ListFuncionarioService } from "../../services/Funcionario/ListFuncionarioService";




class ListFuncionarioController {
    async handle(request: Request, response: Response){
        const listFuncionarioService = new ListFuncionarioService();

        const funcionarios = await listFuncionarioService.execute();

        return response.json(funcionarios);
    }
}

export { ListFuncionarioController }