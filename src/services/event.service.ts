import { Response } from "express";
import { CreateEventDto } from "../dtos/event.dto";
import { EventSchema } from "../models/events.schema";
import { Message } from "../shared/constants/messageConstants";
import mongoose from "mongoose";

export class EventService {

    create = async (eventData: CreateEventDto, res: Response) => {
        try {
            if (!eventData.end) {
                eventData.end = eventData.start;
            }
            await EventSchema.create(eventData);
            res.status(200).json({
                success: Message._SUCCESS
            })
        } catch (err) {
            console.log(err);
            res.status(400).json({
                success: Message._BADREQUEST
            })
        }
    }

    findAll = (res: Response) => {

    }

    update = (eventData: any, res: Response) => {

    }

    remove = (id: any, res: Response) => {

    }

    findByUserId = async (idUser: any, res: Response): Promise<Response> => {
        const events = await EventSchema.find({ user: idUser })
            .populate('user', ['_id', 'email'])
            .populate('participants', ['_id', 'email'])
            .exec();
        return res.status(200).json({
            data: events,
            success: Message._SUCCESS
        })
    }
}