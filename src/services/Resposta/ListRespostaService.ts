import { getCustomRepository } from "typeorm"
import { RespostasRepositories } from "../../repositories/RespostasRepositories";
import {instanceToPlain} from "class-transformer"


class ListRespostaService {
    async execute() {
        const respostasRepositories = getCustomRepository(RespostasRepositories)

        const respostas = respostasRepositories.find({relations: ["user", "arquivo", "demanda", "statusId" ], order: {
            'created_at': 'DESC',
          },});

        return instanceToPlain(respostas);
    }
}
export { ListRespostaService }



