"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call, list }) => ({
    fields: () => call(methods_1.Method.CRM_LEAD_FIELDS, {}),
    create: (fields, params) => call(methods_1.Method.CRM_LEAD_ADD, { fields, params }),
    get: (id) => call(methods_1.Method.CRM_LEAD_GET, { id }),
    list: (params = {}) => list(methods_1.Method.CRM_LEAD_LIST, params),
    update: (id, fields, params) => call(methods_1.Method.CRM_LEAD_UPDATE, { id, fields, params })
});
