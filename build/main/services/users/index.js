"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../../methods");
exports.default = ({ call }) => ({
    fields: () => call(methods_1.Method.USER_FIELDS, {}),
    get: (id) => call(methods_1.Method.USER_GET, { id })
});
