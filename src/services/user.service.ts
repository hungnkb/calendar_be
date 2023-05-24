import { CreateUserDto } from "../dtos/user.dto"

export class UserService {

    create = async (userData: CreateUserDto) => {
        try {
            console.log(userData, 123123132123);
        } catch (err) {
            console.log(err);
        }
    }

    getAll = () => {

    }
}
