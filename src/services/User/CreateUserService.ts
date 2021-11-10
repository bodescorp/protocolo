import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import {hash} from "bcryptjs";

interface IUserRequet{
    name: string;
    matricula: number;
    cargo: string;
    password: string;
}

class CreateUserService {
    async execute({name, matricula, cargo, password}){
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!matricula){
            throw new Error("Matricula incorrect")
        }        
        
        const userAlreadyExists = await usersRepository.findOne({matricula});

        if (userAlreadyExists){
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({name, matricula, cargo, password: passwordHash})

        await usersRepository.save(user);

        
        return user;
        
    }
}

export{ CreateUserService }