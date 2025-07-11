//@unocss-include
import type { DataGrid } from '@/types';

const example: DataGrid = {
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
}

const config = {
    example,
    order,
    region
}

export default config