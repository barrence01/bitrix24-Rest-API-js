import { ListParams, Method } from '../../methods';
import { GetPayload, ListPayload } from '../../payloads';
import { Fields } from '../common';
import { Row } from './entities';
export declare type DealsProductRowsMethods = {
    readonly [Method.CRM_DEAL_PRODUCTROWS_SET]: {
        readonly type: DealProductRows;
        readonly payload: GetPayload<boolean>;
        readonly params: {
            readonly id: string;
            readonly rows: GetPayload<Row>[];
        };
    };
    readonly [Method.CRM_DEAL_PRODUCTROWS_GET]: {
        readonly type: DealProductRows;
        readonly payload: GetPayload<Row>;
        readonly params: {
            readonly id: string;
        };
    };
};
