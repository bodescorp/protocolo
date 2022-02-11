import {Router } from "express";
import multer from "multer";
import { CreateArquivoController } from "../controllers/Arquivo/CreateArquivoController";
import { ListArquivoController } from "../controllers/Arquivo/ListArquivoController";
import  {multerConfig}  from "../middlewares/config/multer";
import { ensureFuncionarios } from "../middlewares/ensureFuncionarios";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerArquivo = Router();
const createArquivoController = new CreateArquivoController();
const listArquivoController = new ListArquivoController();

routerArquivo.post("/upload", multer(multerConfig).single('file'), createArquivoController.handle)
routerArquivo.get("/list/arquivos", ensureAuthenticated, ensureFuncionarios,listArquivoController.handle)

export { routerArquivo }