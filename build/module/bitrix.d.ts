import { ExtendOptions } from 'got';
/**
 * Construct a Bitrix client with generic methods
 * @param restURI REST endpoint, like a `https://hello.bitrix24.ua/rest` or an inbound webhook endpoint,
 *                like a `https://hello.bitrix24.ua/rest/1/WEBHOOK_TOKEN`.
 * @param accessToken Bitrix application Access Token. Do not specify in case inbound webhook endpoint used.
 * @param clientOptions an object that will overwrite underlying configuration for HTTP client,
 *                see `https://github.com/sindresorhus/got/blob/main/documentation/2-options.md`.
 */
export declare const Bitrix: (restURI: string, accessToken?: string, clientOptions?: ExtendOptions) => {
    call: import("./client/methods/call").Call;
    batch: import("./client/methods/batch").Batch;
    list: import("./client/methods/list").List;
    companies: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/common").Fields>>;
        create: <D extends {
            readonly fields: Partial<import("./services/companies/entities").Company>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(fields: D["fields"], params?: D["params"] | undefined) => Promise<import("./payloads").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads").GetPayload<import("./services/companies/entities").Company>>;
        list: (params?: import("./methods").ListParams) => Promise<import("./payloads").ListPayload<import("./services/companies/entities").Company>>;
        update: <D_1 extends {
            readonly id: string;
            readonly fields: Record<string, unknown>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(id: string, fields: D_1["fields"], params?: D_1["params"] | undefined) => Promise<import("./payloads").GetPayload<boolean>>;
    };
    contacts: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/common").Fields>>;
        create: <D_2 extends {
            readonly fields: Partial<import("./services/contacts/entities").Contact>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(fields: D_2["fields"], params?: D_2["params"] | undefined) => Promise<import("./payloads").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads").GetPayload<import("./services/contacts/entities").Contact>>;
        list: (params?: import("./methods").ListParams) => Promise<import("./payloads").ListPayload<import("./services/contacts/entities").Contact>>;
        update: <D_3 extends {
            readonly id: string;
            readonly fields: Record<string, unknown>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(id: string, fields: D_3["fields"], params?: D_3["params"] | undefined) => Promise<import("./payloads").GetPayload<boolean>>;
    };
    products: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/common").Fields>>;
        create: <D_4 extends {
            readonly fields: Partial<import("./services/products/entities").Product>;
        }>(fields: D_4["fields"]) => Promise<import("./payloads").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads").GetPayload<import("./services/products/entities").Product>>;
        list: (params?: import("./methods").ListParams) => Promise<import("./payloads").ListPayload<import("./services/products/entities").Product>>;
        update: <D_5 extends {
            readonly id: string;
            readonly fields: Record<string, unknown>;
        }>(id: string, fields: D_5["fields"]) => Promise<import("./payloads").GetPayload<boolean>>;
        delete: (id: string | number) => Promise<import("./payloads").GetPayload<boolean>>;
    };
    deals: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/common").Fields>>;
        create: <D_4 extends {
            readonly fields: Partial<import("./services/deals/entities").Deal>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(fields: D_4["fields"], params?: D_4["params"] | undefined) => Promise<import("./payloads").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads").GetPayload<import("./services/deals/entities").Deal>>;
        list: (params?: import("./methods").ListParams) => Promise<import("./payloads").ListPayload<import("./services/deals/entities").Deal>>;
        update: <D_5 extends {
            readonly id: string;
            readonly fields: Record<string, unknown>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(id: string, fields: D_5["fields"], params?: D_5["params"] | undefined) => Promise<import("./payloads").GetPayload<boolean>>;
    };
    dealsProductRows: {
        get: (id: string) => Promise<import("../../payloads").GetPayload<import("./entities").Row>>;
        set: <D_1 extends {
            readonly id: string;
            readonly rows: import("./entities").Row[];
        }>(id: string, rows: D_1["rows"] | undefined) => Promise<import("../../payloads").GetPayload<boolean>>;
    };
    leads: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/common").Fields>>;
        create: <D_6 extends {
            readonly fields: Partial<import("./services/leads/entities").Lead>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(fields: D_6["fields"], params?: D_6["params"] | undefined) => Promise<import("./payloads").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads").GetPayload<import("./services/leads/entities").Lead>>;
        list: (params?: import("./methods").ListParams) => Promise<import("./payloads").ListPayload<import("./services/leads/entities").Lead>>;
        update: <D_7 extends {
            readonly id: string;
            readonly fields: Record<string, unknown>;
            readonly params?: {
                readonly REGISTER_SONET_EVENT: "Y" | "N";
            } | undefined;
        }>(id: string, fields: D_7["fields"], params?: D_7["params"] | undefined) => Promise<import("./payloads").GetPayload<boolean>>;
    };
    statuses: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/common").Fields>>;
        create: (fields: Partial<import("./services/statuses/entities").Status>) => Promise<import("./payloads").GetPayload<number>>;
        delete: (id: string | number, params?: {
            readonly FORCED?: "Y" | "N" | undefined;
        } | undefined) => Promise<import("./payloads").GetPayload<boolean>>;
        get: (id: string | number) => Promise<import("./payloads").GetPayload<import("./services/statuses/entities").Status>>;
        list: (params?: {
            readonly order?: Record<string, unknown> | undefined;
            readonly filter?: Record<string, unknown> | undefined;
        }) => Promise<import("./payloads").ListPayload<import("./services/statuses/entities").Status>>;
        update: (id: string | number, fields: Record<string, unknown>) => Promise<import("./payloads").GetPayload<boolean>>;
    };
    users: {
        fields: () => Promise<import("./payloads").GetPayload<import("./services/users/entities").User>>;
        get: (id?: string | undefined) => Promise<import("./payloads").GetPayload<readonly import("./services/users/entities").User[]>>;
    };
};
export default Bitrix;
export * from './methods';
export * from './commands';
export * from './services/common';
export * from './services/companies/entities';
export * from './services/contacts/entities';
export * from './services/currencies/entities';
export * from './services/products/entities';
export * from './services/deals/entities';
export * from './services/dealsProductRows/entities';
export * from './services/leads/entities';
export * from './services/statuses/entities';
export * from './services/users/entities';
