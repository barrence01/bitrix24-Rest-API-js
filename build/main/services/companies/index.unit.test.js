"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const companies = (0, _1.default)({ call: mockCall, list: mockList });
const ID = '77';
describe('Companies', () => {
    beforeEach(() => {
        mockCall.mockClear();
        mockList.mockClear();
    });
    it('should expose API methods', () => {
        expect(companies).toMatchSnapshot();
    });
    describe('`create`', () => {
        it('should invoke `call`', async () => {
            await companies.create({
                COMMENTS: 'Some comment'
            }, {
                REGISTER_SONET_EVENT: 'Y'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await companies.create({
                COMMENTS: 'Some comment'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`get`', () => {
        it('should invoke `call`', async () => {
            await companies.get(ID);
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`list`', () => {
        it('should invoke `list`', async () => {
            await companies.list({
                start: 0,
                order: { COMMENTS: 'ASC' },
                filter: { '>PROBABILITY': 50 },
                select: ['*', 'UF_*']
            });
            expect(mockList.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await companies.list();
            expect(mockList.mock.calls).toMatchSnapshot();
        });
    });
    describe('`update`', () => {
        it('should invoke `call`', async () => {
            await companies.update(ID, {
                COMMENTS: 'Some comment'
            }, {
                REGISTER_SONET_EVENT: 'Y'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await companies.update(ID, {
                COMMENTS: 'Some comment'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
});
