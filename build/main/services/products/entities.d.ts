import { BoolString, ISODate, NumberString } from '../common';
export declare type Product = {
    readonly [key: string]: string | null;
    readonly NAME: string;
    readonly CURRENCY_ID: string;
    readonly PRICE: NumberString | null;
    readonly SORT: NumberString | null;
};
