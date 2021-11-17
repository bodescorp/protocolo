import { request, Request, Response, Router } from "express";
import multer from "multer";
import { CreateArquivoController } from "../controllers/Arquivo/CreateArquivoController";
import {multerConfig} from "../middlewares/config/multer";



const routerArquivo = Router();
const createArquivoController = new CreateArquivoController();


routerArquivo.post("/upload", multer(multerConfig).single('file') ,createArquivoController.handle)


export {routerArquivo}