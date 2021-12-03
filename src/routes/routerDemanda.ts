import { Router } from "express";
import { CreateDemandaController } from "../controllers/Demanda/CreateDemandaController";
import { ListDemandaByUserController } from "../controllers/Demanda/ListDemandaByUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";




const routerDemanda = Router();

const createDemandaController = new CreateDemandaController();
const listDemandaByUserService = new ListDemandaByUserController();

routerDemanda.post("/demandas", ensureAuthenticated, createDemandaController.handle)
routerDemanda.get("/demandas/send", ensureAuthenticated,listDemandaByUserService.handle)

export { routerDemanda }