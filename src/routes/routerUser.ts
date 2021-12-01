import { Router } from "express";
import { AuthenticateUserController } from "../controllers/User/AuthenticateUserController";
import { CreateUserController } from "../controllers/User/CreateUserContoller";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routerUser = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routerUser.post("/users", ensureAuthenticated, ensureAdm, createUserController.handle)
routerUser.post("/login", authenticateUserController.handle);

export { routerUser }