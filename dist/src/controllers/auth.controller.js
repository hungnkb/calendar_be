"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var auth_service_1 = require("../services/auth.service");
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.register = function (req, res) {
            try {
                var userData = req.body;
                return _this.authService.register(userData, res);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.login = function (req, res) {
            try {
                var userData = req.body;
                return _this.authService.login(userData, res);
            }
            catch (err) {
            }
        };
        this.verifyAuth = function (req, res) {
            var bearerToken = req.headers.authorization;
            return _this.authService.verifyToken(bearerToken, res);
        };
        this.authService = new auth_service_1.AuthService();
    }
    return AuthController;
}());
exports.AuthController = AuthController;
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map