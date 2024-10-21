"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bitrix = void 0;
const client_1 = __importDefault(require("./client"));
const companies_1 = __importDefault(require("./services/companies"));
const contacts_1 = __importDefault(require("./services/contacts"));
const products_1 = __importDefault(require("./services/products"));
const deals_1 = __importDefault(require("./services/deals"));
const deals_productrows_1 = __importDefault(require("./services/dealsProductRows"));
const leads_1 = __importDefault(require("./services/leads"));
const statuses_1 = __importDefault(require("./services/statuses"));
const users_1 = __importDefault(require("./services/users"));
/**
 * Construct a Bitrix client with generic methods
 * @param restURI REST endpoint, like a `https://hello.bitrix24.ua/rest` or an inbound webhook endpoint,
 *                like a `https://hello.bitrix24.ua/rest/1/WEBHOOK_TOKEN`.
 * @param accessToken Bitrix application Access Token. Do not specify in case inbound webhook endpoint used.
 * @param clientOptions an object that will overwrite underlying configuration for HTTP client,
 *                see `https://github.com/sindresorhus/got/blob/main/documentation/2-options.md`.
 */
const Bitrix = (restURI, accessToken, clientOptions) => {
    const { call, batch, list } = (0, client_1.default)(restURI, accessToken, clientOptions);
    return {
        call,
        batch,
        list,
        companies: (0, companies_1.default)({ call, list }),
        contacts: (0, contacts_1.default)({ call, list }),
        products: (0, products_1.default)({ call, list }),
        deals: (0, deals_1.default)({ call, list }),
        dealsProductRows: (0, deals_productrows_1.default)({ call, list }),
        leads: (0, leads_1.default)({ call, list }),
        statuses: (0, statuses_1.default)({ call }),
        users: (0, users_1.default)({ call })
    };
};
exports.Bitrix = Bitrix;
exports.default = exports.Bitrix;
__exportStar(require("./methods"), exports);
__exportStar(require("./commands"), exports);
__exportStar(require("./services/common"), exports);
__exportStar(require("./services/companies/entities"), exports);
__exportStar(require("./services/contacts/entities"), exports);
__exportStar(require("./services/currencies/entities"), exports);
__exportStar(require("./services/products/entities"), exports);
__exportStar(require("./services/deals/entities"), exports);
__exportStar(require("./services/dealsProductRows/entities"), exports);
__exportStar(require("./services/leads/entities"), exports);
__exportStar(require("./services/statuses/entities"), exports);
__exportStar(require("./services/users/entities"), exports);
