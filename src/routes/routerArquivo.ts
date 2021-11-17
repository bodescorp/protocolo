import { Request, Response, Router } from "express";
import multer from "multer";
import {multerConfig} from "../middlewares/config/multer";


const routerArquivo = Router();


routerArquivo.post("/upload", multer(multerConfig).single('file') ,(request: Request, response:Response)=> {
    console.log(request.file)
    return response.json({message: 'Ola deu certo'})
})

export {routerArquivo}