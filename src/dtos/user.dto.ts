import { IsEmail, IsStrongPassword, IsOptional } from "class-validator";
import { roleEnum } from "../models/users.schema";

export class CreateUserDto {
    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;

    @IsOptional()
    role: roleEnum;
}

export class EditUserDto {
    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsOptional()
    @IsStrongPassword()
    password: string;

    @IsOptional()
    role: roleEnum;
}
