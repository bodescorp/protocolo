import { Router } from "express";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateAlunoController } from "../controllers/Aluno/CreateAlunoController";
import { ListAlunoController } from "../controllers/Aluno/ListAlunoController";



const routerAluno = Router();

const createAlunoController = new CreateAlunoController();
const listAlunoController = new ListAlunoController();

routerAluno.post("/alunos", ensureAuthenticated, createAlunoController.handle);
routerAluno.get("/alunos",ensureAuthenticated, listAlunoController.handle);

export { routerAluno }