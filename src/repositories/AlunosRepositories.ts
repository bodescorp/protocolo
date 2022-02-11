import { EntityRepository, Repository } from "typeorm";
import { Aluno } from "../entities/Aluno"

@EntityRepository(Aluno)
class AlunosRepositories extends Repository<Aluno>{

}

export { AlunosRepositories }