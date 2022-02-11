import { getCustomRepository } from "typeorm"
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";
import { DemandaRepositories } from "../../repositories/DemandasRepositories"
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories";


interface IDemandaRequest {
    id_user: string;
    id_solicita: string;
    id_arquivo: string;
    message: string;
}

class CreateDemandaService {
    async execute({ id_user, id_solicita, id_arquivo, message }: IDemandaRequest) {
        const demandaRepositories = getCustomRepository(DemandaRepositories);

        const solicitacaoRepositories = getCustomRepository(SolicitacoesRepositories);

        const arquivoRepositories = getCustomRepository(ArquivosRepositories);

        const solicitacaoExists = await solicitacaoRepositories.findOne(id_solicita);

        if (!solicitacaoExists) {
            throw new Error("Solicitacao does not exists!");
        }

        const arquivoExists = await arquivoRepositories.findOne(id_arquivo);

        if (!arquivoExists) {
            throw new Error("Arquivo does not exists!");
        }


        const demanda = demandaRepositories.create({
            id_user,
            id_solicita,
            id_arquivo,
            message
        })

        await demandaRepositories.save(demanda);

        return demanda;
    }
}


export { CreateDemandaService }