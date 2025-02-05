import { Method } from '../../methods';
export default ({ call, list }) => ({
    fields: () => call(Method.CRM_DEAL_FIELDS, {}),
    create: (fields, params) => call(Method.CRM_DEAL_ADD, { fields, params }),
    get: (id) => call(Method.CRM_DEAL_GET, { id }),
    list: (params = {}) => list(Method.CRM_DEAL_LIST, params),
    update: (id, fields, params) => call(Method.CRM_DEAL_UPDATE, { id, fields, params })
});
