import { getCustomRepository } from "typeorm"
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories"




class ListSolicitacaoService {
    async execute() {
        const solicitacoesRepositories = getCustomRepository(SolicitacoesRepositories)

        const solicitacoes = solicitacoesRepositories.find();

        return solicitacoes;
    }
}
export { ListSolicitacaoService }



