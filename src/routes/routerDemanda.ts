import { Router } from "express";
import { CreateDemandaController } from "../controllers/Demanda/CreateDemandaController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";




const routerDemanda = Router();

const createDemandaController = new CreateDemandaController();

routerDemanda.post("/demandas", ensureAuthenticated, createDemandaController.handle)

export { routerDemanda }