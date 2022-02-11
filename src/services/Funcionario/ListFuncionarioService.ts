import { getCustomRepository } from "typeorm"
import { FuncionariosRepositories } from "../../repositories/FuncionariosRepositories";
import {instanceToPlain} from "class-transformer"


class ListFuncionarioService {
    async execute() {
        const funcionariosRepositories = getCustomRepository(FuncionariosRepositories)

        const funcionarios = funcionariosRepositories.find({relations: ["user", "setor", "cargo" ], order:{'id_user':'ASC'}});

        return instanceToPlain(funcionarios);
    }
}
export { ListFuncionarioService }



