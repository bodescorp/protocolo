import { getCustomRepository } from "typeorm"
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";


class ListArquivoService {
    async execute() {
        const arquivoRepositories = getCustomRepository(ArquivosRepositories)

        const arquivos = arquivoRepositories.find();

        return arquivos;
    }
}
export { ListArquivoService }



