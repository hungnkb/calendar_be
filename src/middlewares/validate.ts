import { validate } from "class-validator";
import { CreateUserDto } from "../dtos/user.dto";
import { Message } from "../shared/constants/messageConstants";

interface ICreateUser {
    message: Object[] | string;
    success: boolean;
}

class Validate {
    async createUser(userData: CreateUserDto): Promise<ICreateUser> {
        let payload = new CreateUserDto();
        for (let [key, value] of Object.entries(userData)) {
            payload[key as keyof typeof userData] = value;
        }
        const err = await validate(payload);
        if (err.length > 0) {
            const errorMessages = [];
            for (let i of err) {
                if (i.constraints) {
                    errorMessages.push(i.constraints);
                }
            }
            return {
                message: errorMessages,
                success: false
            }
        }
        return {
            message: Message._SUCCESS,
            success: true
        }

    }

}


export default new Validate();