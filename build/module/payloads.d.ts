export declare type PayloadTime = {
    readonly start: number;
    readonly finish: number;
    readonly duration: number;
    readonly processing: number;
    readonly date_start: string;
    readonly date_finish: string;
};
export declare type GetPayload<P> = {
    readonly result: P;
    readonly time: PayloadTime;
};
export declare type ListPayload<P> = {
    readonly result: readonly P[];
    readonly error?: string;
    readonly total: number;
    readonly next?: number;
    readonly time: PayloadTime;
};
export declare type BatchPayload<C> = {
    readonly result: {
        readonly result: {
            readonly [P in keyof C]?: C[P];
        } | ReadonlyArray<C[keyof C]>;
        readonly result_error: {
            readonly [P in keyof C]?: string;
        } | readonly string[];
        readonly result_total: {
            readonly [P in keyof C]?: number;
        } | readonly number[];
        readonly result_next: {
            readonly [P in keyof C]?: number;
        } | readonly number[];
        readonly result_time: {
            readonly [P in keyof C]?: PayloadTime;
        } | readonly PayloadTime[];
    };
    readonly time: PayloadTime;
};
export declare type Payload<P> = GetPayload<P> | ListPayload<P> | BatchPayload<P>;
