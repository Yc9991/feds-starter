import type {
    QCustomer,
    QOrder
} from '@/types'


import { QStringPath, QNumberPath, QBooleanPath, QDateTimeOffsetPath, QEntityCollectionPath, QEntityPath } from '@odata2ts/odata-query-objects';

// 1. Strip readonly from inferred class instance
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

// 2. UnwrapPath to extract raw types from QPath instances
type UnwrapPath<T> =
    T extends QStringPath<infer U> ? U :
    T extends QNumberPath<infer U> ? U :
    T extends QBooleanPath<infer U> ? U :
    T extends QDateTimeOffsetPath<infer U> ? U :
    T extends QEntityCollectionPath<infer Q> ? DTO_FromQ<Q>[] :
    T extends QEntityPath<infer Q> ? DTO_FromQ<Q> :
    never;

// 3. Extract DTO from Q-type class
type DTO_FromQ<Q> =
    Q extends new (...args: any) => infer I
        ? { [K in keyof Mutable<I>]: UnwrapPath<Mutable<I>[K]> }
        : never;

// 4. Allow override for navigation collections
export type OdataMapTypes<
    Q,
    Override extends [any, keyof any]
> =
    Omit<DTO_FromQ<Q>, Override[1]> & {
        [K in Override[1]]: DTO_FromQ<Override[0]>[];
    };


export type ExampleTypes = OdataMapTypes<typeof QCustomer, [typeof QOrder, 'Orders']>

export type OrderTypes = OdataMapTypes<typeof QOrder, []>