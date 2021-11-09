import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata"
import "./database"
import { routerCurso } from "./router/routerCurso";
import { routerUser } from "./router/routerUser";

import { validError } from "./middlewares/validError";


const app = express();

app.use(express.json());

app.use(routerUser);
app.use(routerCurso)

app.use(validError)

app.listen(3000, () => console.log("Running"));