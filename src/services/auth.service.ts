import { Response } from "express";
import { UserService } from "./user.service";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Message } from "../shared/constants/messageConstants";

export class AuthService {
    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    register = async (userData: any, res: Response) => {
        return this.userService.create(userData, res);
    }

    login = async (userData: any, res: Response) => {
        try {
            const user = await this.userService.findByEmail(userData.email);
            if (user) {
                const match = await bcrypt.compare(userData.password, user.password);
                if (match) {
                    const payload = {
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
                        email: user.email,
                    }
                    const token = this.getToken(payload);
                    return res.status(200).json({
                        data: 'Bearer ' + token,
                        success: true,
                    })
                }
            }
            return res.status(400).json({
                message: Message._BADREQUEST,
                success: false
            })
        } catch (err) {
            console.log(err);
        }
    }

    getToken = (payload: Object): string => {
        const token = jwt.sign({ ...payload }, process.env.SECRET_KEY);
        return token;
    }

    verifyToken = (bearerToken: string, res: Response) => {
        try {
            const token = bearerToken.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded) {
                return res.status(200).json({
                    data: decoded,
                    success: true
                })
            }
        } catch (err) {
            return res.status(404).json({
                message: Message._UNAUTHORIZED,
                success: false
            })
        }
    }
}

