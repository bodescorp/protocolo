import { getCustomRepository } from "typeorm"
import { SetoresRepositories } from "../../repositories/SetoresRepositories";


class ListSetorService {
    async execute() {
        const setoresRepositories = getCustomRepository(SetoresRepositories)

        const setores = setoresRepositories.find();

        return setores;
    }
}
export { ListSetorService }



