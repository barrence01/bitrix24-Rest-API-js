"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const users = (0, _1.default)({ call: mockCall });
const ID = '77';
describe('Users', () => {
    beforeEach(() => {
        mockCall.mockClear();
        mockList.mockClear();
    });
    it('should expose API methods', () => {
        expect(users).toMatchSnapshot();
    });
    describe('`get`', () => {
        it('should invoke `call`', async () => {
            await users.get(ID);
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
});
