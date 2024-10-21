import Bitrix from './../../bitrix';
const WEBHOOK_URL = process.env['WEBHOOK_URL'];
if (!WEBHOOK_URL) {
    throw Error('Integration tests require environmental variable `WEBHOOK_URL` to be set');
}
const { products } = (0, bitrix_1.default)(WEBHOOK_URL);
describe('Products', () => {
    describe('fields', () => {
        it('should get all fields', async () => {
            const { result } = await products.fields();
            expect(result).toMatchSnapshot();
        });
    });
});
