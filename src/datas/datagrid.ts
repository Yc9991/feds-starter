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
    // class: "!h-[75vh]",
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
    class: "!overflow-auto",
    
}

const config = {
    example,
    order
}

export default config