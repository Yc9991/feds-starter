import { QStringPath, QNumberPath, QBooleanPath, QDateTimeOffsetPath, QEntityCollectionPath, QEntityPath } from '@odata2ts/odata-query-objects';
import type {
    QCustomer
} from '@/types'



type DTO_FromQ<Q> =
    Q extends new (...args: any) => infer I // if Q is a class constructor
    ? { [K in keyof I]: UnwrapPath<I[K]> }
    : never;

type UnwrapPath<T> =
    T extends QStringPath<infer U> ? U :
    T extends QNumberPath<infer U> ? U :
    T extends QBooleanPath<infer U> ? U :
    T extends QDateTimeOffsetPath<infer U> ? U :
    T extends QEntityCollectionPath<infer Q> ? DTO_FromQ<Q>[] : // recursive
    T extends QEntityPath<infer Q> ? DTO_FromQ<Q> : // optional: handle 1-to-1 navigation
    never;


export type OdataMapTypes<
    Q,
    Override extends [any, keyof any]
> =
    Omit<DTO_FromQ<Q>, Override[1]> & {
        [K in Override[1]]: DTO_FromQ<Override[0]>[];
    };


export type ExampleTypes = OdataMapTypes<typeof QCustomer, []>