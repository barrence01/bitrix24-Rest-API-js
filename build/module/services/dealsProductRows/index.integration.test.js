"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitrix_1 = __importDefault(require("./../../bitrix"));
const WEBHOOK_URL = process.env['WEBHOOK_URL'];
if (!WEBHOOK_URL) {
    throw Error('Integration tests require environmental variable `WEBHOOK_URL` to be set');
}
const { dealsProductRows } = (0, bitrix_1.default)(WEBHOOK_URL);
