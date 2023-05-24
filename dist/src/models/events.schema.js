"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.eventSchema = new Schema({
    start: Date,
    end: Date,
    title: String,
    user: { type: mongoose_1.default.Types.ObjectId, ref: "users" }
});
//# sourceMappingURL=events.schema.js.map