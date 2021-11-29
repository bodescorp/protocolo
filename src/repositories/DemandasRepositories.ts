import { EntityRepository, Repository } from "typeorm";
import { Demanda } from "../entities/Demanda";

@EntityRepository(Demanda)
class DemandaRepositories extends Repository<Demanda> {

}

export { DemandaRepositories }