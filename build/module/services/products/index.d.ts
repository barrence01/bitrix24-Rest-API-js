import { Call } from '../../client/methods/call';
import { List } from '../../client/methods/list';
import { Method, MethodParams } from '../../methods';
declare type Dependencies = {
    readonly call: Call;
    readonly list: List;
};
declare const _default: ({ call, list }: Dependencies) => {
    fields: () => Promise<import("../../payloads").GetPayload<import("../common").Fields>>;
    create: <D extends {
        readonly fields: Partial<import("./entities").Product>;
    }>(fields: D["fields"]) => Promise<import("../../payloads").GetPayload<number>>;
    get: (id: string) => Promise<import("../../payloads").GetPayload<import("./entities").Product>>;
    list: (params?: MethodParams<Method.CRM_DEAL_LIST>) => Promise<import("../../payloads").ListPayload<import("./entities").Product>>;
    update: <D_1 extends {
        readonly id: string;
        readonly fields: Record<string, unknown>;
    }>(id: string, fields: D_1["fields"]) => Promise<import("../../payloads").GetPayload<boolean>>;
    delete: (id: string | number) => Promise<import("../../payloads").GetPayload<boolean>>;
};
export default _default;
