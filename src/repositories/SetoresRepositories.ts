import { EntityRepository, Repository } from "typeorm";
import { Setor } from "../entities/Setor";

@EntityRepository(Setor)
class SetoresRepositories extends Repository<Setor>{

}

export {SetoresRepositories}