import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import jwt from 'jsonwebtoken';
import { Message } from "../shared/constants/messageConstants";

class Authorization {
    private authService: AuthService
    constructor() {
        this.authService = new AuthService();
    }

    authorization = (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.headers.authorization) {
                return next(Message._UNAUTHORIZED)
            } else {
                const bearerToken = req.headers.authorization;
                const token = bearerToken.split(' ')[1];
                const decoded = jwt.verify(token, process.env.SECRET_KEY);
                if (decoded) {
                    return next();
                }
            }
        } catch (err) {
            return next(Message._UNAUTHORIZED);
        }
    }
}

export default new Authorization();
