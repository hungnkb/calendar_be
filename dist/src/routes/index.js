"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_route_1 = __importDefault(require("./api.route"));
var route = function (app) {
    app.use('/api', api_route_1.default);
};
exports.default = route;
//# sourceMappingURL=index.js.map