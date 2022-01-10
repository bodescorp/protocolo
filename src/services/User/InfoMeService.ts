import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../../repositories/UsersRepositories"
import {instanceToPlain} from "class-transformer"


class InfoMeService {
    async execute(id_user: string) {
        const userRepositories = getCustomRepository(UsersRepositories)

        const info_me = await userRepositories.findOne(id_user)

        return instanceToPlain(info_me);
    }
}
export { InfoMeService }



