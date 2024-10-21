"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const dealsProductRows = (0, _1.default)({ call: mockCall, list: mockList });
const ID = '77';
describe('DealsProductRows', () => {
    beforeEach(() => {
        mockCall.mockClear();
        mockList.mockClear();
    });
    it('should expose API methods', () => {
        expect(dealsProductRows).toMatchSnapshot();
    });
    describe('`get`', () => {
        it('should invoke `call`', async () => {
            await dealsProductRows.get(ID);
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`set`', () => {
        it('should invoke `call`', async () => {
            await dealsProductRows.update(ID, {
                COMMENTS: 'Some comment'
            }, {
                REGISTER_SONET_EVENT: 'Y'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await dealsProductRows.update(ID, {
                COMMENTS: 'Some comment'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
});
