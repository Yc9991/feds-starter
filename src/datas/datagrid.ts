//@unocss-include
import type { DataGrid } from '@/types';

const example: DataGrid = {
    remoteOperations: true,
    allowColumnResizing: true,
    allowColumnReordering: true,
    rowAlternationEnabled: true,
    showBorders: false,
    columnAutoWidth: true,
    wordWrapEnabled: true,
    class: "!h-[75vh]",
    noDataText: 'Belum ada data',
    columnResizingMode: 'widget'
}

const config = {
    example
}

export default config