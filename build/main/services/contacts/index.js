"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call, list }) => ({
    fields: () => call(methods_1.Method.CRM_CONTACT_FIELDS, {}),
    create: (fields, params) => call(methods_1.Method.CRM_CONTACT_ADD, { fields, params }),
    get: (id) => call(methods_1.Method.CRM_CONTACT_GET, { id }),
    list: (params = {}) => list(methods_1.Method.CRM_CONTACT_LIST, params),
    update: (id, fields, params) => call(methods_1.Method.CRM_CONTACT_UPDATE, { id, fields, params })
});
