import { Method } from '../../methods';
export default ({ call }) => ({
    fields: () => call(Method.USER_FIELDS, {}),
    get: (id) => call(Method.USER_GET, { id })
});
