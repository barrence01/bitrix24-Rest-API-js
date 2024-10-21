import { Call } from '../../client/methods/call';
import { List } from '../../client/methods/list';
declare type Dependencies = {
    readonly call: Call;
    readonly list: List;
};
declare const _default: ({ call, list }: Dependencies) => {
    get: (id: string) => Promise<import("../../payloads").GetPayload<import("./entities").Row>>;
    set: <D_1 extends {
        readonly id: string;
        readonly rows: import("./entities").Row[];
    }>(id: string, rows: D_1["rows"] | undefined) => Promise<import("../../payloads").GetPayload<boolean>>;
};
export default _default;
