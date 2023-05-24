"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var event_controller_1 = __importDefault(require("../controllers/event.controller"));
var apiRouter = express_1.default.Router();
apiRouter.post('/auth/register', function (req, res) { return auth_controller_1.default.register(req, res); });
apiRouter.post('/auth/login', function (req, res) { return auth_controller_1.default.login(req, res); });
apiRouter.options('/auth', function (req, res) { return auth_controller_1.default.verifyAuth(req, res); });
apiRouter.get('/users', user_controller_1.default.getAll);
apiRouter.post('/users', function (req, res) { return user_controller_1.default.create(req, res); });
apiRouter.post('/events', function (req, res) { return event_controller_1.default.create(req, res); });
apiRouter.get('/events', function (req, res) { return event_controller_1.default.findAll(req, res); });
apiRouter.put('/events:id', function (req, res) { return event_controller_1.default.update(req, res); });
apiRouter.delete('/events:id', function (req, res) { return event_controller_1.default.remove(req, res); });
exports.default = apiRouter;
//# sourceMappingURL=api.route.js.map