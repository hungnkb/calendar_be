import express, { Request, Response } from 'express';
import UserController from '../controllers/user.controller';

const apiRouter = express.Router();

apiRouter.get('/users', UserController.getAll);
apiRouter.post('/users', (req: Request, res: Response) =>  UserController.create(req, res));

export default apiRouter;
