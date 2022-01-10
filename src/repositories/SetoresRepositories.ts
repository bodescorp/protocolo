import { EntityRepository, Repository } from "typeorm";
import { Setor } from "../entities/Setor";

@EntityRepository(Setor)
class SetorRepositories extends Repository<Setor>{

}

export {SetorRepositories}