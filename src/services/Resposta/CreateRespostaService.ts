import { getCustomRepository } from "typeorm";
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";
import { DemandaRepositories } from "../../repositories/DemandasRepositories";
import { RespostasRepositories } from "../../repositories/RespostasRepositories";
import { StatusRepositories } from "../../repositories/StatusRepositories";

interface IRespostaRequest {
    id_user: string,
    id_arquivo: string,
    id_demanda: string,
    status: string,
    messagem: string
}
class CreateRepostaService {
    async execute({ id_user, status, id_demanda, id_arquivo, message }) {
        const respostasRepositories = getCustomRepository(RespostasRepositories);

        const demandasRepositories = getCustomRepository(DemandaRepositories);

        const arquivosRepositories = getCustomRepository(ArquivosRepositories);

        const statusRepositories = getCustomRepository(StatusRepositories);


        const demandaExists = await demandasRepositories.findOne(id_demanda);

        if (!demandaExists) {
            throw new Error("Demanda does not exists!");
        }

        const arquivoExists = await arquivosRepositories.findOne(id_arquivo);

        if (!arquivoExists) {
            throw new Error("Arquivo does not exists!");
        }


        const statusExists = await statusRepositories.findOne(status);

        if (!statusExists) {
            throw new Error("Status does not exists!");
        }

        const resposta = respostasRepositories.create({
            id_user,
            id_demanda,
            id_arquivo,
            status,
            message
        })

        await respostasRepositories.save(resposta)

        return resposta;



    }
}

export { CreateRepostaService }