import { getCustomRepository } from "typeorm"
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories";




class ListSolicitacaoBySetorService {
    async execute(id_setor: string) {
        const solicitacoesRepositories = getCustomRepository(SolicitacoesRepositories);
        
        

        const solicitacoes = await solicitacoesRepositories.find({
            where: {
                id_setor
            },
            relations: ["setor"],
        })

        return solicitacoes;
    }
}
export { ListSolicitacaoBySetorService }



