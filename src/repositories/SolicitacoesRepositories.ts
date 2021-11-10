import { EntityRepository, Repository } from "typeorm";
import { Solicitacao } from "../entities/Solicitacao";

@EntityRepository(Solicitacao)
class SolicitacoesRepositories extends Repository<Solicitacao> {

}

export { SolicitacoesRepositories }