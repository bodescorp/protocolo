import { getCustomRepository } from "typeorm";
import { CargosRepositories } from "../../repositories/CargosRepositories";

class CreateCargoService{
    async execute(name: string){
        const cargosRepositories = getCustomRepository(CargosRepositories);
        
        if(!name){
            throw new Error("Incorrect name!");
        }

        const cargoAlreadyExists = await cargosRepositories.findOne({
            name
        });

        if (cargoAlreadyExists) {
            throw new Error("cargo already exists!");
        }

        const cargo = cargosRepositories.create({
            name
        });

        await cargosRepositories.save(cargo);
        return cargo;
    }
}

export {CreateCargoService}