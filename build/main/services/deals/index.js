"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call, list }) => ({
    fields: () => call(methods_1.Method.CRM_DEAL_FIELDS, {}),
    create: (fields, params) => call(methods_1.Method.CRM_DEAL_ADD, { fields, params }),
    get: (id) => call(methods_1.Method.CRM_DEAL_GET, { id }),
    list: (params = {}) => list(methods_1.Method.CRM_DEAL_LIST, params),
    update: (id, fields, params) => call(methods_1.Method.CRM_DEAL_UPDATE, { id, fields, params })
});
