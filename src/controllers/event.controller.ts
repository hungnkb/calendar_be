import { Request, Response } from "express";
import { EventService } from "../services/event.service";

class EventController {
    private eventService: EventService;

    constructor() {
        this.eventService = new EventService();
    }

    create = (req: Request, res: Response) => {
        const eventData = req.body;
        return this.eventService.create(eventData, res);
    }

    findAll = (req: Request, res: Response) => {
        return this.eventService.findAll(res);
    }

    update = (req: Request, res: Response) => {
        const eventData = req.body;
        return this.eventService.update(eventData, res);
    }

    remove = (req: Request, res: Response) => {
        return this.eventService.update(req, res);
    }
}

export default new EventController();
