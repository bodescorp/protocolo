import { Router } from "express";
import { CreateCursoController } from "../controllers/Curso/CreateCursoController"
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerCurso = Router();

const createCursoController = new CreateCursoController();

routerCurso.post("/cursos", ensureAuthenticated, ensureAdm, createCursoController.handle)

export { routerCurso }