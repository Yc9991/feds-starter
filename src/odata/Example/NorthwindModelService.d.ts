import type { ODataHttpClient } from "@odata2ts/http-client-api";
import { ODataService, EntityTypeServiceV4, ODataServiceOptionsInternal, EntitySetServiceV4 } from "@odata2ts/odata-service";
import type { CategoryId, CustomerDemographicId, CustomerId, EmployeeId, Order_DetailId, OrderId, ProductId, RegionId, ShipperId, SupplierId, TerritoryId, Alphabetical_list_of_productId, Category_Sales_for_1997Id, Current_Product_ListId, Customer_and_Suppliers_by_CityId, InvoiceId, Order_Details_ExtendedId, Order_SubtotalId, Orders_QryId, Product_Sales_for_1997Id, Products_Above_Average_PriceId, Products_by_CategoryId, Sales_by_CategoryId, Sales_Totals_by_AmountId, Summary_of_Sales_by_QuarterId, Summary_of_Sales_by_YearId, Category, EditableCategory, CustomerDemographic, EditableCustomerDemographic, Customer, EditableCustomer, Employee, EditableEmployee, Order_Detail, EditableOrder_Detail, Order, EditableOrder, Product, EditableProduct, Region, EditableRegion, Shipper, EditableShipper, Supplier, EditableSupplier, Territory, EditableTerritory, Alphabetical_list_of_product, EditableAlphabetical_list_of_product, Category_Sales_for_1997, EditableCategory_Sales_for_1997, Current_Product_List, EditableCurrent_Product_List, Customer_and_Suppliers_by_City, EditableCustomer_and_Suppliers_by_City, Invoice, EditableInvoice, Order_Details_Extended, EditableOrder_Details_Extended, Order_Subtotal, EditableOrder_Subtotal, Orders_Qry, EditableOrders_Qry, Product_Sales_for_1997, EditableProduct_Sales_for_1997, Products_Above_Average_Price, EditableProducts_Above_Average_Price, Products_by_Category, EditableProducts_by_Category, Sales_by_Category, EditableSales_by_Category, Sales_Totals_by_Amount, EditableSales_Totals_by_Amount, Summary_of_Sales_by_Quarter, EditableSummary_of_Sales_by_Quarter, Summary_of_Sales_by_Year, EditableSummary_of_Sales_by_Year } from "./NorthwindModelModel";
import type { QCategory, QCustomerDemographic, QCustomer, QEmployee, QOrder_Detail, QOrder, QProduct, QRegion, QShipper, QSupplier, QTerritory, QAlphabetical_list_of_product, QCategory_Sales_for_1997, QCurrent_Product_List, QCustomer_and_Suppliers_by_City, QInvoice, QOrder_Details_Extended, QOrder_Subtotal, QOrders_Qry, QProduct_Sales_for_1997, QProducts_Above_Average_Price, QProducts_by_Category, QSales_by_Category, QSales_Totals_by_Amount, QSummary_of_Sales_by_Quarter, QSummary_of_Sales_by_Year } from "./QNorthwindModel";
export declare class NorthwindModelService<in out ClientType extends ODataHttpClient> extends ODataService<ClientType> {
    Categories(): CategoryCollectionService<ClientType>;
    Categories(id: CategoryId): CategoryService<ClientType>;
    CustomerDemographics(): CustomerDemographicCollectionService<ClientType>;
    CustomerDemographics(id: CustomerDemographicId): CustomerDemographicService<ClientType>;
    Customers(): CustomerCollectionService<ClientType>;
    Customers(id: CustomerId): CustomerService<ClientType>;
    Employees(): EmployeeCollectionService<ClientType>;
    Employees(id: EmployeeId): EmployeeService<ClientType>;
    Order_Details(): Order_DetailCollectionService<ClientType>;
    Order_Details(id: Order_DetailId): Order_DetailService<ClientType>;
    Orders(): OrderCollectionService<ClientType>;
    Orders(id: OrderId): OrderService<ClientType>;
    Products(): ProductCollectionService<ClientType>;
    Products(id: ProductId): ProductService<ClientType>;
    Regions(): RegionCollectionService<ClientType>;
    Regions(id: RegionId): RegionService<ClientType>;
    Shippers(): ShipperCollectionService<ClientType>;
    Shippers(id: ShipperId): ShipperService<ClientType>;
    Suppliers(): SupplierCollectionService<ClientType>;
    Suppliers(id: SupplierId): SupplierService<ClientType>;
    Territories(): TerritoryCollectionService<ClientType>;
    Territories(id: TerritoryId): TerritoryService<ClientType>;
    Alphabetical_list_of_products(): Alphabetical_list_of_productCollectionService<ClientType>;
    Alphabetical_list_of_products(id: Alphabetical_list_of_productId): Alphabetical_list_of_productService<ClientType>;
    Category_Sales_for_1997(): Category_Sales_for_1997CollectionService<ClientType>;
    Category_Sales_for_1997(id: Category_Sales_for_1997Id): Category_Sales_for_1997Service<ClientType>;
    Current_Product_Lists(): Current_Product_ListCollectionService<ClientType>;
    Current_Product_Lists(id: Current_Product_ListId): Current_Product_ListService<ClientType>;
    Customer_and_Suppliers_by_Cities(): Customer_and_Suppliers_by_CityCollectionService<ClientType>;
    Customer_and_Suppliers_by_Cities(id: Customer_and_Suppliers_by_CityId): Customer_and_Suppliers_by_CityService<ClientType>;
    Invoices(): InvoiceCollectionService<ClientType>;
    Invoices(id: InvoiceId): InvoiceService<ClientType>;
    Order_Details_Extendeds(): Order_Details_ExtendedCollectionService<ClientType>;
    Order_Details_Extendeds(id: Order_Details_ExtendedId): Order_Details_ExtendedService<ClientType>;
    Order_Subtotals(): Order_SubtotalCollectionService<ClientType>;
    Order_Subtotals(id: Order_SubtotalId): Order_SubtotalService<ClientType>;
    Orders_Qries(): Orders_QryCollectionService<ClientType>;
    Orders_Qries(id: Orders_QryId): Orders_QryService<ClientType>;
    Product_Sales_for_1997(): Product_Sales_for_1997CollectionService<ClientType>;
    Product_Sales_for_1997(id: Product_Sales_for_1997Id): Product_Sales_for_1997Service<ClientType>;
    Products_Above_Average_Prices(): Products_Above_Average_PriceCollectionService<ClientType>;
    Products_Above_Average_Prices(id: Products_Above_Average_PriceId): Products_Above_Average_PriceService<ClientType>;
    Products_by_Categories(): Products_by_CategoryCollectionService<ClientType>;
    Products_by_Categories(id: Products_by_CategoryId): Products_by_CategoryService<ClientType>;
    Sales_by_Categories(): Sales_by_CategoryCollectionService<ClientType>;
    Sales_by_Categories(id: Sales_by_CategoryId): Sales_by_CategoryService<ClientType>;
    Sales_Totals_by_Amounts(): Sales_Totals_by_AmountCollectionService<ClientType>;
    Sales_Totals_by_Amounts(id: Sales_Totals_by_AmountId): Sales_Totals_by_AmountService<ClientType>;
    Summary_of_Sales_by_Quarters(): Summary_of_Sales_by_QuarterCollectionService<ClientType>;
    Summary_of_Sales_by_Quarters(id: Summary_of_Sales_by_QuarterId): Summary_of_Sales_by_QuarterService<ClientType>;
    Summary_of_Sales_by_Years(): Summary_of_Sales_by_YearCollectionService<ClientType>;
    Summary_of_Sales_by_Years(id: Summary_of_Sales_by_YearId): Summary_of_Sales_by_YearService<ClientType>;
}
export declare class CategoryService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Category, EditableCategory, QCategory> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Products(): ProductCollectionService<ClientType>;
    Products(id: ProductId): ProductService<ClientType>;
}
export declare class CategoryCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Category, EditableCategory, QCategory, CategoryId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class CustomerDemographicService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, CustomerDemographic, EditableCustomerDemographic, QCustomerDemographic> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Customers(): CustomerCollectionService<ClientType>;
    Customers(id: CustomerId): CustomerService<ClientType>;
}
export declare class CustomerDemographicCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, CustomerDemographic, EditableCustomerDemographic, QCustomerDemographic, CustomerDemographicId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class CustomerService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Customer, EditableCustomer, QCustomer> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Orders(): OrderCollectionService<ClientType>;
    Orders(id: OrderId): OrderService<ClientType>;
    CustomerDemographics(): CustomerDemographicCollectionService<ClientType>;
    CustomerDemographics(id: CustomerDemographicId): CustomerDemographicService<ClientType>;
}
export declare class CustomerCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Customer, EditableCustomer, QCustomer, CustomerId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class EmployeeService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Employee, EditableEmployee, QEmployee> {
    private _Employee1?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Employees1(): EmployeeCollectionService<ClientType>;
    Employees1(id: EmployeeId): EmployeeService<ClientType>;
    Employee1(): EmployeeService<ClientType>;
    Orders(): OrderCollectionService<ClientType>;
    Orders(id: OrderId): OrderService<ClientType>;
    Territories(): TerritoryCollectionService<ClientType>;
    Territories(id: TerritoryId): TerritoryService<ClientType>;
}
export declare class EmployeeCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Employee, EditableEmployee, QEmployee, EmployeeId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Order_DetailService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Order_Detail, EditableOrder_Detail, QOrder_Detail> {
    private _Order?;
    private _Product?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Order(): OrderService<ClientType>;
    Product(): ProductService<ClientType>;
}
export declare class Order_DetailCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Order_Detail, EditableOrder_Detail, QOrder_Detail, Order_DetailId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class OrderService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Order, EditableOrder, QOrder> {
    private _Customer?;
    private _Employee?;
    private _Shipper?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Customer(): CustomerService<ClientType>;
    Employee(): EmployeeService<ClientType>;
    Order_Details(): Order_DetailCollectionService<ClientType>;
    Order_Details(id: Order_DetailId): Order_DetailService<ClientType>;
    Shipper(): ShipperService<ClientType>;
}
export declare class OrderCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Order, EditableOrder, QOrder, OrderId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ProductService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Product, EditableProduct, QProduct> {
    private _Category?;
    private _Supplier?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Category(): CategoryService<ClientType>;
    Order_Details(): Order_DetailCollectionService<ClientType>;
    Order_Details(id: Order_DetailId): Order_DetailService<ClientType>;
    Supplier(): SupplierService<ClientType>;
}
export declare class ProductCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Product, EditableProduct, QProduct, ProductId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class RegionService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Region, EditableRegion, QRegion> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Territories(): TerritoryCollectionService<ClientType>;
    Territories(id: TerritoryId): TerritoryService<ClientType>;
}
export declare class RegionCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Region, EditableRegion, QRegion, RegionId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class ShipperService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Shipper, EditableShipper, QShipper> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Orders(): OrderCollectionService<ClientType>;
    Orders(id: OrderId): OrderService<ClientType>;
}
export declare class ShipperCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Shipper, EditableShipper, QShipper, ShipperId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class SupplierService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Supplier, EditableSupplier, QSupplier> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Products(): ProductCollectionService<ClientType>;
    Products(id: ProductId): ProductService<ClientType>;
}
export declare class SupplierCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Supplier, EditableSupplier, QSupplier, SupplierId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class TerritoryService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Territory, EditableTerritory, QTerritory> {
    private _Region?;
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
    Region(): RegionService<ClientType>;
    Employees(): EmployeeCollectionService<ClientType>;
    Employees(id: EmployeeId): EmployeeService<ClientType>;
}
export declare class TerritoryCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Territory, EditableTerritory, QTerritory, TerritoryId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Alphabetical_list_of_productService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Alphabetical_list_of_product, EditableAlphabetical_list_of_product, QAlphabetical_list_of_product> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Alphabetical_list_of_productCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Alphabetical_list_of_product, EditableAlphabetical_list_of_product, QAlphabetical_list_of_product, Alphabetical_list_of_productId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Category_Sales_for_1997Service<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Category_Sales_for_1997, EditableCategory_Sales_for_1997, QCategory_Sales_for_1997> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Category_Sales_for_1997CollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Category_Sales_for_1997, EditableCategory_Sales_for_1997, QCategory_Sales_for_1997, Category_Sales_for_1997Id> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Current_Product_ListService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Current_Product_List, EditableCurrent_Product_List, QCurrent_Product_List> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Current_Product_ListCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Current_Product_List, EditableCurrent_Product_List, QCurrent_Product_List, Current_Product_ListId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Customer_and_Suppliers_by_CityService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Customer_and_Suppliers_by_City, EditableCustomer_and_Suppliers_by_City, QCustomer_and_Suppliers_by_City> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Customer_and_Suppliers_by_CityCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Customer_and_Suppliers_by_City, EditableCustomer_and_Suppliers_by_City, QCustomer_and_Suppliers_by_City, Customer_and_Suppliers_by_CityId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class InvoiceService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Invoice, EditableInvoice, QInvoice> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class InvoiceCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Invoice, EditableInvoice, QInvoice, InvoiceId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Order_Details_ExtendedService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Order_Details_Extended, EditableOrder_Details_Extended, QOrder_Details_Extended> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Order_Details_ExtendedCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Order_Details_Extended, EditableOrder_Details_Extended, QOrder_Details_Extended, Order_Details_ExtendedId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Order_SubtotalService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Order_Subtotal, EditableOrder_Subtotal, QOrder_Subtotal> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Order_SubtotalCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Order_Subtotal, EditableOrder_Subtotal, QOrder_Subtotal, Order_SubtotalId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Orders_QryService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Orders_Qry, EditableOrders_Qry, QOrders_Qry> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Orders_QryCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Orders_Qry, EditableOrders_Qry, QOrders_Qry, Orders_QryId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Product_Sales_for_1997Service<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Product_Sales_for_1997, EditableProduct_Sales_for_1997, QProduct_Sales_for_1997> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Product_Sales_for_1997CollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Product_Sales_for_1997, EditableProduct_Sales_for_1997, QProduct_Sales_for_1997, Product_Sales_for_1997Id> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Products_Above_Average_PriceService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Products_Above_Average_Price, EditableProducts_Above_Average_Price, QProducts_Above_Average_Price> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Products_Above_Average_PriceCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Products_Above_Average_Price, EditableProducts_Above_Average_Price, QProducts_Above_Average_Price, Products_Above_Average_PriceId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Products_by_CategoryService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Products_by_Category, EditableProducts_by_Category, QProducts_by_Category> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Products_by_CategoryCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Products_by_Category, EditableProducts_by_Category, QProducts_by_Category, Products_by_CategoryId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Sales_by_CategoryService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Sales_by_Category, EditableSales_by_Category, QSales_by_Category> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Sales_by_CategoryCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Sales_by_Category, EditableSales_by_Category, QSales_by_Category, Sales_by_CategoryId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Sales_Totals_by_AmountService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Sales_Totals_by_Amount, EditableSales_Totals_by_Amount, QSales_Totals_by_Amount> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Sales_Totals_by_AmountCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Sales_Totals_by_Amount, EditableSales_Totals_by_Amount, QSales_Totals_by_Amount, Sales_Totals_by_AmountId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Summary_of_Sales_by_QuarterService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Summary_of_Sales_by_Quarter, EditableSummary_of_Sales_by_Quarter, QSummary_of_Sales_by_Quarter> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Summary_of_Sales_by_QuarterCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Summary_of_Sales_by_Quarter, EditableSummary_of_Sales_by_Quarter, QSummary_of_Sales_by_Quarter, Summary_of_Sales_by_QuarterId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Summary_of_Sales_by_YearService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<ClientType, Summary_of_Sales_by_Year, EditableSummary_of_Sales_by_Year, QSummary_of_Sales_by_Year> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
export declare class Summary_of_Sales_by_YearCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<ClientType, Summary_of_Sales_by_Year, EditableSummary_of_Sales_by_Year, QSummary_of_Sales_by_Year, Summary_of_Sales_by_YearId> {
    constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal);
}
