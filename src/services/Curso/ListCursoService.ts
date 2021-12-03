import { getCustomRepository } from "typeorm"
import { CursosRepositories } from "../../repositories/CursosRepositories";

class ListCursoService {
    async execute() {
        const cursoRepositories = getCustomRepository(CursosRepositories)

        const cursos = cursoRepositories.find();

        return cursos;
    }
}
export { ListCursoService }



