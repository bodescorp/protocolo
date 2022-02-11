import { getCustomRepository } from "typeorm"
import { DemandaRepositories } from "../../repositories/DemandasRepositories"



class InfoDemandaService {
    async execute(id_demanda: string) {
        const demandaRepositories = getCustomRepository(DemandaRepositories)

        const demanda = await demandaRepositories.findOne(id_demanda, { relations: ["user", "solicitacao", "arquivo"], order: { 'id_user': 'ASC' } })

        return demanda;
    }
}
export { InfoDemandaService }



