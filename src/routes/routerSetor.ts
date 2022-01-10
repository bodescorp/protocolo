import { Router } from "express";
import { CreateSetorController } from "../controllers/Setor/CreateSetorController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routerSetor = Router();

const createSetorController = new CreateSetorController();

routerSetor.post("/setores", createSetorController.handle)

export { routerSetor }