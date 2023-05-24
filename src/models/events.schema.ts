import mongoose from 'mongoose';
const { Schema } = mongoose;

export const eventSchema = new Schema({
    start: Date,
    end: Date,
    title: String,
    user: { type: mongoose.Types.ObjectId, ref: "users" }
});