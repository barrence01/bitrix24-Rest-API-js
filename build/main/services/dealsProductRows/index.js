"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call }) => ({
    get: (id) => call(methods_1.Method.CRM_DEAL_PRODUCTROWS_GET, { id }),
    set: (id, rows) => call(methods_1.Method.CRM_DEAL_PRODUCTROWS_SET, { id, rows })
});
