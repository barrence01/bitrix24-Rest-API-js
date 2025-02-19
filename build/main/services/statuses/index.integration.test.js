"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitrix_1 = __importDefault(require("../../bitrix"));
// @ts-ignore this should be improved in a future but it works for now
const isSortedAsc = (arr) => arr.slice(1).every((v, i) => arr[i] <= v);
// @ts-ignore this should be improved in a future but it works for now
const isSortedDesc = (arr) => arr.slice(1).every((v, i) => arr[i] >= v);
const WEBHOOK_URL = process.env['WEBHOOK_URL'];
if (!WEBHOOK_URL) {
    throw Error('Integration tests require environmental variable `WEBHOOK_URL` to be set');
}
const { statuses } = (0, bitrix_1.default)(WEBHOOK_URL);
describe('Statuses', () => {
    describe('fields', () => {
        it('should get all fields', async () => {
            const { result } = await statuses.fields();
            expect(result).toMatchSnapshot();
        });
    });
    describe('list', () => {
        it('should get all entries without optional parameters', async () => {
            const { result } = await statuses.list();
            expect(result).toMatchSnapshot();
        });
        it('should return only entries with ENTITY_ID = STATUS sorted in ascending order', async () => {
            const { result } = await statuses.list({
                order: { SORT: 'ASC' },
                filter: { ENTITY_ID: 'STATUS' }
            });
            expect(result.every((s) => s.ENTITY_ID === 'STATUS')).toBeTruthy();
            expect(isSortedAsc(result.map((s) => s.SORT))).toBeTruthy();
            expect(result).toMatchSnapshot();
        });
        it('should return only entries with ENTITY_ID = STATUS sorted in descending order', async () => {
            const { result } = await statuses.list({
                order: { SORT: 'DESC' },
                filter: { ENTITY_ID: 'STATUS' }
            });
            expect(result.every((s) => s.ENTITY_ID === 'STATUS')).toBeTruthy();
            expect(isSortedDesc(result.map((s) => s.SORT))).toBeTruthy();
            expect(result).toMatchSnapshot();
        });
    });
    describe('get', () => {
        it('should get entry with ID = 1', async () => {
            const { result } = await statuses.get('1');
            expect(result).toMatchSnapshot();
        });
        it('should return an error in case non existent ID is requested', async () => {
            const get = statuses.get('1001');
            await expect(get).rejects.toThrow(Error);
        });
    });
    describe('create', () => {
        it('should create an entry', async () => {
            const entry = {
                ENTITY_ID: 'STATUS',
                STATUS_ID: 'TEST',
                NAME: 'TEST'
            };
            const { result: id } = await statuses.create(entry);
            expect(id).toBeGreaterThan(0);
            const { result: status } = await statuses.get(id);
            expect(status).toMatchSnapshot({
                ID: expect.any(String)
            });
            const { result: deleteResult } = await statuses.delete(id);
            expect(deleteResult).toBeTruthy();
        });
    });
    describe('update', () => {
        it('should update an entry', async () => {
            const STATUS_ID = 101;
            const { result: status } = await statuses.get(STATUS_ID);
            expect(status).toMatchSnapshot();
            const { result: updateResult } = await statuses.update(STATUS_ID, {
                ...status,
                NAME: 'CHANGED'
            });
            expect(updateResult).toBeTruthy();
            const { result: updatedStatus } = await statuses.get(STATUS_ID);
            expect(updatedStatus).toMatchSnapshot();
            const { result: rollbackResult } = await statuses.update(STATUS_ID, status);
            expect(rollbackResult).toBeTruthy();
        });
    });
});
