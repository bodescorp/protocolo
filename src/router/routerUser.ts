import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserContoller";

const routerUser = Router();

const createUserController = new CreateUserController();

routerUser.post("/users", createUserController.handle)

export {routerUser}