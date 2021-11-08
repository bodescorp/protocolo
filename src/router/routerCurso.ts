import { Router } from "express";
import { CreateCursoController } from "../controllers/Curso/CreateCursoController"

const routerCurso = Router();

const createCursoController = new CreateCursoController();

routerCurso.post("/cursos", createCursoController.handle)

export {routerCurso}