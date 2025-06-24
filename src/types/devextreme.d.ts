export type FilterExpression = "=" | "<>" | ">" | ">=" | "<" | "<=" | "startswith" | "endswith" | "contains" | "notcontains"

export interface HeaderFilter<T> {
    value: [keyof T, FilterExpression, string],
    text: string

}


export interface Format {
    type?: 'currency',
    currency?: 'IDR'
    precision?: number,
}

export interface CustomSummary {
    column: string,
    summaryType: "sum" | "min" | "max" | "avg" | "count",
    name?: string,
    alignment?: 'right' | 'center' | 'left',
    cssClass?: string,
    displayFormat?: string,
    showInColumn?: string,
    valueFormat?: Format | string,
}


export interface DataGrid<T = {}> {
    keyExpr?: keyof T extends never ? string | string[] : keyof T | (keyof T)[],
    allowColumnReordering?: boolean,
    rowAlternationEnabled?: boolean,
    showBorders?: boolean,
    columnAutoWidth?: boolean,
    height?: number | string,
    allowColumnResizing?: boolean,
    hoverStateEnabled?: boolean,
    wordWrapEnabled?: boolean,
    class?: string, 
    noDataText?: string,
    id?: string,
    columnResizingMode?: 'widget' | 'nextColumn' ,
    remoteOperations?: boolean | {
        groupPaging?: boolean,
        paging?: boolean,
        filtering?: boolean,
        sorting?: boolean,
        grouping?: boolean,
        summary?: boolean
    }
}