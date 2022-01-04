import { Router } from "express";
import { CreateDemandaController } from "../controllers/Demanda/CreateDemandaController";
import { ListDemandaByUserCargoController } from "../controllers/Demanda/ListDemandaByUserCargoController";
import { ListDemandaByUserController } from "../controllers/Demanda/ListDemandaByUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureSecretaria } from "../middlewares/ensureSecretaria";




const routerDemanda = Router();

const createDemandaController = new CreateDemandaController();
const listDemandaByUserController = new ListDemandaByUserController();
const listDemandaByUserCargoController = new ListDemandaByUserCargoController();

routerDemanda.post("/demandas", ensureAuthenticated, createDemandaController.handle)
routerDemanda.get("/demandas/send", ensureAuthenticated,listDemandaByUserController.handle)
routerDemanda.get("/demandas", ensureAuthenticated, ensureSecretaria,listDemandaByUserCargoController.handle)

export { routerDemanda }