import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories"

interface IUserRequet{
    name: string;
    matricula: number;
    cargo: string;
}

class CreateUserService {
    async execute({name, matricula, cargo}){
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!matricula){
            throw new Error("Matricula incorrect")
        }        
        
        const userAlreadyExists = await usersRepository.findOne({matricula});

        if (userAlreadyExists){
            throw new Error("User already exists");
        }

        const user = usersRepository.create({name, matricula, cargo})

        await usersRepository.save(user);

        return user;
    }
}

export{ CreateUserService }