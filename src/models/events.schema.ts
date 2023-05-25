import mongoose from 'mongoose';
const { Schema } = mongoose;

export const eventSchema = new Schema({
    start: Date,
    end: Date,
    title: String,
    participants: { type: [mongoose.Types.ObjectId], ref: "users" },
    user: { type: mongoose.Types.ObjectId, ref: "users" }
});

export const EventSchema = mongoose.model("events", eventSchema);
