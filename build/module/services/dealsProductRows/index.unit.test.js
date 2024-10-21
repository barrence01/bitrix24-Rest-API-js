import Deals from '.';
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const dealsProductRows = Deals({ call: mockCall, list: mockList });
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
            await dealsProductRows.set(ID, {
                COMMENTS: 'Some comment'
            }, {
                REGISTER_SONET_EVENT: 'Y'
            });
            expect(mockCall.mock.calls).toMatchSnapshot();
        });
    });
});
