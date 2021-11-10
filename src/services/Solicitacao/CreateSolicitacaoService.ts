import { getCustomRepository } from "typeorm";
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories";




class CreateSolitacaoService {

    async execute(name: string) {

        const solicitacoesRepositories = getCustomRepository(SolicitacoesRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const solicitacaoAlreadyExists = await solicitacoesRepositories.findOne({
            name
        });

        if (solicitacaoAlreadyExists) {
            throw new Error("Solicitacao already exists")
        }

        const solicitacao = solicitacoesRepositories.create({
            name
        });

        await solicitacoesRepositories.save(solicitacao);
        return solicitacao;

    }


}


export { CreateSolitacaoService }