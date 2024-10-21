import { ListParams, Method } from '../../methods';
import { GetPayload, ListPayload } from '../../payloads';
import { Fields } from '../common';
import { Product } from './entities';
export declare type DealsMethods = {
    readonly [Method.CRM_PRODUCT_FIELDS]: {
        readonly type: Product;
        readonly payload: GetPayload<Fields>;
        readonly params?: Record<string, unknown>;
    };
    readonly [Method.CRM_PRODUCT_ADD]: {
        readonly type: Product;
        readonly payload: GetPayload<number>;
        readonly params: {
            readonly fields: Partial<Product>;
        };
    };
    readonly [Method.CRM_PRODUCT_GET]: {
        readonly type: Product;
        readonly payload: GetPayload<Product>;
        readonly params: {
            readonly id: string;
        };
    };
    readonly [Method.CRM_PRODUCT_LIST]: {
        readonly type: Product;
        readonly payload: ListPayload<Product>;
        readonly params: ListParams;
    };
    readonly [Method.CRM_PRODUCT_UPDATE]: {
        readonly type: Product;
        readonly payload: GetPayload<boolean>;
        readonly params: {
            readonly id: string;
            readonly fields: Record<string, unknown>;
        };
    };
};
