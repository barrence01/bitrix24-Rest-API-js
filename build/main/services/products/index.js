"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call, list }) => ({
    fields: () => call(methods_1.Method.CRM_PRODUCT_FIELDS, {}),
    create: (fields) => call(methods_1.Method.CRM_PRODUCT_ADD, { fields }),
    get: (id) => call(methods_1.Method.CRM_PRODUCT_GET, { id }),
    list: (params = {}) => list(methods_1.Method.CRM_PRODUCT_LIST, params),
    update: (id, fields) => call(methods_1.Method.CRM_PRODUCT_UPDATE, { id, fields }),
    delete: (id = {}) => call(methods_1.Method.CRM_PRODUCT_DELETE, { id })
});
