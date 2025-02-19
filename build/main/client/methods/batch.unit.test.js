"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const lodash_range_1 = __importDefault(require("lodash.range"));
const nock_1 = __importDefault(require("nock"));
const methods_1 = require("../../methods");
const batch_1 = __importStar(require("./batch"));
describe('Client `chunkCommands` method', () => {
    it('should chunk named commands', () => {
        const chunkSize = 2;
        const commands = {
            a: { method: methods_1.Method.CRM_DEAL_GET },
            b: { method: methods_1.Method.CRM_LEAD_GET },
            c: { method: methods_1.Method.CRM_DEAL_LIST },
            d: { method: methods_1.Method.CRM_LEAD_LIST },
            e: { method: methods_1.Method.CRM_STATUS_LIST }
        };
        expect((0, batch_1.chunkCommands)(commands, chunkSize)).toMatchSnapshot();
    });
    it('should chunk array of commands', () => {
        const chunkSize = 2;
        const commands = [
            { method: methods_1.Method.CRM_DEAL_GET },
            { method: methods_1.Method.CRM_LEAD_GET },
            { method: methods_1.Method.CRM_DEAL_LIST },
            { method: methods_1.Method.CRM_LEAD_LIST },
            { method: methods_1.Method.CRM_STATUS_LIST }
        ];
        expect((0, batch_1.chunkCommands)(commands, chunkSize)).toMatchSnapshot();
    });
    it('should by default chunk with a size of `MAX_COMMANDS_PER_BATCH`', () => {
        const commandsSets = 2;
        const commands = (0, lodash_range_1.default)(0, batch_1.MAX_COMMANDS_PER_BATCH * commandsSets).map(() => ({
            method: methods_1.Method.CRM_DEAL_GET
        }));
        const chunked = (0, batch_1.chunkCommands)(commands);
        expect(chunked.length).toBe(commandsSets);
        // @ts-ignore we have asserted it length
        expect(chunked[0].length).toBe(batch_1.MAX_COMMANDS_PER_BATCH);
    });
});
describe('Client `prepareCommandsQueries` method', () => {
    it('should transform dict of the commands into the query object', () => {
        const testDealId = 11111;
        const commands = {
            one: {
                method: methods_1.Method.CRM_DEAL_GET,
                params: { ID: testDealId }
            },
            two: {
                method: methods_1.Method.CRM_DEAL_LIST,
                params: {
                    filter: { '>PROBABILITY': 50 },
                    order: { STAGE_ID: 'ASC' },
                    select: ['ID', 'TITLE'],
                    start: 200
                }
            }
        };
        expect((0, batch_1.prepareCommandsQueries)(commands)).toMatchSnapshot();
    });
    it('should work with numbered commands', () => {
        const commands = {
            0: { method: methods_1.Method.CRM_DEAL_GET },
            1: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        expect((0, batch_1.prepareCommandsQueries)(commands)).toMatchSnapshot();
    });
    it('should work with array of commands', () => {
        const commands = [{ method: methods_1.Method.CRM_DEAL_GET }, { method: methods_1.Method.CRM_DEAL_LIST }];
        expect((0, batch_1.prepareCommandsQueries)(commands)).toMatchSnapshot();
    });
    it('should return empty query object when no commands provided', () => {
        expect((0, batch_1.prepareCommandsQueries)({})).toMatchSnapshot();
    });
});
describe('Client `mergeBatchPayloads` method', () => {
    it('should merge named payloads', () => {
        const batch1 = {
            result: {
                result: {
                    a: [{ ID: '1' }, { ID: '2' }],
                    b: [{ ID: '3' }, { ID: '4' }]
                },
                result_error: [],
                result_total: { a: 8, b: 8 },
                result_next: { a: 2, b: 4 },
                result_time: {
                    a: {
                        start: 1567196891.008149,
                        finish: 1567196891.022234,
                        duration: 0.014085054397583008,
                        processing: 0.013998985290527344,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    },
                    b: {
                        start: 1567196891.022316,
                        finish: 1567196891.03225,
                        duration: 0.009933948516845703,
                        processing: 0.009846210479736328,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    }
                }
            },
            time: {
                start: 1567196890.959017,
                finish: 1567196891.223739,
                duration: 0.2647218704223633,
                processing: 0.21567082405090332,
                date_start: '2019-08-30T23:28:10+03:00',
                date_finish: '2019-08-30T23:28:11+03:00'
            }
        };
        const batch2 = {
            result: {
                result: {
                    c: [{ ID: '5' }, { ID: '6' }],
                    d: [{ ID: '7' }, { ID: '8' }]
                },
                result_error: [],
                result_total: { c: 8, d: 8 },
                result_next: { c: 6, d: 8 },
                result_time: {
                    c: {
                        start: 1567196891.032315,
                        finish: 1567196891.035297,
                        duration: 0.002981901168823242,
                        processing: 0.002897024154663086,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    },
                    d: {
                        start: 1567196891.03536,
                        finish: 1567196891.039936,
                        duration: 0.004575967788696289,
                        processing: 0.00450897216796875,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    }
                }
            },
            time: {
                start: 1567196890.959517,
                finish: 1567196891.225739,
                duration: 0.2647218704223683,
                processing: 0.21567082405090832,
                date_start: '2019-08-30T23:28:12+03:00',
                date_finish: '2019-08-30T23:28:13+03:00'
            }
        };
        expect((0, batch_1.mergeBatchPayloads)([batch1, batch2])).toMatchSnapshot();
    });
    it('should merge array payloads', () => {
        const batch1 = {
            result: {
                result: [
                    [{ ID: '1' }, { ID: '2' }],
                    [{ ID: '3' }, { ID: '4' }]
                ],
                result_error: [],
                result_total: [8, 8],
                result_next: [2, 4],
                result_time: [
                    {
                        start: 1567196891.008149,
                        finish: 1567196891.022234,
                        duration: 0.014085054397583008,
                        processing: 0.013998985290527344,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    },
                    {
                        start: 1567196891.022316,
                        finish: 1567196891.03225,
                        duration: 0.009933948516845703,
                        processing: 0.009846210479736328,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    }
                ]
            },
            time: {
                start: 1567196890.959017,
                finish: 1567196891.223739,
                duration: 0.2647218704223633,
                processing: 0.21567082405090332,
                date_start: '2019-08-30T23:28:10+03:00',
                date_finish: '2019-08-30T23:28:11+03:00'
            }
        };
        const batch2 = {
            result: {
                result: [
                    [{ ID: '5' }, { ID: '6' }],
                    [{ ID: '7' }, { ID: '8' }]
                ],
                result_error: [],
                result_total: [8, 8],
                result_next: [6, 8],
                result_time: [
                    {
                        start: 1567196891.032315,
                        finish: 1567196891.035297,
                        duration: 0.002981901168823242,
                        processing: 0.002897024154663086,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    },
                    {
                        start: 1567196891.03536,
                        finish: 1567196891.039936,
                        duration: 0.004575967788696289,
                        processing: 0.00450897216796875,
                        date_start: '2019-08-30T23:28:11+03:00',
                        date_finish: '2019-08-30T23:28:11+03:00'
                    }
                ]
            },
            time: {
                start: 1567196890.959517,
                finish: 1567196891.225739,
                duration: 0.2647218704223683,
                processing: 0.21567082405090832,
                date_start: '2019-08-30T23:28:12+03:00',
                date_finish: '2019-08-30T23:28:13+03:00'
            }
        };
        expect((0, batch_1.mergeBatchPayloads)([batch1, batch2])).toMatchSnapshot();
    });
});
const TEST_URI = 'https://test.com/rest';
const batch = (0, batch_1.default)({
    get: got_1.default.extend({ prefixUrl: TEST_URI, responseType: 'json' }).get
});
const RESPONSE_200 = 200;
describe('Client `batch` method', () => {
    it('should form a proper request', async () => {
        const payload = { result: { result: { one: 'done', two: 'done' }, result_error: [] } };
        const dealId = 999;
        const commands = {
            one: { method: methods_1.Method.CRM_DEAL_GET, params: { ID: dealId } },
            two: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        const scope = (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5Bone%5D=${commands.one.method}%3FID%3D${dealId}&cmd%5Btwo%5D=${commands.two.method}`)
            .reply(RESPONSE_200, payload);
        await batch(commands);
        expect(scope.done()).toBe(undefined);
    });
    it('should form a proper request with numbered commands', async () => {
        const payload = { result: { result: ['done1', 'done2'], result_error: [] } };
        const dealId = 999;
        const commands = {
            0: { method: methods_1.Method.CRM_DEAL_GET, params: { ID: dealId } },
            1: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        const scope = (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely
            //       connected to the `[]` since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}%3FID%3D${dealId}&cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        await batch(commands);
        expect(scope.done()).toBe(undefined);
    });
    it('should form a proper request with array of commands', async () => {
        const payload = { result: { result: ['done1', 'done2'], result_error: [] } };
        const dealId = 999;
        const commands = [
            { method: methods_1.Method.CRM_DEAL_GET, params: { ID: dealId } },
            { method: methods_1.Method.CRM_DEAL_LIST }
        ];
        const scope = (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely
            //       connected to the `[]` since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}%3FID%3D${dealId}&cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        await batch(commands);
        expect(scope.done()).toBe(undefined);
    });
    it('should form a proper requests with more than max allowed commands per batch', async () => {
        const maxCommandsPerBatch = 1;
        const payload = { result: { result: { one: 'done', two: 'done' }, result_error: [] } };
        const dealId = 999;
        const commands = {
            one: { method: methods_1.Method.CRM_DEAL_GET, params: { ID: dealId } },
            two: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        const scope = (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5Bone%5D=${commands.one.method}%3FID%3D${dealId}`)
            .reply(RESPONSE_200, payload)
            .get(`/${methods_1.Method.BATCH}?cmd%5Btwo%5D=${commands.two.method}`)
            .reply(RESPONSE_200, payload);
        await batch(commands, maxCommandsPerBatch);
        expect(scope.done()).toBe(undefined);
    });
    it('should form a proper request with more than allowed max numbered commands', async () => {
        const maxCommandsPerBatch = 1;
        const payload = { result: { result: ['done1', 'done2'], result_error: [] } };
        const dealId = 999;
        const commands = {
            0: { method: methods_1.Method.CRM_DEAL_GET, params: { ID: dealId } },
            1: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        const scope = (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely
            //       connected to the `[]` since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}%3FID%3D${dealId}`)
            .reply(RESPONSE_200, payload)
            .get(`/${methods_1.Method.BATCH}?cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        await batch(commands, maxCommandsPerBatch);
        expect(scope.done()).toBe(undefined);
    });
    it('should form a proper request with more than max allowed array of commands', async () => {
        const maxCommandsPerBatch = 1;
        const payload = { result: { result: ['done1', 'done2'], result_error: [] } };
        const dealId = 999;
        const commands = [
            { method: methods_1.Method.CRM_DEAL_GET, params: { ID: dealId } },
            { method: methods_1.Method.CRM_DEAL_LIST }
        ];
        const scope = (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely
            //       connected to the `[]` since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}%3FID%3D${dealId}`)
            .reply(RESPONSE_200, payload)
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        await batch(commands, maxCommandsPerBatch);
        expect(scope.done()).toBe(undefined);
    });
    it('should return body as payload', async () => {
        const commands = {
            0: { method: methods_1.Method.CRM_DEAL_GET },
            1: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        const payload = {
            result: {
                result: ['done'],
                result_error: [],
                result_next: [],
                result_time: [],
                result_total: []
            },
            time: {}
        };
        (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}&cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        expect(await batch(commands)).toEqual(payload);
    });
    // @todo Test this also for named and numbered commands
    it('should merge payloads when more then max allowed commands provided', async () => {
        const maxAllowedCommands = 1;
        const commands = {
            0: { method: methods_1.Method.CRM_DEAL_GET },
            1: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        const payload1 = {
            result: {
                result: ['done1'],
                result_error: [],
                result_next: [1],
                result_time: [],
                result_total: [2]
            },
            time: {}
        };
        const payload2 = {
            result: {
                result: ['done2'],
                result_error: [],
                result_next: [2],
                result_time: [],
                result_total: [2]
            },
            time: {}
        };
        (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}`)
            .reply(RESPONSE_200, payload1)
            .get(`/${methods_1.Method.BATCH}?cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload2);
        expect(await batch(commands, maxAllowedCommands)).toMatchSnapshot();
    });
    it.todo('should cast payload to the <P>');
    it('should throw when getting errors in payload', () => {
        const payload = {
            result: {
                result: { one: 'done', two: 'done' },
                result_error: {
                    one: 'Expected error from numbered `batch` one',
                    two: 'Expected error from numbered `batch` two'
                }
            }
        };
        const commands = {
            one: { method: methods_1.Method.CRM_DEAL_GET },
            two: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5Bone%5D=${commands.one.method}&cmd%5Btwo%5D=${commands.two.method}`)
            .reply(RESPONSE_200, payload);
        return expect(batch(commands)).rejects.toMatchSnapshot();
    });
    it('should throw when getting errors in numbered commands payload', () => {
        const payload = {
            result: {
                result: ['done'],
                result_error: [
                    'Expected error from numbered `batch` 0',
                    'Expected error from numbered `batch` 1'
                ]
            }
        };
        const commands = {
            0: { method: methods_1.Method.CRM_DEAL_GET },
            1: { method: methods_1.Method.CRM_DEAL_LIST }
        };
        (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}&cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        return expect(batch(commands)).rejects.toMatchSnapshot();
    });
    it('should throw when getting errors in array of commands payload', () => {
        const payload = {
            result: {
                result: ['done'],
                result_error: [
                    'Expected error from array of command `batch` 0',
                    'Expected error from array of command `batch` 1'
                ]
            }
        };
        const commands = [{ method: methods_1.Method.CRM_DEAL_GET }, { method: methods_1.Method.CRM_DEAL_LIST }];
        (0, nock_1.default)(TEST_URI)
            // @todo We'd want to use `query` object here as it is much more readable, but nock for some reason
            //       fails to match request when it contains `cmd[someName]`. The issue definitely connected
            //       to the `[]`, since it does not appear when only one bracket present
            .get(`/${methods_1.Method.BATCH}?cmd%5B0%5D=${commands[0].method}&cmd%5B1%5D=${commands[1].method}`)
            .reply(RESPONSE_200, payload);
        return expect(batch(commands)).rejects.toMatchSnapshot();
    });
});
