import { Router } from "express";
import { CreateCursoController } from "../controllers/Curso/CreateCursoController"
import { ensureCargo } from "../middlewares/ensureCargo";



const routerCurso = Router();

const createCursoController = new CreateCursoController();

routerCurso.post("/cursos", ensureCargo ,createCursoController.handle)

export {routerCurso}