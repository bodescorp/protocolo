import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata"
import "./database"

import { routerCurso } from "./routes/routerCurso"; 
import { routerUser } from "./routes/routerUser"; 
import { validError } from "./middlewares/validError"; 
import { routerSolicitacao } from "./routes/routerSolicitacao"; 


const app = express();

app.use(express.json());

// rotas
app.use(routerUser);
app.use(routerCurso)
app.use(routerSolicitacao)

app.use(validError)

app.listen(3000, () => console.log("Running"));