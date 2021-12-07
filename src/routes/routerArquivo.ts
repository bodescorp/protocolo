import {Router } from "express";
import multer from "multer";
import { CreateArquivoController } from "../controllers/Arquivo/CreateArquivoController";
import { ListArquivoController } from "../controllers/Arquivo/ListArquivoController";
import  {multerConfig}  from "../middlewares/config/multer";
import { ensureAdm } from "../middlewares/ensureAdm";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerArquivo = Router();
const createArquivoController = new CreateArquivoController();
const listArquivoController = new ListArquivoController();

routerArquivo.post("/upload", ensureAuthenticated, multer(multerConfig).single('file'), createArquivoController.handle)
routerArquivo.get("/list/arquivos", ensureAuthenticated, ensureAdm,listArquivoController.handle)

export { routerArquivo }