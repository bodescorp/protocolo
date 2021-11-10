import { Router } from "express";
import { AuthenticateUserController } from "../controllers/User/AuthenticateUserController";
import { CreateUserController } from "../controllers/User/CreateUserContoller";

const routerUser = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routerUser.post("/users", createUserController.handle)
routerUser.post("/login", authenticateUserController.handle);

export {routerUser}