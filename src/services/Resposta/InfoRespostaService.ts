import { getCustomRepository } from "typeorm"
import { RespostasRepositories } from "../../repositories/RespostasRepositories"



class InfoRespostaService {
    async execute(id_demanda: string) {
        const respostasRepositories = getCustomRepository(RespostasRepositories)

        const resposta = await respostasRepositories.find( {
            where: {
                id_demanda
            },relations: ["user", "demanda", "arquivo", "statusId"], order: { 'id_user': 'ASC' } })

        return resposta;
    }
}
export { InfoRespostaService }



