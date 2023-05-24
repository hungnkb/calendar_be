"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_service_1 = require("../services/event.service");
var EventController = /** @class */ (function () {
    function EventController() {
        var _this = this;
        this.create = function (req, res) {
            var eventData = req.body;
            return _this.eventService.create(eventData, res);
        };
        this.findAll = function (req, res) {
            return _this.eventService.findAll(res);
        };
        this.update = function (req, res) {
            var eventData = req.body;
            return _this.eventService.update(eventData, res);
        };
        this.remove = function (req, res) {
            return _this.eventService.update(req, res);
        };
        this.eventService = new event_service_1.EventService();
    }
    return EventController;
}());
exports.default = new EventController();
//# sourceMappingURL=event.controller.js.map