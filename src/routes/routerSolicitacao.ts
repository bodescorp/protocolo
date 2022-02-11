import { Router } from "express";
import { CreateSolicitacaoController } from "../controllers/Solicitacao/CreateSolicitacaoController";
import { ListSolicitacaoController } from "../controllers/Solicitacao/ListSolicitacaoController";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListSolicitacaoBySetorController } from "../controllers/Solicitacao/ListSolicitacaoBySetorController";

const routerSolicitacao = Router();

const createSolicitacaoController = new CreateSolicitacaoController();
const listSolicitacaoController = new ListSolicitacaoController();
const listSolicitacaoBySetorController = new ListSolicitacaoBySetorController();

routerSolicitacao.post("/solicitacoes", ensureAuthenticated, createSolicitacaoController.handle)
routerSolicitacao.get("/solicitacoes",  listSolicitacaoController.handle)
routerSolicitacao.get("/solicitacoes/setor/:id_setor", listSolicitacaoBySetorController.handle)

export { routerSolicitacao }