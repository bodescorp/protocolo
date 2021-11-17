import {EntityRepository, Repository} from "typeorm";
import {Arquivo} from "../entities/Arquivo"

@EntityRepository(Arquivo)
class ArquivosRepositories extends Repository<Arquivo>{
    
}

export {ArquivosRepositories}