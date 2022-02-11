import { getCustomRepository } from "typeorm";
import { AlunosRepositories } from "../../repositories/AlunosRepositories"
import { CursosRepositories } from "../../repositories/CursosRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IAlunoRequest {
    id_user: string,
    id_curso: string
}

class CreateAlunoService {
    async execute({ id_user, id_curso }) {
        const alunosRepositories = getCustomRepository(AlunosRepositories);

        const usersRepository = getCustomRepository(UsersRepositories);

        const cursosRepositories = getCustomRepository(CursosRepositories);


        const userExists = await usersRepository.findOne(id_user);

        if (!userExists) {
            throw new Error("User does not exists!");
        }

        const cursoExists = await cursosRepositories.findOne(id_curso);

        if (!cursoExists) {
            throw new Error("Curso does not exists!");
        }

        const aluno = alunosRepositories.create({
            id_user,
            id_curso
        })

        await alunosRepositories.save(aluno);

        return aluno;
    }
}

export { CreateAlunoService }