import { QNumberPath, QStringPath, QBinaryPath, QEntityCollectionPath, QueryObject, QId, QNumberParam, QStringParam, QDateTimeOffsetPath, QEntityPath, QBooleanPath, QBooleanParam } from "@odata2ts/odata-query-objects";
import type { CategoryId, CustomerDemographicId, CustomerId, EmployeeId, Order_DetailId, OrderId, ProductId, RegionId, ShipperId, SupplierId, TerritoryId, Alphabetical_list_of_productId, Category_Sales_for_1997Id, Current_Product_ListId, Customer_and_Suppliers_by_CityId, InvoiceId, Order_Details_ExtendedId, Order_SubtotalId, Orders_QryId, Product_Sales_for_1997Id, Products_Above_Average_PriceId, Products_by_CategoryId, Sales_by_CategoryId, Sales_Totals_by_AmountId, Summary_of_Sales_by_QuarterId, Summary_of_Sales_by_YearId } from "./NorthwindModelModel";
export declare class QCategory extends QueryObject {
    readonly CategoryID: QNumberPath<number>;
    readonly CategoryName: QStringPath<string>;
    readonly Description: QStringPath<string>;
    readonly Picture: QBinaryPath;
    readonly Products: QEntityCollectionPath<QProduct>;
}
export declare const qCategory: QCategory;
export declare class QCategoryId extends QId<CategoryId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QCustomerDemographic extends QueryObject {
    readonly CustomerTypeID: QStringPath<string>;
    readonly CustomerDesc: QStringPath<string>;
    readonly Customers: QEntityCollectionPath<QCustomer>;
}
export declare const qCustomerDemographic: QCustomerDemographic;
export declare class QCustomerDemographicId extends QId<CustomerDemographicId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QCustomer extends QueryObject {
    readonly CustomerID: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly ContactName: QStringPath<string>;
    readonly ContactTitle: QStringPath<string>;
    readonly Address: QStringPath<string>;
    readonly City: QStringPath<string>;
    readonly Region: QStringPath<string>;
    readonly PostalCode: QStringPath<string>;
    readonly Country: QStringPath<string>;
    readonly Phone: QStringPath<string>;
    readonly Fax: QStringPath<string>;
    readonly Orders: QEntityCollectionPath<QOrder>;
    readonly CustomerDemographics: QEntityCollectionPath<QCustomerDemographic>;
}
export declare const qCustomer: QCustomer;
export declare class QCustomerId extends QId<CustomerId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QEmployee extends QueryObject {
    readonly EmployeeID: QNumberPath<number>;
    readonly LastName: QStringPath<string>;
    readonly FirstName: QStringPath<string>;
    readonly Title: QStringPath<string>;
    readonly TitleOfCourtesy: QStringPath<string>;
    readonly BirthDate: QDateTimeOffsetPath<string>;
    readonly HireDate: QDateTimeOffsetPath<string>;
    readonly Address: QStringPath<string>;
    readonly City: QStringPath<string>;
    readonly Region: QStringPath<string>;
    readonly PostalCode: QStringPath<string>;
    readonly Country: QStringPath<string>;
    readonly HomePhone: QStringPath<string>;
    readonly Extension: QStringPath<string>;
    readonly Photo: QBinaryPath;
    readonly Notes: QStringPath<string>;
    readonly ReportsTo: QNumberPath<number>;
    readonly PhotoPath: QStringPath<string>;
    readonly Employees1: QEntityCollectionPath<QEmployee>;
    readonly Employee1: QEntityPath<QEmployee>;
    readonly Orders: QEntityCollectionPath<QOrder>;
    readonly Territories: QEntityCollectionPath<QTerritory>;
}
export declare const qEmployee: QEmployee;
export declare class QEmployeeId extends QId<EmployeeId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QOrder_Detail extends QueryObject {
    readonly OrderID: QNumberPath<number>;
    readonly ProductID: QNumberPath<number>;
    readonly UnitPrice: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
    readonly Discount: QNumberPath<number>;
    readonly Order: QEntityPath<QOrder>;
    readonly Product: QEntityPath<QProduct>;
}
export declare const qOrder_Detail: QOrder_Detail;
export declare class QOrder_DetailId extends QId<Order_DetailId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QOrder extends QueryObject {
    readonly OrderID: QNumberPath<number>;
    readonly CustomerID: QStringPath<string>;
    readonly EmployeeID: QNumberPath<number>;
    readonly OrderDate: QDateTimeOffsetPath<string>;
    readonly RequiredDate: QDateTimeOffsetPath<string>;
    readonly ShippedDate: QDateTimeOffsetPath<string>;
    readonly ShipVia: QNumberPath<number>;
    readonly Freight: QNumberPath<number>;
    readonly ShipName: QStringPath<string>;
    readonly ShipAddress: QStringPath<string>;
    readonly ShipCity: QStringPath<string>;
    readonly ShipRegion: QStringPath<string>;
    readonly ShipPostalCode: QStringPath<string>;
    readonly ShipCountry: QStringPath<string>;
    readonly Customer: QEntityPath<QCustomer>;
    readonly Employee: QEntityPath<QEmployee>;
    readonly Order_Details: QEntityCollectionPath<QOrder_Detail>;
    readonly Shipper: QEntityPath<QShipper>;
}
export declare const qOrder: QOrder;
export declare class QOrderId extends QId<OrderId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QProduct extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProductName: QStringPath<string>;
    readonly SupplierID: QNumberPath<number>;
    readonly CategoryID: QNumberPath<number>;
    readonly QuantityPerUnit: QStringPath<string>;
    readonly UnitPrice: QNumberPath<number>;
    readonly UnitsInStock: QNumberPath<number>;
    readonly UnitsOnOrder: QNumberPath<number>;
    readonly ReorderLevel: QNumberPath<number>;
    readonly Discontinued: QBooleanPath<boolean>;
    readonly Category: QEntityPath<QCategory>;
    readonly Order_Details: QEntityCollectionPath<QOrder_Detail>;
    readonly Supplier: QEntityPath<QSupplier>;
}
export declare const qProduct: QProduct;
export declare class QProductId extends QId<ProductId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QRegion extends QueryObject {
    readonly RegionID: QNumberPath<number>;
    readonly RegionDescription: QStringPath<string>;
    readonly Territories: QEntityCollectionPath<QTerritory>;
}
export declare const qRegion: QRegion;
export declare class QRegionId extends QId<RegionId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QShipper extends QueryObject {
    readonly ShipperID: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
    readonly Phone: QStringPath<string>;
    readonly Orders: QEntityCollectionPath<QOrder>;
}
export declare const qShipper: QShipper;
export declare class QShipperId extends QId<ShipperId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QSupplier extends QueryObject {
    readonly SupplierID: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
    readonly ContactName: QStringPath<string>;
    readonly ContactTitle: QStringPath<string>;
    readonly Address: QStringPath<string>;
    readonly City: QStringPath<string>;
    readonly Region: QStringPath<string>;
    readonly PostalCode: QStringPath<string>;
    readonly Country: QStringPath<string>;
    readonly Phone: QStringPath<string>;
    readonly Fax: QStringPath<string>;
    readonly HomePage: QStringPath<string>;
    readonly Products: QEntityCollectionPath<QProduct>;
}
export declare const qSupplier: QSupplier;
export declare class QSupplierId extends QId<SupplierId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QTerritory extends QueryObject {
    readonly TerritoryID: QStringPath<string>;
    readonly TerritoryDescription: QStringPath<string>;
    readonly RegionID: QNumberPath<number>;
    readonly Region: QEntityPath<QRegion>;
    readonly Employees: QEntityCollectionPath<QEmployee>;
}
export declare const qTerritory: QTerritory;
export declare class QTerritoryId extends QId<TerritoryId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QAlphabetical_list_of_product extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProductName: QStringPath<string>;
    readonly SupplierID: QNumberPath<number>;
    readonly CategoryID: QNumberPath<number>;
    readonly QuantityPerUnit: QStringPath<string>;
    readonly UnitPrice: QNumberPath<number>;
    readonly UnitsInStock: QNumberPath<number>;
    readonly UnitsOnOrder: QNumberPath<number>;
    readonly ReorderLevel: QNumberPath<number>;
    readonly Discontinued: QBooleanPath<boolean>;
    readonly CategoryName: QStringPath<string>;
}
export declare const qAlphabetical_list_of_product: QAlphabetical_list_of_product;
export declare class QAlphabetical_list_of_productId extends QId<Alphabetical_list_of_productId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string> | QBooleanParam<boolean>)[];
}
export declare class QCategory_Sales_for_1997 extends QueryObject {
    readonly CategoryName: QStringPath<string>;
    readonly CategorySales: QNumberPath<number>;
}
export declare const qCategory_Sales_for_1997: QCategory_Sales_for_1997;
export declare class QCategory_Sales_for_1997Id extends QId<Category_Sales_for_1997Id> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QCurrent_Product_List extends QueryObject {
    readonly ProductID: QNumberPath<number>;
    readonly ProductName: QStringPath<string>;
}
export declare const qCurrent_Product_List: QCurrent_Product_List;
export declare class QCurrent_Product_ListId extends QId<Current_Product_ListId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QCustomer_and_Suppliers_by_City extends QueryObject {
    readonly City: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly ContactName: QStringPath<string>;
    readonly Relationship: QStringPath<string>;
}
export declare const qCustomer_and_Suppliers_by_City: QCustomer_and_Suppliers_by_City;
export declare class QCustomer_and_Suppliers_by_CityId extends QId<Customer_and_Suppliers_by_CityId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QInvoice extends QueryObject {
    readonly ShipName: QStringPath<string>;
    readonly ShipAddress: QStringPath<string>;
    readonly ShipCity: QStringPath<string>;
    readonly ShipRegion: QStringPath<string>;
    readonly ShipPostalCode: QStringPath<string>;
    readonly ShipCountry: QStringPath<string>;
    readonly CustomerID: QStringPath<string>;
    readonly CustomerName: QStringPath<string>;
    readonly Address: QStringPath<string>;
    readonly City: QStringPath<string>;
    readonly Region: QStringPath<string>;
    readonly PostalCode: QStringPath<string>;
    readonly Country: QStringPath<string>;
    readonly Salesperson: QStringPath<string>;
    readonly OrderID: QNumberPath<number>;
    readonly OrderDate: QDateTimeOffsetPath<string>;
    readonly RequiredDate: QDateTimeOffsetPath<string>;
    readonly ShippedDate: QDateTimeOffsetPath<string>;
    readonly ShipperName: QStringPath<string>;
    readonly ProductID: QNumberPath<number>;
    readonly ProductName: QStringPath<string>;
    readonly UnitPrice: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
    readonly Discount: QNumberPath<number>;
    readonly ExtendedPrice: QNumberPath<number>;
    readonly Freight: QNumberPath<number>;
}
export declare const qInvoice: QInvoice;
export declare class QInvoiceId extends QId<InvoiceId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QOrder_Details_Extended extends QueryObject {
    readonly OrderID: QNumberPath<number>;
    readonly ProductID: QNumberPath<number>;
    readonly ProductName: QStringPath<string>;
    readonly UnitPrice: QNumberPath<number>;
    readonly Quantity: QNumberPath<number>;
    readonly Discount: QNumberPath<number>;
    readonly ExtendedPrice: QNumberPath<number>;
}
export declare const qOrder_Details_Extended: QOrder_Details_Extended;
export declare class QOrder_Details_ExtendedId extends QId<Order_Details_ExtendedId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QOrder_Subtotal extends QueryObject {
    readonly OrderID: QNumberPath<number>;
    readonly Subtotal: QNumberPath<number>;
}
export declare const qOrder_Subtotal: QOrder_Subtotal;
export declare class QOrder_SubtotalId extends QId<Order_SubtotalId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QOrders_Qry extends QueryObject {
    readonly OrderID: QNumberPath<number>;
    readonly CustomerID: QStringPath<string>;
    readonly EmployeeID: QNumberPath<number>;
    readonly OrderDate: QDateTimeOffsetPath<string>;
    readonly RequiredDate: QDateTimeOffsetPath<string>;
    readonly ShippedDate: QDateTimeOffsetPath<string>;
    readonly ShipVia: QNumberPath<number>;
    readonly Freight: QNumberPath<number>;
    readonly ShipName: QStringPath<string>;
    readonly ShipAddress: QStringPath<string>;
    readonly ShipCity: QStringPath<string>;
    readonly ShipRegion: QStringPath<string>;
    readonly ShipPostalCode: QStringPath<string>;
    readonly ShipCountry: QStringPath<string>;
    readonly CompanyName: QStringPath<string>;
    readonly Address: QStringPath<string>;
    readonly City: QStringPath<string>;
    readonly Region: QStringPath<string>;
    readonly PostalCode: QStringPath<string>;
    readonly Country: QStringPath<string>;
}
export declare const qOrders_Qry: QOrders_Qry;
export declare class QOrders_QryId extends QId<Orders_QryId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QProduct_Sales_for_1997 extends QueryObject {
    readonly CategoryName: QStringPath<string>;
    readonly ProductName: QStringPath<string>;
    readonly ProductSales: QNumberPath<number>;
}
export declare const qProduct_Sales_for_1997: QProduct_Sales_for_1997;
export declare class QProduct_Sales_for_1997Id extends QId<Product_Sales_for_1997Id> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QProducts_Above_Average_Price extends QueryObject {
    readonly ProductName: QStringPath<string>;
    readonly UnitPrice: QNumberPath<number>;
}
export declare const qProducts_Above_Average_Price: QProducts_Above_Average_Price;
export declare class QProducts_Above_Average_PriceId extends QId<Products_Above_Average_PriceId> {
    private readonly params;
    getParams(): QStringParam<string>[];
}
export declare class QProducts_by_Category extends QueryObject {
    readonly CategoryName: QStringPath<string>;
    readonly ProductName: QStringPath<string>;
    readonly QuantityPerUnit: QStringPath<string>;
    readonly UnitsInStock: QNumberPath<number>;
    readonly Discontinued: QBooleanPath<boolean>;
}
export declare const qProducts_by_Category: QProducts_by_Category;
export declare class QProducts_by_CategoryId extends QId<Products_by_CategoryId> {
    private readonly params;
    getParams(): (QStringParam<string> | QBooleanParam<boolean>)[];
}
export declare class QSales_by_Category extends QueryObject {
    readonly CategoryID: QNumberPath<number>;
    readonly CategoryName: QStringPath<string>;
    readonly ProductName: QStringPath<string>;
    readonly ProductSales: QNumberPath<number>;
}
export declare const qSales_by_Category: QSales_by_Category;
export declare class QSales_by_CategoryId extends QId<Sales_by_CategoryId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QSales_Totals_by_Amount extends QueryObject {
    readonly SaleAmount: QNumberPath<number>;
    readonly OrderID: QNumberPath<number>;
    readonly CompanyName: QStringPath<string>;
    readonly ShippedDate: QDateTimeOffsetPath<string>;
}
export declare const qSales_Totals_by_Amount: QSales_Totals_by_Amount;
export declare class QSales_Totals_by_AmountId extends QId<Sales_Totals_by_AmountId> {
    private readonly params;
    getParams(): (QNumberParam<number> | QStringParam<string>)[];
}
export declare class QSummary_of_Sales_by_Quarter extends QueryObject {
    readonly ShippedDate: QDateTimeOffsetPath<string>;
    readonly OrderID: QNumberPath<number>;
    readonly Subtotal: QNumberPath<number>;
}
export declare const qSummary_of_Sales_by_Quarter: QSummary_of_Sales_by_Quarter;
export declare class QSummary_of_Sales_by_QuarterId extends QId<Summary_of_Sales_by_QuarterId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
export declare class QSummary_of_Sales_by_Year extends QueryObject {
    readonly ShippedDate: QDateTimeOffsetPath<string>;
    readonly OrderID: QNumberPath<number>;
    readonly Subtotal: QNumberPath<number>;
}
export declare const qSummary_of_Sales_by_Year: QSummary_of_Sales_by_Year;
export declare class QSummary_of_Sales_by_YearId extends QId<Summary_of_Sales_by_YearId> {
    private readonly params;
    getParams(): QNumberParam<number>[];
}
