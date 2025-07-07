import type { Col, ExampleTypes, OrderTypes } from '@/types';



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
    },
    {
        dataField: 'Address',
        caption: 'Street',
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
        dataField: 'Orders',
        caption: 'Orders',
        dataType: 'object',
    }
]


export const staticDataExample = ExampleCol

export const staticDataOrder = OrderCol
