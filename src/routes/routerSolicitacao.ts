import { Router } from "express";
import { CreateSolicitacaoController } from "../controllers/Solicitacao/CreateSolicitacaoController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routerSolicitacao = Router();

const createSolicitacaoController = new CreateSolicitacaoController();

routerSolicitacao.post("/solicitacoes", ensureAuthenticated, ensureAdm, createSolicitacaoController.handle)

export { routerSolicitacao }