import { Router } from "express";
import { CreateSolicitacaoController } from "../controllers/Solicitacao/CreateSolicitacaoController";
import { ListSolicitacaoController } from "../controllers/Solicitacao/ListSolicitacaoController";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routerSolicitacao = Router();

const createSolicitacaoController = new CreateSolicitacaoController();
const listSolicitacaoController = new ListSolicitacaoController();

routerSolicitacao.post("/solicitacoes", ensureAuthenticated, ensureAdm, createSolicitacaoController.handle)
routerSolicitacao.get("/solicitacoes",listSolicitacaoController.handle)

export { routerSolicitacao }