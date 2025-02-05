import Users from '.';
const mockCall = jest.fn(() => Promise.resolve());
const mockList = jest.fn(() => Promise.resolve());
const users = Users({ call: mockCall });
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
