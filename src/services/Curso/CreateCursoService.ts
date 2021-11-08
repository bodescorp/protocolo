import { getCustomRepository } from "typeorm";
import { CursosRepositories } from "../../repositories/CursosRepositories"


class CreateCursoService{
    async execute(name: string){
        const cursosRepositories = getCustomRepository(CursosRepositories);
        
        if(!name){
            throw new Error("Incorrect name!");
        }

        const cursoAlreadyExists = await cursosRepositories.findOne({
            name
        });

        if (cursoAlreadyExists) {
            throw new Error("Curso already exists!");
        }

        const curso = cursosRepositories.create({
            name
        });

        await cursosRepositories.save(curso);
        return curso;
    }
}

export {CreateCursoService}