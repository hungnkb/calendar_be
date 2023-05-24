"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var validate_1 = __importDefault(require("../middlewares/validate"));
var users_schema_1 = require("../models/users.schema");
var messageConstants_1 = require("../shared/constants/messageConstants");
var bcrypt_1 = __importDefault(require("bcrypt"));
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.create = function (userData, res) { return __awaiter(_this, void 0, void 0, function () {
            var validateData, checkExist, hashPassword, newUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, validate_1.default.createUser(userData)];
                    case 1:
                        validateData = _a.sent();
                        if (!validateData.success) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.findByEmail(userData.email)];
                    case 2:
                        checkExist = _a.sent();
                        if (!checkExist) return [3 /*break*/, 3];
                        res.status(400).json({ message: messageConstants_1.Message._USEREXIST, success: false });
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.hashPassword(userData.password)];
                    case 4:
                        hashPassword = _a.sent();
                        userData.password = hashPassword;
                        return [4 /*yield*/, users_schema_1.UserSchema.create(userData)];
                    case 5:
                        newUser = _a.sent();
                        if (newUser) {
                            res.status(200).json({ message: messageConstants_1.Message._SUCCESS });
                        }
                        else {
                            res.status(400).json({ message: messageConstants_1.Message._BADREQUEST, success: false });
                        }
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7: return [2 /*return*/, res.status(400).json({ message: validateData.message, success: false })];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        }); };
        this.getAll = function () { return __awaiter(_this, void 0, void 0, function () {
            var userList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_schema_1.UserSchema.find()];
                    case 1:
                        userList = _a.sent();
                        return [2 /*return*/, userList];
                }
            });
        }); };
        this.update = function (userData, id) { return __awaiter(_this, void 0, void 0, function () {
            var keys, hashPassword, _i, keys_1, key;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        keys = Object.keys(userData);
                        if (!userData.password) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.hashPassword(userData.password)];
                    case 1:
                        hashPassword = _b.sent();
                        userData.password = hashPassword;
                        _b.label = 2;
                    case 2:
                        _i = 0, keys_1 = keys;
                        _b.label = 3;
                    case 3:
                        if (!(_i < keys_1.length)) return [3 /*break*/, 6];
                        key = keys_1[_i];
                        return [4 /*yield*/, users_schema_1.UserSchema.findOneAndUpdate({ _id: id }, (_a = {}, _a[key] = userData[key], _a))];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.hashPassword = function (password) { return __awaiter(_this, void 0, void 0, function () {
            var saltRounds, salt, hashPassword;
            return __generator(this, function (_a) {
                saltRounds = +process.env.SALT_ROUNDS;
                salt = bcrypt_1.default.genSaltSync(saltRounds);
                hashPassword = bcrypt_1.default.hashSync(password, salt);
                return [2 /*return*/, hashPassword];
            });
        }); };
        this.findByEmail = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_schema_1.UserSchema.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, user];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map