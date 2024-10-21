import { Method } from '../../methods';
export default ({ call, list }) => ({
    get: (id) => call(methods_1.Method.CRM_DEAL_PRODUCTROWS_GET, { id }),
    set: (id, rows) => call(methods_1.Method.CRM_DEAL_PRODUCTROWS_SET, { id, rows })
});
