import { Router } from "express";
import { CreateStatusController } from "../controllers/Status/CreateStatusController";
import { ListStatusController } from "../controllers/Status/ListStatusController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routerStatus = Router();

const createStatusController = new CreateStatusController();
const listStatusController = new ListStatusController();

routerStatus.post("/status", ensureAuthenticated, ensureAdm, createStatusController.handle)
routerStatus.get("/status", listStatusController.handle)

export { routerStatus }