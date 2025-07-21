//@unocss-include
import type { DataGrid, ExampleTypes } from '@/types';

const example: DataGrid<ExampleTypes> = {
    keyExpr: 'CustomerID',
    remoteOperations: true,
    allowColumnResizing: true,
    allowColumnReordering: true,
    rowAlternationEnabled: true,
    showBorders: true,
    columnAutoWidth: true,
    wordWrapEnabled: true,
    noDataText: 'Belum ada data',
    columnResizingMode: 'widget',
    class: "!min-h-[calc(100vh-4rem)]",
    loadPanel: {
        enabled: false
    }
}

const order: DataGrid = {
    remoteOperations: false,
    allowColumnResizing: true,
    allowColumnReordering: true,
    wordWrapEnabled: true,
    noDataText: 'Belum ada data',
    columnResizingMode: 'widget',
}

const region: DataGrid = {
    remoteOperations: false,
    allowColumnResizing: true,
    allowColumnReordering: true,
    wordWrapEnabled: true,
    noDataText: 'Belum ada data',
    columnResizingMode: 'widget',
    focusedRowEnabled: true,
    autoNavigateToFocusedRow: true,
    width: '200px'
}

const config = {
    example,
    order,
    region
}

export default config