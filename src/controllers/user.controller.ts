import { Request, Response } from "express";
import { UserService } from "../services/user.service";

class UserController {
    private userService: UserService
    constructor() {
        this.userService = new UserService();
    }

    getAll() {
        console.log(123);
    }

    async create(req: Request, res: Response) {
        try {
            const userData = req.body;
            return this.userService.create(userData, res);
        } catch (err) {
            console.log(err);
        }
    }
}

export default new UserController();
