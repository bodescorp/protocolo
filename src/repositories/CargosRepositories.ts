import {EntityRepository, Repository} from "typeorm";
import { Cargo } from "../entities/Cargo";


@EntityRepository(Cargo)
class CargosRepositories extends Repository<Cargo>{
    
}

export {CargosRepositories}