import Client from './client';
import CompaniesService from './services/companies';
import ContactsService from './services/contacts';
import ProductsService from './services/products';
import DealsService from './services/deals';
import DealsProductRowsService from './services/dealsProductRows';
import LeadsService from './services/leads';
import StatusesService from './services/statuses';
import UsersService from './services/users';
/**
 * Construct a Bitrix client with generic methods
 * @param restURI REST endpoint, like a `https://hello.bitrix24.ua/rest` or an inbound webhook endpoint,
 *                like a `https://hello.bitrix24.ua/rest/1/WEBHOOK_TOKEN`.
 * @param accessToken Bitrix application Access Token. Do not specify in case inbound webhook endpoint used.
 * @param clientOptions an object that will overwrite underlying configuration for HTTP client,
 *                see `https://github.com/sindresorhus/got/blob/main/documentation/2-options.md`.
 */
export const Bitrix = (restURI, accessToken, clientOptions) => {
    const { call, batch, list } = Client(restURI, accessToken, clientOptions);
    return {
        call,
        batch,
        list,
        companies: CompaniesService({ call, list }),
        contacts: ContactsService({ call, list }),
        products: ProductsService({ call, list }),
        deals: DealsService({ call, list }),
        dealsProductRows: DealsProductRowsService({ call, list }),
        leads: LeadsService({ call, list }),
        statuses: StatusesService({ call }),
        users: UsersService({ call })
    };
};
export default Bitrix;
export * from './methods';
export * from './commands';
export * from './services/common';
export * from './services/companies/entities';
export * from './services/contacts/entities';
export * from './services/currencies/entities';
export * from './services/products/entities';
export * from './services/deals/entities';
export * from './services/dealsProductRows/entities';
export * from './services/leads/entities';
export * from './services/statuses/entities';
export * from './services/users/entities';
