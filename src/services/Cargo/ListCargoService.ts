import { getCustomRepository } from "typeorm"
import { CargosRepositories } from "../../repositories/CargosRepositories";
class ListCargoService {
    async execute() {
        const cursoRepositories = getCustomRepository(CargosRepositories)

        const cursos = cursoRepositories.find();

        return cursos;
    }
}
export { ListCargoService }



