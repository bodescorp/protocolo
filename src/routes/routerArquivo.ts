import {Router } from "express";
import multer from "multer";
import { CreateArquivoController } from "../controllers/Arquivo/CreateArquivoController";
import { multerConfig } from "../middlewares/config/multer";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const routerArquivo = Router();
const createArquivoController = new CreateArquivoController();


routerArquivo.post("/upload", ensureAuthenticated, multer(multerConfig).single('file'), createArquivoController.handle)


export { routerArquivo }