import { getCustomRepository } from "typeorm";
import { FuncionariosRepositories } from "../../repositories/FuncionariosRepositories"
import { CargosRepositories } from "../../repositories/CargosRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { SetoresRepositories } from "../../repositories/SetoresRepositories";

interface IFuncionarioRequest {
    id_user: string,
    id_cargo: string,
    id_setor: string
}

class CreateFuncionarioService {
    async execute({ id_user, id_cargo, id_setor }) {
        const funcionariosRepositories = getCustomRepository(FuncionariosRepositories);

        const usersRepository = getCustomRepository(UsersRepositories);

        const cargosRepositories = getCustomRepository(CargosRepositories);

        const setoresRepositories = getCustomRepository(SetoresRepositories)


        const userExists = await usersRepository.findOne(id_user);

        if (!userExists) {
            throw new Error("User does not exists!");
        }

        const cargoExists = await cargosRepositories.findOne(id_cargo);

        if (!cargoExists) {
            throw new Error("Cargo does not exists!");
        }

        const setorExists = await setoresRepositories.findOne(id_setor);

        if(!setorExists){
            throw new Error ("Setor does not exists!");
        }

        const funcionario = funcionariosRepositories.create({
            id_user,
            id_cargo,
            id_setor
        })

        await funcionariosRepositories.save(funcionario);

        return funcionario;
    }
}

export { CreateFuncionarioService }