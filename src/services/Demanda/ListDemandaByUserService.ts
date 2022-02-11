import { getCustomRepository } from "typeorm"
import { DemandaRepositories } from "../../repositories/DemandasRepositories"



class ListDemandaByUserService {
    async execute(id_user: string) {
        const demandaRepositories = getCustomRepository(DemandaRepositories)

        const demandas = await demandaRepositories.find({
            where: {
                id_user
            },
            relations: ["user", "solicitacao", "arquivo"],order: {
                'created_at': 'DESC',
              },
        })

        return demandas;
    }
}
export { ListDemandaByUserService }



