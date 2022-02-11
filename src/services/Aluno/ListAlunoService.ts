import { getCustomRepository } from "typeorm"
import { AlunosRepositories } from "../../repositories/AlunosRepositories";
import {instanceToPlain} from "class-transformer"


class ListAlunoService {
    async execute() {
        const alunosRepositories = getCustomRepository(AlunosRepositories)

        const alunos = alunosRepositories.find({relations: ["user", "curso"], order:{'id_user':'ASC'}});

        return instanceToPlain(alunos);
    }
}
export { ListAlunoService }



