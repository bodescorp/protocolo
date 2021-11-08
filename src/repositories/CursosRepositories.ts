import {EntityRepository, Repository} from "typeorm";
import {Curso} from "../entities/Curso"

@EntityRepository(Curso)
class CursosRepositories extends Repository<Curso>{
    
}

export {CursosRepositories}