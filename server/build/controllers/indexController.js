"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControllers {
    index(req, res) {
        res.json({ "text": "API" });
    }
}
exports.indexControllers = new IndexControllers();
