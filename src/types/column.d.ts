import { ColHTMLAttributes } from "vue"
import type { DxColumn } from "devextreme-vue/data-grid";

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

export interface Col<T = any, I = keyof T> {
    dataField: I extends readonly any[]
    ? I[number] | keyof T
    : keyof T extends never
    ? string
    : keyof T;



    caption?: string;
    dataType?: 'string' | 'number' | 'date' | 'boolean' | 'datetime' | 'object';
    format?: string | { type: string; precision?: number };
    alignment?: 'left' | 'center' | 'right';
    cssClass?: string;

    // Visibility & Layout
    visible?: boolean;
    visibleIndex?: number;
    width?: number | string;
    minWidth?: number;
    maxWidth?: number;
    hidingPriority?: number;

    // Sorting & Grouping
    sortOrder?: 'asc' | 'desc';
    sortIndex?: number;
    allowSorting?: boolean;
    allowGrouping?: boolean;
    groupIndex?: number;
    showWhenGrouped?: boolean;
    sortingMethod?: (a: any, b: any) => number;

    // Filtering
    allowFiltering?: boolean;
    allowHeaderFiltering?: boolean;
    allowSearch?: boolean;
    selectedFilterOperation?: string;
    filterOperations?: string[];
    filterType?: 'include' | 'exclude';
    filterValue?: any;
    filterValues?: any[];

    // Editing
    allowEditing?: boolean;
    showEditorAlways?: boolean;
    editorOptions?: any;
    validationRules?: any[];

    // Templates
    cellTemplate?: string | ((cellElement: any, cellInfo: any) => any);
    editCellTemplate?: string | ((cellElement: any, cellInfo: any) => any);
    headerCellTemplate?: string | ((columnHeader: any, headerInfo: any) => any);
    groupCellTemplate?: string | ((groupCell: any, groupInfo: any) => any);

    // Fixed Columns
    fixed?: boolean;
    fixedPosition?: 'left' | 'right';

    // Command Columns
    type?: 'adaptive' | 'buttons' | 'detailExpand' | 'groupExpand' | 'selection' | 'drag';
    buttons?: Array<
        DataGridPredefinedColumnButton |
        {
            name?: string;
            hint?: string;
            onClick?: (e: ColumnButtonClickEvent<any, any>) => void;
        }
    >;

    // Lookups
    lookup?: {
        dataSource: any;
        valueExpr: string;
        displayExpr: string;
    };

    // Custom Logic
    calculateCellValue?: (rowData: T) => any;
    calculateDisplayValue?: (rowData: T) => any;
    calculateFilterExpression?: (filterValue: any, selectedFilterOperation: string, target: string) => any;
    calculateGroupValue?: (rowData: T) => any;
    calculateSortValue?: (rowData: T) => any;
    customizeText?: (cellInfo: { value: any; valueText: string }) => string;
    setCellValue?: (newData: T, value: any, currentRowData: T) => void;

    // Export & Column Chooser
    allowExporting?: boolean;
    allowReordering?: boolean;
    allowResizing?: boolean;
    allowHiding?: boolean;
    showInColumnChooser?: boolean;

    // Misc
    name?: string;
    encodeHtml?: boolean;
    ownerBand?: string;
    isBand?: boolean;
    renderAsync?: boolean;
}

export interface DynamicDataGridModel {
    DynamicDataGrid: {
        Message: string,
        DynamicData: any[],
        Configs: Col['config'][]
    }
}

export interface LoopTemplate<T = {}> extends Col {
    items: keyof T extends never ? string[] : (keyof T)[]
}


export interface GroupTemplate {
    name: string,
    code: string
}