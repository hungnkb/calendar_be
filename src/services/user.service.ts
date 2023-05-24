import { validate } from "class-validator";
import { CreateUserDto, EditUserDto } from "../dtos/user.dto"
import { Response } from "express";
import Validate from "../middlewares/validate";
import { UserSchema } from "../models/users.schema";
import { Message } from "../shared/constants/messageConstants";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";

export class UserService {

    create = async (userData: any, res: Response) => {
        try {
            const validateData = await Validate.createUser(userData);
            if (validateData.success) {
                const checkExist = await this.findByEmail(userData.email);
                if (checkExist) {
                    res.status(400).json({ message: Message._USEREXIST, success: false });
                } else {
                    const hashPassword = await this.hashPassword(userData.password);
                    userData.password = hashPassword;
                    const newUser = await UserSchema.create(userData);
                    if (newUser) {
                        res.status(200).json({ message: Message._SUCCESS });
                    } else {
                        res.status(400).json({ message: Message._BADREQUEST, success: false });
                    }
                }
            } else {
                return res.status(400).json({ message: validateData.message, success: false });
            }
        } catch (err) {
            console.log(err);
        }
    }

    getAll = async (): Promise<Object[]> => {
        const userList = await UserSchema.find();
        return userList;
    }

    update = async (userData: EditUserDto, id: mongoose.Types.ObjectId): Promise<Object> => {
        const keys = Object.keys(userData);
        if (userData.password) {
            const hashPassword = await this.hashPassword(userData.password);
            userData.password = hashPassword;
        }
        for (let key of keys) {
            await UserSchema.findOneAndUpdate(
                { _id: id },
                { [key]: userData[key as keyof typeof userData] }
            )
        }
        return
    }

    hashPassword = async (password: string): Promise<string> => {
        const saltRounds = +process.env.SALT_ROUNDS;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        return hashPassword;
    }

    findByEmail = async (email: string) => {
        const user = await UserSchema.findOne({ email })
        if (user) {
            return user;
        }
        return;
    }
}
