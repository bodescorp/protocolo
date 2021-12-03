import { Router } from "express";
import { CreateCursoController } from "../controllers/Curso/CreateCursoController"
import { ListCursoController } from "../controllers/Curso/ListCursoController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerCurso = Router();

const createCursoController = new CreateCursoController();
const listCursoController = new ListCursoController();

routerCurso.post("/cursos", ensureAuthenticated, ensureAdm, createCursoController.handle)
routerCurso.get("/cursos", listCursoController.handle)

export { routerCurso }