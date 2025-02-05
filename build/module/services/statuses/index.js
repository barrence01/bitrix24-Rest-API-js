import { Method } from '../../methods';
export default ({ call }) => ({
    fields: () => call(Method.CRM_STATUS_FIELDS, {}),
    create: (fields) => call(Method.CRM_STATUS_ADD, { fields }),
    delete: (id, params = {}) => call(Method.CRM_STATUS_DELETE, { id, params }),
    get: (id) => call(Method.CRM_STATUS_GET, { id }),
    list: (params = {}) => call(Method.CRM_STATUS_LIST, params),
    update: (id, fields) => call(Method.CRM_STATUS_UPDATE, { id, fields })
});
