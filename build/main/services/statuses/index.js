"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call }) => ({
    fields: () => call(methods_1.Method.CRM_STATUS_FIELDS, {}),
    create: (fields) => call(methods_1.Method.CRM_STATUS_ADD, { fields }),
    delete: (id, params = {}) => call(methods_1.Method.CRM_STATUS_DELETE, { id, params }),
    get: (id) => call(methods_1.Method.CRM_STATUS_GET, { id }),
    list: (params = {}) => call(methods_1.Method.CRM_STATUS_LIST, params),
    update: (id, fields) => call(methods_1.Method.CRM_STATUS_UPDATE, { id, fields })
});
