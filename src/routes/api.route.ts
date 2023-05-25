import express, { NextFunction, Request, Response } from 'express';
import UserController from '../controllers/user.controller';
import AuthController from '../controllers/auth.controller';
import EventController from '../controllers/event.controller';
import authorization from '../middlewares/authorization';

const apiRouter = express.Router();

apiRouter.post('/auth/register', (req: Request, res: Response) => AuthController.register(req, res));
apiRouter.post('/auth/login', (req: Request, res: Response) => AuthController.login(req, res));
apiRouter.options('/auth', (req: Request, res: Response) => AuthController.verifyAuth(req, res));

apiRouter.get('/users', UserController.getAll);
apiRouter.post('/users', (req: Request, res: Response) => UserController.create(req, res));

apiRouter.post('/events', (req: Request, res: Response) => EventController.create(req, res));
apiRouter.get('/events',
    (req: Request, res: Response, next: NextFunction) => authorization.authorization(req, res, next),
    (req: Request, res: Response) => EventController.findAllByUserId(req, res));
apiRouter.put('/events', (req: Request, res: Response) => EventController.update(req, res));
apiRouter.delete('/events', (req: Request, res: Response) => EventController.remove(req, res));

export default apiRouter;
