import { getCustomRepository } from "typeorm"
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";
import { CursosRepositories } from "../../repositories/CursosRepositories";
import { DemandaRepositories } from "../../repositories/DemandasRepositories"
import { SolicitacoesRepositories } from "../../repositories/SolicitacoesRepositories";


interface IDemandaRequest {
    id_user: string;
    id_curso: string;
    id_solicita: string;
    id_arquivo: string;
    message: string;
}

class CreateDemandaService {
    async execute({ id_user, id_curso, id_solicita, id_arquivo, message }: IDemandaRequest) {
        const demandaRepositories = getCustomRepository(DemandaRepositories);

        const cursoRepositories = getCustomRepository(CursosRepositories);

        const solicitacaoRepositories = getCustomRepository(SolicitacoesRepositories);

        const arquivoRepositories = getCustomRepository(ArquivosRepositories);

        const cursoExists = await cursoRepositories.findOne(id_curso);

        if (!cursoExists) {
            throw new Error("Curso does not exists!");
        }

        const solicitacaoExists = await solicitacaoRepositories.findOne(id_solicita);

        if (!solicitacaoExists) {
            throw new Error("Solicitacao does not exists!");
        }

        const arquivoExists = await arquivoRepositories.findOne(id_arquivo);

        if (!arquivoExists) {
            throw new Error("Curso does not exists!");
        }


        const demanda = demandaRepositories.create({
            id_user,
            id_curso,
            id_solicita,
            id_arquivo,
            message
        })

        await demandaRepositories.save(demanda);

        return demanda;
    }
}


export { CreateDemandaService }