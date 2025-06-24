export interface FetchParam {
    method: string,
    url: string
    params?: Object,
    body?: Object,
}

export type FetchLoading<T extends string> = Record<T, boolean>;


type CustomQueryParams = {
    [key: string]: any;
};

type Expand = string | string[];

type FilterExpression =
    | [string, string, any]
    | [string, string, any][]
    | [string, [string, string, any]]
    | [string, [string, string, any]][]
    | [string, [string, [string, string, any]]]
    | [string, [string, [string, string, any]]][]
    | [string, [string, [string, [string, string, any]]]]
    | [string, [string, [string, [string, string, any]]]][]
    | ['!', [string, string, any]]
    | [FilterExpression, 'and', FilterExpression]
    | [FilterExpression, 'or', FilterExpression];

type GroupExpression =
    | string
    | { selector: string; desc?: boolean }
    | Array<string | { selector: string; desc?: boolean }>
    | ((item: any) => any);

type LangParams = {
    locale: string;
    collatorOptions: {
        sensitivity: 'base' | 'accent' | 'case' | 'variant';
        caseFirst?: 'upper' | 'lower' | 'false';
    };
};

type DataSourceOptions = {
    key: string,
    store?: any;
    customQueryParams?: CustomQueryParams;
    expand?: Expand;
    filter?: any[];
    group?: GroupExpression;
    langParams?: LangParams;
    map?: (dataItem: any) => any;
    onChanged?: (e?: { changes: Array<any> }) => void;
    onLoadError?: (error: { message: string }) => void;
    onLoadingChanged?: (isLoading: boolean) => void;
    pageSize?: number;
    paginate?: boolean;
    postProcess?: (data: Array<any>) => Array<any>;
    pushAggregationTimeout?: number;
    requireTotalCount?: boolean;
    reshapeOnPush?: boolean;
    searchExpr?: string | ((data: any) => any) | Array<string | ((data: any) => any)>;
    searchOperation?: string;
    searchValue?: any;
    select?: string | Array<string> | ((data: any) => any);
    sort?: string | { selector: string; desc?: boolean, asc?: boolean } | Array<string | { selector: string; desc?: boolean, asc?: boolean }> | ((data: any) => any);
};

export interface FetchOData {
    type?: 'datasource' | 'data'
    url: string,
    selfProxy?: string,
    options: DataSourceOptions

}

