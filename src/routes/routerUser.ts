import { Router } from "express";
import { AuthenticateUserController } from "../controllers/User/AuthenticateUserController";
import { CreateUserController } from "../controllers/User/CreateUserContoller";
import { InfoMeController } from "../controllers/User/InfoMeController";
import { ListUserController } from "../controllers/User/ListUserController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const routerUser = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserController = new ListUserController();
const infoMeController = new InfoMeController();

routerUser.post("/users", ensureAuthenticated, ensureAdm, createUserController.handle)
routerUser.post("/login", authenticateUserController.handle);
routerUser.get("/users", ensureAuthenticated, ensureAdm, listUserController.handle)
routerUser.get("/profile/user",ensureAuthenticated, infoMeController.handle)


export { routerUser }