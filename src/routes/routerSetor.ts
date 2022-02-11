import { Router } from "express";
import { CreateSetorController } from "../controllers/Setor/CreateSetorController";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListSetorController } from "../controllers/Setor/ListSetorController";

const routerSetor = Router();

const createSetorController = new CreateSetorController();
const listSetorController = new ListSetorController()

routerSetor.post("/setores", ensureAuthenticated, createSetorController.handle)
routerSetor.get("/setores",  listSetorController.handle)

export { routerSetor }