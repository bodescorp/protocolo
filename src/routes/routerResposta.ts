import { Router } from "express";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRespostaController } from "../controllers/Resposta/CreateRespostaController";
import { ListRespostaController } from "../controllers/Resposta/ListRespostaController";
import { InfoRespostaController } from "../controllers/Resposta/InfoRespostaController";



const routerResposta = Router();

const createRespostaController = new CreateRespostaController();
const listRespostaController = new ListRespostaController();
const infoRespostaController = new InfoRespostaController();

routerResposta.post("/resposta/demanda", ensureAuthenticated, createRespostaController.handle)
routerResposta.get("/respostas", ensureAuthenticated, listRespostaController.handle)
routerResposta.get("/info/resposta/:id_demanda", ensureAuthenticated, infoRespostaController.handle)

export { routerResposta }