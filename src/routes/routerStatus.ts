import { Router } from "express";
import { CreateStatusController } from "../controllers/Status/CreateStatusController";
import { ListStatusController } from "../controllers/Status/ListStatusController";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routerStatus = Router();

const createStatusController = new CreateStatusController();
const listStatusController = new ListStatusController();

routerStatus.post("/status", ensureAuthenticated, createStatusController.handle)
routerStatus.get("/status", listStatusController.handle)

export { routerStatus }