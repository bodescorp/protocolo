import { Router } from "express";
import { CreateSolicitacaoController } from "../controllers/Solicitacao/CreateSolicitacaoController";
import { ensureCargo } from "../middlewares/ensureCargo";

const routerSolicitacao = Router();

const createSolicitacaoController = new CreateSolicitacaoController();

routerSolicitacao.post("/solicitacoes", ensureCargo, createSolicitacaoController.handle)

export {routerSolicitacao}