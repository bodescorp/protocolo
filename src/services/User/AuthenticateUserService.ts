import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    matricula: number;
    password: string;

}

class AuthenticateUserService {
    async execute({ matricula, password }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({ matricula });

        if (!user) {
            throw new Error("Matricula/Password incorrect ")
        }

        const passwordMach = await compare(password, user.password);

        if (!passwordMach) {
            throw new Error("Matricula/Password incorrect ")
        }

        const token = sign({
            matricula: user.matricula
        }, "de7b5be3e0b4965023be46fe2a55bd42", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }

}

export { AuthenticateUserService }