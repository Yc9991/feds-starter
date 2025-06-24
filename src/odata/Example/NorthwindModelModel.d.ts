export interface Category {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    CategoryID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryName` |
     * | Type | `Edm.String` |
     */
    CategoryName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Description` |
     * | Type | `Edm.String` |
     */
    Description: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Picture` |
     * | Type | `Edm.Binary` |
     */
    Picture: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Products` |
     * | Type | `Collection(NorthwindModel.Product)` |
     */
    Products?: Array<Product>;
}
export type CategoryId = number | {
    CategoryID: number;
};
export interface EditableCategory extends Partial<Pick<Category, "CategoryName" | "Description" | "Picture">> {
}
export interface CustomerDemographic {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerTypeID` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CustomerTypeID: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerDesc` |
     * | Type | `Edm.String` |
     */
    CustomerDesc: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Customers` |
     * | Type | `Collection(NorthwindModel.Customer)` |
     */
    Customers?: Array<Customer>;
}
export type CustomerDemographicId = string | {
    CustomerTypeID: string;
};
export interface EditableCustomerDemographic extends Partial<Pick<CustomerDemographic, "CustomerDesc">> {
}
export interface Customer {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerID` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CustomerID: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     */
    CompanyName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactName` |
     * | Type | `Edm.String` |
     */
    ContactName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactTitle` |
     * | Type | `Edm.String` |
     */
    ContactTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address` |
     * | Type | `Edm.String` |
     */
    Address: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Region` |
     * | Type | `Edm.String` |
     */
    Region: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     */
    PostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     */
    Country: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Phone` |
     * | Type | `Edm.String` |
     */
    Phone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Fax` |
     * | Type | `Edm.String` |
     */
    Fax: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Orders` |
     * | Type | `Collection(NorthwindModel.Order)` |
     */
    Orders?: Array<Order>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerDemographics` |
     * | Type | `Collection(NorthwindModel.CustomerDemographic)` |
     */
    CustomerDemographics?: Array<CustomerDemographic>;
}
export type CustomerId = string | {
    CustomerID: string;
};
export interface EditableCustomer extends Partial<Pick<Customer, "CompanyName" | "ContactName" | "ContactTitle" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "Phone" | "Fax">> {
}
export interface Employee {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EmployeeID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    EmployeeID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `LastName` |
     * | Type | `Edm.String` |
     */
    LastName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FirstName` |
     * | Type | `Edm.String` |
     */
    FirstName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Title` |
     * | Type | `Edm.String` |
     */
    Title: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TitleOfCourtesy` |
     * | Type | `Edm.String` |
     */
    TitleOfCourtesy: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `BirthDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    BirthDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HireDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    HireDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address` |
     * | Type | `Edm.String` |
     */
    Address: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Region` |
     * | Type | `Edm.String` |
     */
    Region: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     */
    PostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     */
    Country: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HomePhone` |
     * | Type | `Edm.String` |
     */
    HomePhone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Extension` |
     * | Type | `Edm.String` |
     */
    Extension: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Photo` |
     * | Type | `Edm.Binary` |
     */
    Photo: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Notes` |
     * | Type | `Edm.String` |
     */
    Notes: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReportsTo` |
     * | Type | `Edm.Int32` |
     */
    ReportsTo: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PhotoPath` |
     * | Type | `Edm.String` |
     */
    PhotoPath: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Employees1` |
     * | Type | `Collection(NorthwindModel.Employee)` |
     */
    Employees1?: Array<Employee>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Employee1` |
     * | Type | `NorthwindModel.Employee` |
     */
    Employee1?: Employee | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Orders` |
     * | Type | `Collection(NorthwindModel.Order)` |
     */
    Orders?: Array<Order>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Territories` |
     * | Type | `Collection(NorthwindModel.Territory)` |
     */
    Territories?: Array<Territory>;
}
export type EmployeeId = number | {
    EmployeeID: number;
};
export interface EditableEmployee extends Partial<Pick<Employee, "LastName" | "FirstName" | "Title" | "TitleOfCourtesy" | "BirthDate" | "HireDate" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "HomePhone" | "Extension" | "Photo" | "Notes" | "ReportsTo" | "PhotoPath">> {
}
export interface Order_Detail {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    UnitPrice: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int16` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Discount` |
     * | Type | `Edm.Single` |
     * | Nullable | `false` |
     */
    Discount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order` |
     * | Type | `NorthwindModel.Order` |
     */
    Order?: Order | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Product` |
     * | Type | `NorthwindModel.Product` |
     */
    Product?: Product | null;
}
export type Order_DetailId = {
    OrderID: number;
    ProductID: number;
};
export interface EditableOrder_Detail extends Pick<Order_Detail, "OrderID" | "ProductID" | "UnitPrice" | "Quantity" | "Discount"> {
}
export interface Order {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerID` |
     * | Type | `Edm.String` |
     */
    CustomerID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EmployeeID` |
     * | Type | `Edm.Int32` |
     */
    EmployeeID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    OrderDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequiredDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    RequiredDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipVia` |
     * | Type | `Edm.Int32` |
     */
    ShipVia: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Freight` |
     * | Type | `Edm.Decimal` |
     */
    Freight: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipName` |
     * | Type | `Edm.String` |
     */
    ShipName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipAddress` |
     * | Type | `Edm.String` |
     */
    ShipAddress: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipCity` |
     * | Type | `Edm.String` |
     */
    ShipCity: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipRegion` |
     * | Type | `Edm.String` |
     */
    ShipRegion: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipPostalCode` |
     * | Type | `Edm.String` |
     */
    ShipPostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipCountry` |
     * | Type | `Edm.String` |
     */
    ShipCountry: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Customer` |
     * | Type | `NorthwindModel.Customer` |
     */
    Customer?: Customer | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Employee` |
     * | Type | `NorthwindModel.Employee` |
     */
    Employee?: Employee | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order_Details` |
     * | Type | `Collection(NorthwindModel.Order_Detail)` |
     */
    Order_Details?: Array<Order_Detail>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Shipper` |
     * | Type | `NorthwindModel.Shipper` |
     */
    Shipper?: Shipper | null;
}
export type OrderId = number | {
    OrderID: number;
};
export interface EditableOrder extends Partial<Pick<Order, "CustomerID" | "EmployeeID" | "OrderDate" | "RequiredDate" | "ShippedDate" | "ShipVia" | "Freight" | "ShipName" | "ShipAddress" | "ShipCity" | "ShipRegion" | "ShipPostalCode" | "ShipCountry">> {
}
export interface Product {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     */
    ProductName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierID` |
     * | Type | `Edm.Int32` |
     */
    SupplierID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryID` |
     * | Type | `Edm.Int32` |
     */
    CategoryID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantityPerUnit` |
     * | Type | `Edm.String` |
     */
    QuantityPerUnit: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     */
    UnitPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitsInStock` |
     * | Type | `Edm.Int16` |
     */
    UnitsInStock: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitsOnOrder` |
     * | Type | `Edm.Int16` |
     */
    UnitsOnOrder: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReorderLevel` |
     * | Type | `Edm.Int16` |
     */
    ReorderLevel: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Discontinued` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    Discontinued: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Category` |
     * | Type | `NorthwindModel.Category` |
     */
    Category?: Category | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Order_Details` |
     * | Type | `Collection(NorthwindModel.Order_Detail)` |
     */
    Order_Details?: Array<Order_Detail>;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Supplier` |
     * | Type | `NorthwindModel.Supplier` |
     */
    Supplier?: Supplier | null;
}
export type ProductId = number | {
    ProductID: number;
};
export interface EditableProduct extends Pick<Product, "Discontinued">, Partial<Pick<Product, "ProductName" | "SupplierID" | "CategoryID" | "QuantityPerUnit" | "UnitPrice" | "UnitsInStock" | "UnitsOnOrder" | "ReorderLevel">> {
}
export interface Region {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RegionID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    RegionID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RegionDescription` |
     * | Type | `Edm.String` |
     */
    RegionDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Territories` |
     * | Type | `Collection(NorthwindModel.Territory)` |
     */
    Territories?: Array<Territory>;
}
export type RegionId = number | {
    RegionID: number;
};
export interface EditableRegion extends Partial<Pick<Region, "RegionDescription">> {
}
export interface Shipper {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipperID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ShipperID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     */
    CompanyName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Phone` |
     * | Type | `Edm.String` |
     */
    Phone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Orders` |
     * | Type | `Collection(NorthwindModel.Order)` |
     */
    Orders?: Array<Order>;
}
export type ShipperId = number | {
    ShipperID: number;
};
export interface EditableShipper extends Partial<Pick<Shipper, "CompanyName" | "Phone">> {
}
export interface Supplier {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    SupplierID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     */
    CompanyName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactName` |
     * | Type | `Edm.String` |
     */
    ContactName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactTitle` |
     * | Type | `Edm.String` |
     */
    ContactTitle: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address` |
     * | Type | `Edm.String` |
     */
    Address: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Region` |
     * | Type | `Edm.String` |
     */
    Region: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     */
    PostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     */
    Country: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Phone` |
     * | Type | `Edm.String` |
     */
    Phone: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Fax` |
     * | Type | `Edm.String` |
     */
    Fax: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `HomePage` |
     * | Type | `Edm.String` |
     */
    HomePage: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Products` |
     * | Type | `Collection(NorthwindModel.Product)` |
     */
    Products?: Array<Product>;
}
export type SupplierId = number | {
    SupplierID: number;
};
export interface EditableSupplier extends Partial<Pick<Supplier, "CompanyName" | "ContactName" | "ContactTitle" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "Phone" | "Fax" | "HomePage">> {
}
export interface Territory {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TerritoryID` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    TerritoryID: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `TerritoryDescription` |
     * | Type | `Edm.String` |
     */
    TerritoryDescription: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RegionID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    RegionID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Region` |
     * | Type | `NorthwindModel.Region` |
     */
    Region?: Region | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Employees` |
     * | Type | `Collection(NorthwindModel.Employee)` |
     */
    Employees?: Array<Employee>;
}
export type TerritoryId = string | {
    TerritoryID: string;
};
export interface EditableTerritory extends Pick<Territory, "RegionID">, Partial<Pick<Territory, "TerritoryDescription">> {
}
export interface Alphabetical_list_of_product {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierID` |
     * | Type | `Edm.Int32` |
     */
    SupplierID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryID` |
     * | Type | `Edm.Int32` |
     */
    CategoryID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantityPerUnit` |
     * | Type | `Edm.String` |
     */
    QuantityPerUnit: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     */
    UnitPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitsInStock` |
     * | Type | `Edm.Int16` |
     */
    UnitsInStock: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitsOnOrder` |
     * | Type | `Edm.Int16` |
     */
    UnitsOnOrder: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ReorderLevel` |
     * | Type | `Edm.Int16` |
     */
    ReorderLevel: number | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Discontinued` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    Discontinued: boolean;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CategoryName: string;
}
export type Alphabetical_list_of_productId = {
    CategoryName: string;
    Discontinued: boolean;
    ProductID: number;
    ProductName: string;
};
export interface EditableAlphabetical_list_of_product extends Pick<Alphabetical_list_of_product, "ProductID" | "ProductName" | "Discontinued" | "CategoryName">, Partial<Pick<Alphabetical_list_of_product, "SupplierID" | "CategoryID" | "QuantityPerUnit" | "UnitPrice" | "UnitsInStock" | "UnitsOnOrder" | "ReorderLevel">> {
}
export interface Category_Sales_for_1997 {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CategoryName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategorySales` |
     * | Type | `Edm.Decimal` |
     */
    CategorySales: number | null;
}
export type Category_Sales_for_1997Id = string | {
    CategoryName: string;
};
export interface EditableCategory_Sales_for_1997 extends Partial<Pick<Category_Sales_for_1997, "CategorySales">> {
}
export interface Current_Product_List {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
}
export type Current_Product_ListId = {
    ProductID: number;
    ProductName: string;
};
export interface EditableCurrent_Product_List extends Pick<Current_Product_List, "ProductID" | "ProductName"> {
}
export interface Customer_and_Suppliers_by_City {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CompanyName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ContactName` |
     * | Type | `Edm.String` |
     */
    ContactName: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Relationship` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Relationship: string;
}
export type Customer_and_Suppliers_by_CityId = {
    CompanyName: string;
    Relationship: string;
};
export interface EditableCustomer_and_Suppliers_by_City extends Pick<Customer_and_Suppliers_by_City, "CompanyName" | "Relationship">, Partial<Pick<Customer_and_Suppliers_by_City, "City" | "ContactName">> {
}
export interface Invoice {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipName` |
     * | Type | `Edm.String` |
     */
    ShipName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipAddress` |
     * | Type | `Edm.String` |
     */
    ShipAddress: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipCity` |
     * | Type | `Edm.String` |
     */
    ShipCity: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipRegion` |
     * | Type | `Edm.String` |
     */
    ShipRegion: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipPostalCode` |
     * | Type | `Edm.String` |
     */
    ShipPostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipCountry` |
     * | Type | `Edm.String` |
     */
    ShipCountry: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerID` |
     * | Type | `Edm.String` |
     */
    CustomerID: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CustomerName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address` |
     * | Type | `Edm.String` |
     */
    Address: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Region` |
     * | Type | `Edm.String` |
     */
    Region: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     */
    PostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     */
    Country: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Salesperson` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Salesperson: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    OrderDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequiredDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    RequiredDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDate: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipperName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ShipperName: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    UnitPrice: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int16` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Discount` |
     * | Type | `Edm.Single` |
     * | Nullable | `false` |
     */
    Discount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ExtendedPrice` |
     * | Type | `Edm.Decimal` |
     */
    ExtendedPrice: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Freight` |
     * | Type | `Edm.Decimal` |
     */
    Freight: number | null;
}
export type InvoiceId = {
    CustomerName: string;
    Discount: number;
    OrderID: number;
    ProductID: number;
    ProductName: string;
    Quantity: number;
    Salesperson: string;
    ShipperName: string;
    UnitPrice: number;
};
export interface EditableInvoice extends Pick<Invoice, "CustomerName" | "Salesperson" | "OrderID" | "ShipperName" | "ProductID" | "ProductName" | "UnitPrice" | "Quantity" | "Discount">, Partial<Pick<Invoice, "ShipName" | "ShipAddress" | "ShipCity" | "ShipRegion" | "ShipPostalCode" | "ShipCountry" | "CustomerID" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "OrderDate" | "RequiredDate" | "ShippedDate" | "ExtendedPrice" | "Freight">> {
}
export interface Order_Details_Extended {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    ProductID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     * | Nullable | `false` |
     */
    UnitPrice: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Quantity` |
     * | Type | `Edm.Int16` |
     * | Nullable | `false` |
     */
    Quantity: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Discount` |
     * | Type | `Edm.Single` |
     * | Nullable | `false` |
     */
    Discount: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ExtendedPrice` |
     * | Type | `Edm.Decimal` |
     */
    ExtendedPrice: number | null;
}
export type Order_Details_ExtendedId = {
    Discount: number;
    OrderID: number;
    ProductID: number;
    ProductName: string;
    Quantity: number;
    UnitPrice: number;
};
export interface EditableOrder_Details_Extended extends Pick<Order_Details_Extended, "OrderID" | "ProductID" | "ProductName" | "UnitPrice" | "Quantity" | "Discount">, Partial<Pick<Order_Details_Extended, "ExtendedPrice">> {
}
export interface Order_Subtotal {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Subtotal` |
     * | Type | `Edm.Decimal` |
     */
    Subtotal: number | null;
}
export type Order_SubtotalId = number | {
    OrderID: number;
};
export interface EditableOrder_Subtotal extends Partial<Pick<Order_Subtotal, "Subtotal">> {
}
export interface Orders_Qry {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerID` |
     * | Type | `Edm.String` |
     */
    CustomerID: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `EmployeeID` |
     * | Type | `Edm.Int32` |
     */
    EmployeeID: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    OrderDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `RequiredDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    RequiredDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDate: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipVia` |
     * | Type | `Edm.Int32` |
     */
    ShipVia: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Freight` |
     * | Type | `Edm.Decimal` |
     */
    Freight: number | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipName` |
     * | Type | `Edm.String` |
     */
    ShipName: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipAddress` |
     * | Type | `Edm.String` |
     */
    ShipAddress: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipCity` |
     * | Type | `Edm.String` |
     */
    ShipCity: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipRegion` |
     * | Type | `Edm.String` |
     */
    ShipRegion: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipPostalCode` |
     * | Type | `Edm.String` |
     */
    ShipPostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShipCountry` |
     * | Type | `Edm.String` |
     */
    ShipCountry: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CompanyName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Address` |
     * | Type | `Edm.String` |
     */
    Address: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City` |
     * | Type | `Edm.String` |
     */
    City: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Region` |
     * | Type | `Edm.String` |
     */
    Region: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     */
    PostalCode: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     */
    Country: string | null;
}
export type Orders_QryId = {
    CompanyName: string;
    OrderID: number;
};
export interface EditableOrders_Qry extends Pick<Orders_Qry, "OrderID" | "CompanyName">, Partial<Pick<Orders_Qry, "CustomerID" | "EmployeeID" | "OrderDate" | "RequiredDate" | "ShippedDate" | "ShipVia" | "Freight" | "ShipName" | "ShipAddress" | "ShipCity" | "ShipRegion" | "ShipPostalCode" | "ShipCountry" | "Address" | "City" | "Region" | "PostalCode" | "Country">> {
}
export interface Product_Sales_for_1997 {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CategoryName: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductSales` |
     * | Type | `Edm.Decimal` |
     */
    ProductSales: number | null;
}
export type Product_Sales_for_1997Id = {
    CategoryName: string;
    ProductName: string;
};
export interface EditableProduct_Sales_for_1997 extends Pick<Product_Sales_for_1997, "CategoryName" | "ProductName">, Partial<Pick<Product_Sales_for_1997, "ProductSales">> {
}
export interface Products_Above_Average_Price {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitPrice` |
     * | Type | `Edm.Decimal` |
     */
    UnitPrice: number | null;
}
export type Products_Above_Average_PriceId = string | {
    ProductName: string;
};
export interface EditableProducts_Above_Average_Price extends Partial<Pick<Products_Above_Average_Price, "UnitPrice">> {
}
export interface Products_by_Category {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CategoryName: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `QuantityPerUnit` |
     * | Type | `Edm.String` |
     */
    QuantityPerUnit: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `UnitsInStock` |
     * | Type | `Edm.Int16` |
     */
    UnitsInStock: number | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Discontinued` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    Discontinued: boolean;
}
export type Products_by_CategoryId = {
    CategoryName: string;
    Discontinued: boolean;
    ProductName: string;
};
export interface EditableProducts_by_Category extends Pick<Products_by_Category, "CategoryName" | "ProductName" | "Discontinued">, Partial<Pick<Products_by_Category, "QuantityPerUnit" | "UnitsInStock">> {
}
export interface Sales_by_Category {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    CategoryID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CategoryName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CategoryName: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ProductName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ProductSales` |
     * | Type | `Edm.Decimal` |
     */
    ProductSales: number | null;
}
export type Sales_by_CategoryId = {
    CategoryID: number;
    CategoryName: string;
    ProductName: string;
};
export interface EditableSales_by_Category extends Pick<Sales_by_Category, "CategoryID" | "CategoryName" | "ProductName">, Partial<Pick<Sales_by_Category, "ProductSales">> {
}
export interface Sales_Totals_by_Amount {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SaleAmount` |
     * | Type | `Edm.Decimal` |
     */
    SaleAmount: number | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CompanyName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDate: string | null;
}
export type Sales_Totals_by_AmountId = {
    CompanyName: string;
    OrderID: number;
};
export interface EditableSales_Totals_by_Amount extends Pick<Sales_Totals_by_Amount, "OrderID" | "CompanyName">, Partial<Pick<Sales_Totals_by_Amount, "SaleAmount" | "ShippedDate">> {
}
export interface Summary_of_Sales_by_Quarter {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDate: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Subtotal` |
     * | Type | `Edm.Decimal` |
     */
    Subtotal: number | null;
}
export type Summary_of_Sales_by_QuarterId = number | {
    OrderID: number;
};
export interface EditableSummary_of_Sales_by_Quarter extends Partial<Pick<Summary_of_Sales_by_Quarter, "ShippedDate" | "Subtotal">> {
}
export interface Summary_of_Sales_by_Year {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ShippedDate` |
     * | Type | `Edm.DateTimeOffset` |
     */
    ShippedDate: string | null;
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `OrderID` |
     * | Type | `Edm.Int32` |
     * | Nullable | `false` |
     */
    OrderID: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Subtotal` |
     * | Type | `Edm.Decimal` |
     */
    Subtotal: number | null;
}
export type Summary_of_Sales_by_YearId = number | {
    OrderID: number;
};
export interface EditableSummary_of_Sales_by_Year extends Partial<Pick<Summary_of_Sales_by_Year, "ShippedDate" | "Subtotal">> {
}
