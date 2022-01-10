import { getCustomRepository } from "typeorm";
import { SetorRepositories } from "../../repositories/SetoresRepositories";

class CreateSetorService {
    async execute(name: string) {
        const setorRepositories = getCustomRepository(SetorRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const setorAlreadyExists = await setorRepositories.findOne({
            name
        });

        if (setorAlreadyExists){
            throw new Error ("Setor Already Exists!");
        }

        const setor =  setorRepositories. create({
            name
        });
        await setorRepositories.save(setor);
        return setor;
    }
}


export {CreateSetorService}