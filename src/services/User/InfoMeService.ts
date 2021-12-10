import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../../repositories/UsersRepositories"
import {classToPlain} from "class-transformer"


class InfoMeService {
    async execute(id_user: string) {
        const infoMeService = getCustomRepository(UsersRepositories)

        const info_me = await infoMeService.findOne(id_user)

        return classToPlain(info_me);
    }
}
export { InfoMeService }



