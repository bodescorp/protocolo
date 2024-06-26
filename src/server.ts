import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import morgan from "morgan";
import path from "path";
import cors from "cors"

import { routerCurso } from "./routes/routerCurso";
import { routerUser } from "./routes/routerUser";
import { validError } from "./middlewares/validError";
import { routerSolicitacao } from "./routes/routerSolicitacao";
import { routerArquivo } from "./routes/routerArquivo";
import { routerDemanda } from "./routes/routerDemanda";
import { routerCargo } from "./routes/routerCargo";
import { routerSetor } from "./routes/routerSetor";
import { routerAluno } from "./routes/routerAluno";
import { routerFuncionario } from "./routes/routerFuncionario";
import { routerResposta } from "./routes/routerResposta";
import { routerStatus } from "./routes/routerStatus";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

// rotas
app.use(routerUser);
app.use(routerCurso)
app.use(routerSolicitacao)
app.use(routerArquivo)
app.use(routerDemanda)
app.use(routerCargo)
app.use(routerSetor)
app.use(routerAluno)
app.use(routerFuncionario)
app.use(routerResposta)
app.use(routerStatus)

app.use(validError)

app.listen(3333, () => console.log("Running"));