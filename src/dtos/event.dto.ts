import { IsOptional, IsNotEmpty, MaxLength } from "class-validator";
import mongoose from "mongoose";

export class CreateEventDto {
    @IsNotEmpty()
    start: Date;

    @IsOptional()
    end: Date;

    @IsNotEmpty()
    @MaxLength(255)
    title: string;

    @IsOptional()
    participants: mongoose.Types.ObjectId[];

    @IsNotEmpty()
    user: mongoose.Types.ObjectId;
}

export class EditEventDto {

}
