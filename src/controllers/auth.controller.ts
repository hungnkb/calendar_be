import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    private authService: AuthService;
    constructor() {
        this.authService = new AuthService();
    }

    register = (req: Request, res: Response) => {
        try {
            const userData = req.body;
            return this.authService.register(userData, res);
        } catch (err) {
            console.log(err);
        }
    }

    login = (req: Request, res: Response) => {
        try {
            const userData = req.body;
            return this.authService.login(userData, res);
        } catch (err) {

        }
    }

    verifyAuth = (req: Request, res: Response) => {
            const bearerToken = req.headers.authorization;
            return this.authService.verifyToken(bearerToken, res)
    }
}

export default new AuthController();
