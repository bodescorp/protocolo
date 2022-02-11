import { getCustomRepository } from "typeorm"
import { DemandaRepositories } from "../../repositories/DemandasRepositories"



class ListDemandaByUserCargoService {
    async execute(id_user: string) {
        const demandaRepositories = getCustomRepository(DemandaRepositories)

        const demandas = await demandaRepositories.find({relations: ["user", "solicitacao", "arquivo"], order:{'id_user':'ASC'}})

        return demandas;
    }
}
export { ListDemandaByUserCargoService }



