import { Router } from "express";
import { CreateDemandaController } from "../controllers/Demanda/CreateDemandaController";
import { ensureCargo } from "../middlewares/ensureCargo";



const routerDemanda = Router();

const createDemandaController = new CreateDemandaController();

routerDemanda.post("/demandas",createDemandaController.handle)

export {routerDemanda}