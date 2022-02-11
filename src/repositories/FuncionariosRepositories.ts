import {EntityRepository, Repository} from "typeorm";
import {Funcionario} from "../entities/Funcionario"

@EntityRepository(Funcionario)
class FuncionariosRepositories extends Repository<Funcionario>{
    
}

export {FuncionariosRepositories}