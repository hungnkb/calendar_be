"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var apiRouter = express_1.default.Router();
apiRouter.get('/users', user_controller_1.default.getAll);
apiRouter.post('/users', function (req, res) { return user_controller_1.default.create(req, res); });
exports.default = apiRouter;
//# sourceMappingURL=api.route.js.map