import Products from '.';
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const products = Products({ call: mockCall, list: mockList });
const ID = '77';
describe('Products', () => {
    beforeEach(() => {
        mockCall.mockClear();
        mockList.mockClear();
    });
    it('should expose API methods', () => {
        expect(products).toMatchSnapshot();
    });
    describe('`create`', () => {
        it('should invoke `call`', async () => {
            await products.create({
                COMMENTS: 'Some comment'
            }, {
                REGISTER_SONET_EVENT: 'Y'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await products.create({
                COMMENTS: 'Some comment'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`get`', () => {
        it('should invoke `call`', async () => {
            await products.get(ID);
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
    describe('`list`', () => {
        it('should invoke `list`', async () => {
            await products.list({
                start: 0,
                order: { COMMENTS: 'ASC' },
                filter: { '>PROBABILITY': 50 },
                select: ['*', 'UF_*']
            });
            expect(mockList.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await products.list();
            expect(mockList.mock.calls).toMatchSnapshot();
        });
    });
    describe('`update`', () => {
        it('should invoke `call`', async () => {
            await products.update(ID, {
                COMMENTS: 'Some comment'
            }, {
                REGISTER_SONET_EVENT: 'Y'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
        it('should work without optional params', async () => {
            await products.update(ID, {
                COMMENTS: 'Some comment'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
});
