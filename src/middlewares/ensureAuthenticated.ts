import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()
interface Ipayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, `${process.env.CHAVE_TOKEN}`) as Ipayload;

        request.user_id = sub;

        return next();
    } catch (error) {
        return response.status(401).end();
    }
    

}