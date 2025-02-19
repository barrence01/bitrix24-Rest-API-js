import { Method } from '../../methods';
export default ({ call, list }) => ({
    fields: () => call(Method.CRM_COMPANY_FIELDS, {}),
    create: (fields, params) => call(Method.CRM_COMPANY_ADD, { fields, params }),
    get: (id) => call(Method.CRM_COMPANY_GET, { id }),
    list: (params = {}) => list(Method.CRM_COMPANY_LIST, params),
    update: (id, fields, params) => call(Method.CRM_COMPANY_UPDATE, { id, fields, params })
});
