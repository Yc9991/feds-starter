import type { Col, ExampleTypes, OrderTypes, RegionTypes } from '@/types';



export const OrderCol: Col<OrderTypes>[] = [
    {
        dataField: 'OrderID',
        caption:  'Order ID',
        dataType: 'string',
        alignment: 'left'
    },
    {
        dataField: 'OrderDate',
        caption:  'Order Date',
        dataType: 'date',
    },
    {
        dataField: 'ShipName',
        caption:  'Ship Name',
        dataType: 'string',
    },
]

export const ExampleCol: Col<ExampleTypes>[] = [
    {
        dataField: 'CustomerID',
        caption:  'ID',
        dataType: 'string',
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        allowResizing: false,
    },
    {
        dataField: 'ContactName',
        caption: 'Name',
        dataType: 'string',
        
    },
    {
        dataField: 'Country',
        caption: 'Country',
        dataType: 'string',
        cellTemplate: 'CountryTemplate',
    },
    {
        dataField: 'Region',
        caption: 'Region',
        dataType: 'string',
        cellTemplate: 'RegionTemplate',
        width: 200
    },
    {
        dataField: 'Address',
        caption: 'Address',
        dataType: 'string',
    },
    {
        dataField: 'City',
        caption: 'City',
        dataType: 'string',

    },
    {
        dataField: 'PostalCode',
        caption: 'Postal Code',
        dataType: 'string',
    },
    {
        dataField: 'ContactName',
        caption: 'Contact Name',
        dataType: 'string',
    },
    {
        dataField: 'ContactTitle',
        caption: 'Contact Title',
        dataType: 'string',
    },
    {
        dataField: 'Phone',
        caption: 'Phone',
        dataType: 'string',
    },
    {
        dataField: 'Fax',
        caption: 'Fax',
        dataType: 'string',
    },
]


export const RegionCol: Col<RegionTypes>[] = [
    {
        dataField: 'RegionID',
        caption:  'ID',
        dataType: 'number',
        alignment: 'left',
        allowSearch: false,
        allowFiltering: false,
    },
    {
        dataField: 'RegionDescription',
        caption:  'Name',
        dataType: 'string',
    },
   
]


export const staticDataExample = ExampleCol

export const staticDataOrder = OrderCol

export const staticDataRegion = RegionCol

