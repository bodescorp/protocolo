import { getCustomRepository } from "typeorm";
import { StatusRepositories } from "../../repositories/StatusRepositories";

class ListStatusService{
    async execute(){
        const statusRepositories = getCustomRepository(StatusRepositories)

        const status = statusRepositories.find();

        return status;
    }
}

export {ListStatusService}