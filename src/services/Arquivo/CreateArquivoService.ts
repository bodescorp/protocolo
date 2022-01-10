import { getCustomRepository } from "typeorm";
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";
import dotenv from 'dotenv'

dotenv.config();
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
            url = `${process.env.APP_URL}/files/${key} `;
        }

        const arquivo = arquivosRepository.create({ key, originalname, mimetype, size, url })

        await arquivosRepository.save(arquivo);


        return arquivo;

    }
}

export { CreateArquivoService }
