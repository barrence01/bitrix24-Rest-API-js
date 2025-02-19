"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const statuses = (0, _1.default)({ call: mockCall });
const ID = '77';
describe('Statuses', () => {
    beforeEach(() => {
        mockCall.mockClear();
        mockList.mockClear();
    });
    it('should expose API methods', () => {
        expect(statuses).toMatchSnapshot();
    });
    describe('`create`', () => {
        it('should invoke `call`', async () => {
            await statuses.create({
                NAME: 'Test name'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`get`', () => {
        it('should invoke `call`', async () => {
            await statuses.get(ID);
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`list`', () => {
        it('should invoke `call`', async () => {
            await statuses.list({
                order: { NAME: 'ASC' },
                filter: { ENTITY_ID: 'STATUS' }
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await statuses.list();
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`update`', () => {
        it('should invoke `call`', async () => {
            await statuses.update(ID, {
                NAME: 'Test name'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await statuses.update(ID, {
                NAME: 'Test name'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
});
