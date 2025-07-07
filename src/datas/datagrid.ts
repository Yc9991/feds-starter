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
    class: "!h-[75vh]",
    noDataText: 'Belum ada data',
    columnResizingMode: 'widget'
}

const order: DataGrid = {
    remoteOperations: false,
    allowColumnResizing: true,
    allowColumnReordering: true,
    wordWrapEnabled: true,
    noDataText: 'Belum ada data',
    columnResizingMode: 'widget',
    class: "!overflow-auto",
    
}

const config = {
    example,
    order
}

export default config