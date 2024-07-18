import { Call } from '../../client/methods/call.js'
import { List } from '../../client/methods/list.js'
import { Method, MethodParams } from '../../methods.js'

type Dependencies = {
  readonly call: Call
  readonly list: List
}

export default ({ call, list }: Dependencies) => ({
  fields: () =>
    call(Method.CRM_CONTACT_FIELDS, {}),

  create: <D extends MethodParams<Method.CRM_CONTACT_ADD>>(fields: D['fields'], params?: D['params']) =>
    call(Method.CRM_CONTACT_ADD, { fields, params }),

  get: (id: string) =>
    call(Method.CRM_CONTACT_GET, { id }),

  list: (params: MethodParams<Method.CRM_CONTACT_LIST> = {}) =>
    list(Method.CRM_CONTACT_LIST, params),

  update: <D extends MethodParams<Method.CRM_CONTACT_UPDATE>>(id: string, fields: D['fields'], params?: D['params']) =>
    call(Method.CRM_CONTACT_UPDATE, { id, fields, params })
})
