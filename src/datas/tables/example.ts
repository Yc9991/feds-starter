import type { Col, ExampleTypes } from '@/types';


export const ExampleCol: Col<ExampleTypes>[] = [
    {
        dataField: 'CustomerID',
        caption:  'ID',
    },
    {
        dataField: 'ContactName',
        caption: 'Name',
    },
    {
        dataField: 'Country',
        caption: 'Country',
    },
    {
        dataField: 'Address',
        caption: 'Street',
    },
    {
        dataField: 'City',
        caption: 'City',
    },
    {
        dataField: 'Country',
        caption: 'Country',
    },
    {
        dataField: 'PostalCode',
        caption: 'Postal Code',
    }

]


export const staticDataExample = ExampleCol