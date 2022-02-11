import { Router } from "express";
import { CreateDemandaController } from "../controllers/Demanda/CreateDemandaController";
import { InfoDemandaController } from "../controllers/Demanda/InfoDemandaController";
import { ListDemandaByUserCargoController } from "../controllers/Demanda/ListDemandaByUserCargoController";
import { ListDemandaByUserController } from "../controllers/Demanda/ListDemandaByUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";






const routerDemanda = Router();

const createDemandaController = new CreateDemandaController();
const listDemandaByUserController = new ListDemandaByUserController();
const listDemandaByUserCargoController = new ListDemandaByUserCargoController();
const infoDemandaController = new InfoDemandaController();

routerDemanda.post("/demandas", ensureAuthenticated, createDemandaController.handle)
routerDemanda.get("/demandas/send", ensureAuthenticated,listDemandaByUserController.handle)
routerDemanda.get("/demandas", ensureAuthenticated, ensureFuncionarios, listDemandaByUserCargoController.handle)
routerDemanda.get("/info/demanda/:id_demanda", ensureAuthenticated, infoDemandaController.handle)

export { routerDemanda }