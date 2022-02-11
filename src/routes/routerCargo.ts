import { Router } from "express";
import { CreateCargoController } from "../controllers/Cargo/CreateCargoController";
import { ListCargoController } from "../controllers/Cargo/ListCargoController";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerCargo = Router();

const createCargoController = new CreateCargoController();
const listCargoController = new ListCargoController();

routerCargo.post("/cargos", ensureAuthenticated, createCargoController.handle)
routerCargo.get("/cargos", ensureAuthenticated, listCargoController.handle)

export { routerCargo }