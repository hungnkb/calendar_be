import { IsNotEmpty, IsAlpha, IsEmail, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsAlpha()
    firstName: string;

    @IsNotEmpty()
    @IsAlpha()
    lastName: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;
}