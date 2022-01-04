import { getCustomRepository } from "typeorm";
import { StatusRepositories } from "../../repositories/StatusRepositories";

class CreateStatusService {
    async execute(name: string){
        const statusRepositories = getCustomRepository(StatusRepositories)

        if(!name){
            throw new Error("Incorrect name!");
        }

        const statusAlreadyExists = await statusRepositories.findOne({
            name
        });

        if (statusAlreadyExists) {
            throw new Error("Status already exists!");
        }

        const status = statusRepositories.create({
            name
        });

        await statusRepositories.save(status);
        return status
    }
}

export{CreateStatusService}