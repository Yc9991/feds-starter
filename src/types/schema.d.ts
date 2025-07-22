import type { ObjectSchema, Schema } from "yup";

export interface ValidateSchema<T = any> {
    schema: any;
    field?: keyof T;
    input: T;
    error: any;
}

export type ValidateErrorItem = {
    valid: boolean;
    message: string;
};

export type ValidateError<T extends string = string> = Record<T, ValidateErrorItem>;

type WithUndefined<T> = {
    [P in keyof T]: T[P] | undefined;
};

export interface SchemaType<T> extends WithUndefined<T> { }

export interface Schema<T> extends ObjectSchema<SchemaType<T>> { }

export type SchemaObject<T> = {
    [key in keyof T]: Schema<any>;
};


export type ValidateErrorSingle<T> = {
    [K in keyof T]: T[K] extends object ? ValidateError<T[K]> : ValidateErrorItem;
};
export type ValidateErrorComplex<T> = {
    [K in keyof T]: T[K] extends object[]
    ? ValidateErrorItem[] // or more complex handling
    : T[K] extends object
    ? ValidateErrorComplex<T[K]>
    : ValidateErrorItem;
};


