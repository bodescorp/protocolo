import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../../repositories/UsersRepositories";
import {classToPlain} from "class-transformer"


class ListUserService {
    async execute() {
        const userRepositories = getCustomRepository(UsersRepositories)

        const users = userRepositories.find({relations: ["id_cargo"]});

        return classToPlain(users);
    }
}
export { ListUserService }



