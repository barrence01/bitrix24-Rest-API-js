import { Method } from '../../methods';
export default ({ call, list }) => ({
    fields: () => call(Method.CRM_PRODUCT_FIELDS, {}),
    create: (fields) => call(Method.CRM_PRODUCT_ADD, { fields }),
    get: (id) => call(Method.CRM_PRODUCT_GET, { id }),
    list: (params = {}) => list(Method.CRM_PRODUCT_LIST, params),
    update: (id, fields) => call(Method.CRM_PRODUCT_UPDATE, { id, fields }),
    delete: (id = {}) => call(Method.CRM_PRODUCT_DELETE, { id })
});
