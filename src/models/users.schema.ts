import mongoose from 'mongoose';
import { eventSchema } from './events.schema';
const { Schema } = mongoose;

export enum roleEnum {
    _User = 'user',
    _Admin = 'admin',
}
export const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: { type: String, default: roleEnum._User }
});

export const UserSchema = mongoose.model('users', userSchema);
