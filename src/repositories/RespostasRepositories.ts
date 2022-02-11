import { EntityRepository, Repository } from "typeorm";
import { Resposta } from "../entities/Resposta";

@EntityRepository(Resposta)
class RespostasRepositories extends Repository<Resposta>{

}

export { RespostasRepositories }