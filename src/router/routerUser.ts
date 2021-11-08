import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserContoller";

const routerUser = Router();

const createUserController = new CreateUserController();

routerUser.post("/users", createUserController.Handle)

export {routerUser}