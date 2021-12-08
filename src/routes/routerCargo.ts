import { Router } from "express";
import { CreateCargoController } from "../controllers/Cargo/CreateCargoController";
import { ListCargoController } from "../controllers/Cargo/ListCargoController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerCargo = Router();

const createCargoController = new CreateCargoController();
const listCargoController = new ListCargoController();

routerCargo.post("/cargos", ensureAuthenticated, ensureAdm, createCargoController.handle)
routerCargo.get("/cargos", listCargoController.handle)

export { routerCargo }