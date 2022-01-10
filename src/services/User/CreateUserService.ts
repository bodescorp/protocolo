import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import {hash} from "bcryptjs";
import { CargosRepositories } from "../../repositories/CargosRepositories";
import dotenv from 'dotenv'


dotenv.config();

interface IUserRequet{
    name: string;
    matricula: number;
    cargo: string;
    password: string;
}

class CreateUserService {
    async execute({name, matricula, cargo=`${process.env.ID_CARGO_ALUNO}`, password}){
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!matricula){
            throw new Error("Matricula incorrect")
        }        
        
        const userAlreadyExists = await usersRepository.findOne({matricula});

        if (userAlreadyExists){
            throw new Error("User already exists");
        }

        const cargoRepository = getCustomRepository(CargosRepositories);
        
        const cargoExists = await cargoRepository.findOne(cargo)
        if (!cargoExists){
            throw new Error("Cargo does not exists!");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({name, matricula, cargo, password: passwordHash})

        await usersRepository.save(user);

        
        return user;
        
    }
}

export{ CreateUserService }