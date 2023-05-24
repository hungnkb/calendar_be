"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.userSchema = exports.roleEnum = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var roleEnum;
(function (roleEnum) {
    roleEnum["_User"] = "user";
    roleEnum["_Admin"] = "admin";
})(roleEnum = exports.roleEnum || (exports.roleEnum = {}));
exports.userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: { type: String, default: roleEnum._User }
});
exports.UserSchema = mongoose_1.default.model('users', exports.userSchema);
//# sourceMappingURL=users.schema.js.map