import { getCustomRepository } from "typeorm"
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories"




class ListSolicitacaoService {
    async execute() {
        const solicitacaoRepositories = getCustomRepository(SolicitacoesRepositories)

        const solicitacoes = solicitacaoRepositories.find();

        return solicitacoes;
    }
}
export { ListSolicitacaoService }



