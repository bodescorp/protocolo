import { Router } from "express";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateFuncionarioController } from "../controllers/Funcionario/CreateFuncionarioController";
import { ListFuncionarioController } from "../controllers/Funcionario/ListFuncionarioController";



const routerFuncionario = Router();

const createFuncionarioController = new CreateFuncionarioController();
const listFuncionarioController = new ListFuncionarioController();

routerFuncionario.post("/funcionarios", ensureAuthenticated, ensureFuncionarios, createFuncionarioController.handle)
routerFuncionario.get("/funcionarios", ensureAuthenticated, ensureFuncionarios, listFuncionarioController.handle)

export { routerFuncionario }