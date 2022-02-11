import { Router } from "express";
import { CreateCursoController } from "../controllers/Curso/CreateCursoController"
import { ListCursoController } from "../controllers/Curso/ListCursoController";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerCurso = Router();

const createCursoController = new CreateCursoController();
const listCursoController = new ListCursoController();

routerCurso.post("/cursos", ensureAuthenticated, createCursoController.handle)
routerCurso.get("/cursos", ensureAuthenticated, listCursoController.handle)

export { routerCurso }