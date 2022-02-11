import { getCustomRepository } from "typeorm";
import { SetoresRepositories } from "../../repositories/SetoresRepositories";

class CreateSetorService {
    async execute(name: string) {
        const setoresRepositories = getCustomRepository(SetoresRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const setorAlreadyExists = await setoresRepositories.findOne({
            name
        });

        if (setorAlreadyExists){
            throw new Error ("Setor Already Exists!");
        }

        const setor =  setoresRepositories. create({
            name
        });
        await setoresRepositories.save(setor);
        return setor;
    }
}


export {CreateSetorService}