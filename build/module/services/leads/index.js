import { Method } from '../../methods';
export default ({ call, list }) => ({
    fields: () => call(Method.CRM_LEAD_FIELDS, {}),
    create: (fields, params) => call(Method.CRM_LEAD_ADD, { fields, params }),
    get: (id) => call(Method.CRM_LEAD_GET, { id }),
    list: (params = {}) => list(Method.CRM_LEAD_LIST, params),
    update: (id, fields, params) => call(Method.CRM_LEAD_UPDATE, { id, fields, params })
});
