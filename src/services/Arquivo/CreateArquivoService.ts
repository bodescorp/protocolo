import { getCustomRepository } from "typeorm";
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";

// interface IArquivoRequet {
//     key: string;
//     originalname: string;
//     mimetype: string;
//     size: number;
//     url: string;
// }

class CreateArquivoService {
    async execute({ key, originalname, mimetype, size, url }) {
        const arquivosRepository = getCustomRepository(ArquivosRepositories);


        if (!url) {
            url = `http://localhost:3333/files/${key} `;
        }

        const arquivo = arquivosRepository.create({ key, originalname, mimetype, size, url })

        await arquivosRepository.save(arquivo);


        return arquivo;

    }
}

export { CreateArquivoService }
