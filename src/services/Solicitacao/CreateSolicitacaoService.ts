import { getCustomRepository } from "typeorm";
import { SetoresRepositories } from "../../repositories/SetoresRepositories";
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories";


interface ISolicitacaoRequest{
    name: string, 
    id_setor: string
}

class CreateSolitacaoService {

    async execute({name, id_setor}) {

        const solicitacoesRepositories = getCustomRepository(SolicitacoesRepositories);
        
        const setoresRepositories = getCustomRepository(SetoresRepositories)

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const solicitacaoAlreadyExists = await solicitacoesRepositories.findOne({
            name
        });

        if (solicitacaoAlreadyExists) {
            throw new Error("Solicitacao already exists")
        }

        const setorExists = await setoresRepositories.findOne(id_setor);

        if(!setorExists){
            throw new Error ("Setor does not exists!");
        }


        const solicitacao = solicitacoesRepositories.create({
            name,
            id_setor
        });

        await solicitacoesRepositories.save(solicitacao);
        return solicitacao;

    }


}


export { CreateSolitacaoService }