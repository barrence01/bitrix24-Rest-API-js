import { Method } from '../../methods';
export default ({ call, list }) => ({
    fields: () => call(Method.CRM_CONTACT_FIELDS, {}),
    create: (fields, params) => call(Method.CRM_CONTACT_ADD, { fields, params }),
    get: (id) => call(Method.CRM_CONTACT_GET, { id }),
    list: (params = {}) => list(Method.CRM_CONTACT_LIST, params),
    update: (id, fields, params) => call(Method.CRM_CONTACT_UPDATE, { id, fields, params })
});
