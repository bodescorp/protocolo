import { getCustomRepository } from "typeorm";
import { ArquivosRepositories } from "../../repositories/ArquivosRepositories";
import { hash } from "bcryptjs";

interface IArquivoRequet {
    key: string;
    originalname: string;
    mimetype: string;
    size: number;
    url: string;

}

class CreateArquivoService {
    async execute({ key , originalname, mimetype, size, url }) {
        const arquivosRepository = getCustomRepository(ArquivosRepositories);


        const arquivoAlreadyExists = await arquivosRepository.findOne({ key });

        if (arquivoAlreadyExists) {
            throw new Error("Arquivo already exists");
        }


        const arquivo = arquivosRepository.create({ key, originalname, mimetype, size, url:'' })

        await arquivosRepository.save(arquivo);


        return arquivo;

    }
}

export { CreateArquivoService }
