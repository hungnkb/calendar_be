"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var roleEnum;
(function (roleEnum) {
    roleEnum["_User"] = "user";
    roleEnum["_Admin"] = "admin";
})(roleEnum || (roleEnum = {}));
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: { type: String, default: roleEnum._User }
});
//# sourceMappingURL=users.schema.js.map