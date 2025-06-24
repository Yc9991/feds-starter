"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.qOrder_Details_Extended = exports.QOrder_Details_Extended = exports.QInvoiceId = exports.qInvoice = exports.QInvoice = exports.QCustomer_and_Suppliers_by_CityId = exports.qCustomer_and_Suppliers_by_City = exports.QCustomer_and_Suppliers_by_City = exports.QCurrent_Product_ListId = exports.qCurrent_Product_List = exports.QCurrent_Product_List = exports.QCategory_Sales_for_1997Id = exports.qCategory_Sales_for_1997 = exports.QCategory_Sales_for_1997 = exports.QAlphabetical_list_of_productId = exports.qAlphabetical_list_of_product = exports.QAlphabetical_list_of_product = exports.QTerritoryId = exports.qTerritory = exports.QTerritory = exports.QSupplierId = exports.qSupplier = exports.QSupplier = exports.QShipperId = exports.qShipper = exports.QShipper = exports.QRegionId = exports.qRegion = exports.QRegion = exports.QProductId = exports.qProduct = exports.QProduct = exports.QOrderId = exports.qOrder = exports.QOrder = exports.QOrder_DetailId = exports.qOrder_Detail = exports.QOrder_Detail = exports.QEmployeeId = exports.qEmployee = exports.QEmployee = exports.QCustomerId = exports.qCustomer = exports.QCustomer = exports.QCustomerDemographicId = exports.qCustomerDemographic = exports.QCustomerDemographic = exports.QCategoryId = exports.qCategory = exports.QCategory = void 0;
exports.QSummary_of_Sales_by_YearId = exports.qSummary_of_Sales_by_Year = exports.QSummary_of_Sales_by_Year = exports.QSummary_of_Sales_by_QuarterId = exports.qSummary_of_Sales_by_Quarter = exports.QSummary_of_Sales_by_Quarter = exports.QSales_Totals_by_AmountId = exports.qSales_Totals_by_Amount = exports.QSales_Totals_by_Amount = exports.QSales_by_CategoryId = exports.qSales_by_Category = exports.QSales_by_Category = exports.QProducts_by_CategoryId = exports.qProducts_by_Category = exports.QProducts_by_Category = exports.QProducts_Above_Average_PriceId = exports.qProducts_Above_Average_Price = exports.QProducts_Above_Average_Price = exports.QProduct_Sales_for_1997Id = exports.qProduct_Sales_for_1997 = exports.QProduct_Sales_for_1997 = exports.QOrders_QryId = exports.qOrders_Qry = exports.QOrders_Qry = exports.QOrder_SubtotalId = exports.qOrder_Subtotal = exports.QOrder_Subtotal = exports.QOrder_Details_ExtendedId = void 0;
// @ts-nocheck
var odata_query_objects_1 = require("@odata2ts/odata-query-objects");
var QCategory = /** @class */ (function (_super) {
    __extends(QCategory, _super);
    function QCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CategoryID = new odata_query_objects_1.QNumberPath(_this.withPrefix("CategoryID"));
        _this.CategoryName = new odata_query_objects_1.QStringPath(_this.withPrefix("CategoryName"));
        _this.Description = new odata_query_objects_1.QStringPath(_this.withPrefix("Description"));
        _this.Picture = new odata_query_objects_1.QBinaryPath(_this.withPrefix("Picture"));
        _this.Products = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Products"), function () { return QProduct; });
        return _this;
    }
    return QCategory;
}(odata_query_objects_1.QueryObject));
exports.QCategory = QCategory;
exports.qCategory = new QCategory();
var QCategoryId = /** @class */ (function (_super) {
    __extends(QCategoryId, _super);
    function QCategoryId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("CategoryID")];
        return _this;
    }
    QCategoryId.prototype.getParams = function () {
        return this.params;
    };
    return QCategoryId;
}(odata_query_objects_1.QId));
exports.QCategoryId = QCategoryId;
var QCustomerDemographic = /** @class */ (function (_super) {
    __extends(QCustomerDemographic, _super);
    function QCustomerDemographic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CustomerTypeID = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerTypeID"));
        _this.CustomerDesc = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerDesc"));
        _this.Customers = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Customers"), function () { return QCustomer; });
        return _this;
    }
    return QCustomerDemographic;
}(odata_query_objects_1.QueryObject));
exports.QCustomerDemographic = QCustomerDemographic;
exports.qCustomerDemographic = new QCustomerDemographic();
var QCustomerDemographicId = /** @class */ (function (_super) {
    __extends(QCustomerDemographicId, _super);
    function QCustomerDemographicId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CustomerTypeID")];
        return _this;
    }
    QCustomerDemographicId.prototype.getParams = function () {
        return this.params;
    };
    return QCustomerDemographicId;
}(odata_query_objects_1.QId));
exports.QCustomerDemographicId = QCustomerDemographicId;
var QCustomer = /** @class */ (function (_super) {
    __extends(QCustomer, _super);
    function QCustomer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CustomerID = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerID"));
        _this.CompanyName = new odata_query_objects_1.QStringPath(_this.withPrefix("CompanyName"));
        _this.ContactName = new odata_query_objects_1.QStringPath(_this.withPrefix("ContactName"));
        _this.ContactTitle = new odata_query_objects_1.QStringPath(_this.withPrefix("ContactTitle"));
        _this.Address = new odata_query_objects_1.QStringPath(_this.withPrefix("Address"));
        _this.City = new odata_query_objects_1.QStringPath(_this.withPrefix("City"));
        _this.Region = new odata_query_objects_1.QStringPath(_this.withPrefix("Region"));
        _this.PostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("PostalCode"));
        _this.Country = new odata_query_objects_1.QStringPath(_this.withPrefix("Country"));
        _this.Phone = new odata_query_objects_1.QStringPath(_this.withPrefix("Phone"));
        _this.Fax = new odata_query_objects_1.QStringPath(_this.withPrefix("Fax"));
        _this.Orders = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Orders"), function () { return QOrder; });
        _this.CustomerDemographics = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("CustomerDemographics"), function () { return QCustomerDemographic; });
        return _this;
    }
    return QCustomer;
}(odata_query_objects_1.QueryObject));
exports.QCustomer = QCustomer;
exports.qCustomer = new QCustomer();
var QCustomerId = /** @class */ (function (_super) {
    __extends(QCustomerId, _super);
    function QCustomerId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CustomerID")];
        return _this;
    }
    QCustomerId.prototype.getParams = function () {
        return this.params;
    };
    return QCustomerId;
}(odata_query_objects_1.QId));
exports.QCustomerId = QCustomerId;
var QEmployee = /** @class */ (function (_super) {
    __extends(QEmployee, _super);
    function QEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EmployeeID = new odata_query_objects_1.QNumberPath(_this.withPrefix("EmployeeID"));
        _this.LastName = new odata_query_objects_1.QStringPath(_this.withPrefix("LastName"));
        _this.FirstName = new odata_query_objects_1.QStringPath(_this.withPrefix("FirstName"));
        _this.Title = new odata_query_objects_1.QStringPath(_this.withPrefix("Title"));
        _this.TitleOfCourtesy = new odata_query_objects_1.QStringPath(_this.withPrefix("TitleOfCourtesy"));
        _this.BirthDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("BirthDate"));
        _this.HireDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("HireDate"));
        _this.Address = new odata_query_objects_1.QStringPath(_this.withPrefix("Address"));
        _this.City = new odata_query_objects_1.QStringPath(_this.withPrefix("City"));
        _this.Region = new odata_query_objects_1.QStringPath(_this.withPrefix("Region"));
        _this.PostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("PostalCode"));
        _this.Country = new odata_query_objects_1.QStringPath(_this.withPrefix("Country"));
        _this.HomePhone = new odata_query_objects_1.QStringPath(_this.withPrefix("HomePhone"));
        _this.Extension = new odata_query_objects_1.QStringPath(_this.withPrefix("Extension"));
        _this.Photo = new odata_query_objects_1.QBinaryPath(_this.withPrefix("Photo"));
        _this.Notes = new odata_query_objects_1.QStringPath(_this.withPrefix("Notes"));
        _this.ReportsTo = new odata_query_objects_1.QNumberPath(_this.withPrefix("ReportsTo"));
        _this.PhotoPath = new odata_query_objects_1.QStringPath(_this.withPrefix("PhotoPath"));
        _this.Employees1 = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Employees1"), function () { return QEmployee; });
        _this.Employee1 = new odata_query_objects_1.QEntityPath(_this.withPrefix("Employee1"), function () { return QEmployee; });
        _this.Orders = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Orders"), function () { return QOrder; });
        _this.Territories = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Territories"), function () { return QTerritory; });
        return _this;
    }
    return QEmployee;
}(odata_query_objects_1.QueryObject));
exports.QEmployee = QEmployee;
exports.qEmployee = new QEmployee();
var QEmployeeId = /** @class */ (function (_super) {
    __extends(QEmployeeId, _super);
    function QEmployeeId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("EmployeeID")];
        return _this;
    }
    QEmployeeId.prototype.getParams = function () {
        return this.params;
    };
    return QEmployeeId;
}(odata_query_objects_1.QId));
exports.QEmployeeId = QEmployeeId;
var QOrder_Detail = /** @class */ (function (_super) {
    __extends(QOrder_Detail, _super);
    function QOrder_Detail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.ProductID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductID"));
        _this.UnitPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitPrice"));
        _this.Quantity = new odata_query_objects_1.QNumberPath(_this.withPrefix("Quantity"));
        _this.Discount = new odata_query_objects_1.QNumberPath(_this.withPrefix("Discount"));
        _this.Order = new odata_query_objects_1.QEntityPath(_this.withPrefix("Order"), function () { return QOrder; });
        _this.Product = new odata_query_objects_1.QEntityPath(_this.withPrefix("Product"), function () { return QProduct; });
        return _this;
    }
    return QOrder_Detail;
}(odata_query_objects_1.QueryObject));
exports.QOrder_Detail = QOrder_Detail;
exports.qOrder_Detail = new QOrder_Detail();
var QOrder_DetailId = /** @class */ (function (_super) {
    __extends(QOrder_DetailId, _super);
    function QOrder_DetailId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("OrderID"), new odata_query_objects_1.QNumberParam("ProductID")];
        return _this;
    }
    QOrder_DetailId.prototype.getParams = function () {
        return this.params;
    };
    return QOrder_DetailId;
}(odata_query_objects_1.QId));
exports.QOrder_DetailId = QOrder_DetailId;
var QOrder = /** @class */ (function (_super) {
    __extends(QOrder, _super);
    function QOrder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.CustomerID = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerID"));
        _this.EmployeeID = new odata_query_objects_1.QNumberPath(_this.withPrefix("EmployeeID"));
        _this.OrderDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("OrderDate"));
        _this.RequiredDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("RequiredDate"));
        _this.ShippedDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("ShippedDate"));
        _this.ShipVia = new odata_query_objects_1.QNumberPath(_this.withPrefix("ShipVia"));
        _this.Freight = new odata_query_objects_1.QNumberPath(_this.withPrefix("Freight"));
        _this.ShipName = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipName"));
        _this.ShipAddress = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipAddress"));
        _this.ShipCity = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipCity"));
        _this.ShipRegion = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipRegion"));
        _this.ShipPostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipPostalCode"));
        _this.ShipCountry = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipCountry"));
        _this.Customer = new odata_query_objects_1.QEntityPath(_this.withPrefix("Customer"), function () { return QCustomer; });
        _this.Employee = new odata_query_objects_1.QEntityPath(_this.withPrefix("Employee"), function () { return QEmployee; });
        _this.Order_Details = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Order_Details"), function () { return QOrder_Detail; });
        _this.Shipper = new odata_query_objects_1.QEntityPath(_this.withPrefix("Shipper"), function () { return QShipper; });
        return _this;
    }
    return QOrder;
}(odata_query_objects_1.QueryObject));
exports.QOrder = QOrder;
exports.qOrder = new QOrder();
var QOrderId = /** @class */ (function (_super) {
    __extends(QOrderId, _super);
    function QOrderId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("OrderID")];
        return _this;
    }
    QOrderId.prototype.getParams = function () {
        return this.params;
    };
    return QOrderId;
}(odata_query_objects_1.QId));
exports.QOrderId = QOrderId;
var QProduct = /** @class */ (function (_super) {
    __extends(QProduct, _super);
    function QProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ProductID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductID"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.SupplierID = new odata_query_objects_1.QNumberPath(_this.withPrefix("SupplierID"));
        _this.CategoryID = new odata_query_objects_1.QNumberPath(_this.withPrefix("CategoryID"));
        _this.QuantityPerUnit = new odata_query_objects_1.QStringPath(_this.withPrefix("QuantityPerUnit"));
        _this.UnitPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitPrice"));
        _this.UnitsInStock = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitsInStock"));
        _this.UnitsOnOrder = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitsOnOrder"));
        _this.ReorderLevel = new odata_query_objects_1.QNumberPath(_this.withPrefix("ReorderLevel"));
        _this.Discontinued = new odata_query_objects_1.QBooleanPath(_this.withPrefix("Discontinued"));
        _this.Category = new odata_query_objects_1.QEntityPath(_this.withPrefix("Category"), function () { return QCategory; });
        _this.Order_Details = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Order_Details"), function () { return QOrder_Detail; });
        _this.Supplier = new odata_query_objects_1.QEntityPath(_this.withPrefix("Supplier"), function () { return QSupplier; });
        return _this;
    }
    return QProduct;
}(odata_query_objects_1.QueryObject));
exports.QProduct = QProduct;
exports.qProduct = new QProduct();
var QProductId = /** @class */ (function (_super) {
    __extends(QProductId, _super);
    function QProductId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("ProductID")];
        return _this;
    }
    QProductId.prototype.getParams = function () {
        return this.params;
    };
    return QProductId;
}(odata_query_objects_1.QId));
exports.QProductId = QProductId;
var QRegion = /** @class */ (function (_super) {
    __extends(QRegion, _super);
    function QRegion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.RegionID = new odata_query_objects_1.QNumberPath(_this.withPrefix("RegionID"));
        _this.RegionDescription = new odata_query_objects_1.QStringPath(_this.withPrefix("RegionDescription"));
        _this.Territories = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Territories"), function () { return QTerritory; });
        return _this;
    }
    return QRegion;
}(odata_query_objects_1.QueryObject));
exports.QRegion = QRegion;
exports.qRegion = new QRegion();
var QRegionId = /** @class */ (function (_super) {
    __extends(QRegionId, _super);
    function QRegionId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("RegionID")];
        return _this;
    }
    QRegionId.prototype.getParams = function () {
        return this.params;
    };
    return QRegionId;
}(odata_query_objects_1.QId));
exports.QRegionId = QRegionId;
var QShipper = /** @class */ (function (_super) {
    __extends(QShipper, _super);
    function QShipper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ShipperID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ShipperID"));
        _this.CompanyName = new odata_query_objects_1.QStringPath(_this.withPrefix("CompanyName"));
        _this.Phone = new odata_query_objects_1.QStringPath(_this.withPrefix("Phone"));
        _this.Orders = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Orders"), function () { return QOrder; });
        return _this;
    }
    return QShipper;
}(odata_query_objects_1.QueryObject));
exports.QShipper = QShipper;
exports.qShipper = new QShipper();
var QShipperId = /** @class */ (function (_super) {
    __extends(QShipperId, _super);
    function QShipperId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("ShipperID")];
        return _this;
    }
    QShipperId.prototype.getParams = function () {
        return this.params;
    };
    return QShipperId;
}(odata_query_objects_1.QId));
exports.QShipperId = QShipperId;
var QSupplier = /** @class */ (function (_super) {
    __extends(QSupplier, _super);
    function QSupplier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SupplierID = new odata_query_objects_1.QNumberPath(_this.withPrefix("SupplierID"));
        _this.CompanyName = new odata_query_objects_1.QStringPath(_this.withPrefix("CompanyName"));
        _this.ContactName = new odata_query_objects_1.QStringPath(_this.withPrefix("ContactName"));
        _this.ContactTitle = new odata_query_objects_1.QStringPath(_this.withPrefix("ContactTitle"));
        _this.Address = new odata_query_objects_1.QStringPath(_this.withPrefix("Address"));
        _this.City = new odata_query_objects_1.QStringPath(_this.withPrefix("City"));
        _this.Region = new odata_query_objects_1.QStringPath(_this.withPrefix("Region"));
        _this.PostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("PostalCode"));
        _this.Country = new odata_query_objects_1.QStringPath(_this.withPrefix("Country"));
        _this.Phone = new odata_query_objects_1.QStringPath(_this.withPrefix("Phone"));
        _this.Fax = new odata_query_objects_1.QStringPath(_this.withPrefix("Fax"));
        _this.HomePage = new odata_query_objects_1.QStringPath(_this.withPrefix("HomePage"));
        _this.Products = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Products"), function () { return QProduct; });
        return _this;
    }
    return QSupplier;
}(odata_query_objects_1.QueryObject));
exports.QSupplier = QSupplier;
exports.qSupplier = new QSupplier();
var QSupplierId = /** @class */ (function (_super) {
    __extends(QSupplierId, _super);
    function QSupplierId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("SupplierID")];
        return _this;
    }
    QSupplierId.prototype.getParams = function () {
        return this.params;
    };
    return QSupplierId;
}(odata_query_objects_1.QId));
exports.QSupplierId = QSupplierId;
var QTerritory = /** @class */ (function (_super) {
    __extends(QTerritory, _super);
    function QTerritory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TerritoryID = new odata_query_objects_1.QStringPath(_this.withPrefix("TerritoryID"));
        _this.TerritoryDescription = new odata_query_objects_1.QStringPath(_this.withPrefix("TerritoryDescription"));
        _this.RegionID = new odata_query_objects_1.QNumberPath(_this.withPrefix("RegionID"));
        _this.Region = new odata_query_objects_1.QEntityPath(_this.withPrefix("Region"), function () { return QRegion; });
        _this.Employees = new odata_query_objects_1.QEntityCollectionPath(_this.withPrefix("Employees"), function () { return QEmployee; });
        return _this;
    }
    return QTerritory;
}(odata_query_objects_1.QueryObject));
exports.QTerritory = QTerritory;
exports.qTerritory = new QTerritory();
var QTerritoryId = /** @class */ (function (_super) {
    __extends(QTerritoryId, _super);
    function QTerritoryId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("TerritoryID")];
        return _this;
    }
    QTerritoryId.prototype.getParams = function () {
        return this.params;
    };
    return QTerritoryId;
}(odata_query_objects_1.QId));
exports.QTerritoryId = QTerritoryId;
var QAlphabetical_list_of_product = /** @class */ (function (_super) {
    __extends(QAlphabetical_list_of_product, _super);
    function QAlphabetical_list_of_product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ProductID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductID"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.SupplierID = new odata_query_objects_1.QNumberPath(_this.withPrefix("SupplierID"));
        _this.CategoryID = new odata_query_objects_1.QNumberPath(_this.withPrefix("CategoryID"));
        _this.QuantityPerUnit = new odata_query_objects_1.QStringPath(_this.withPrefix("QuantityPerUnit"));
        _this.UnitPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitPrice"));
        _this.UnitsInStock = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitsInStock"));
        _this.UnitsOnOrder = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitsOnOrder"));
        _this.ReorderLevel = new odata_query_objects_1.QNumberPath(_this.withPrefix("ReorderLevel"));
        _this.Discontinued = new odata_query_objects_1.QBooleanPath(_this.withPrefix("Discontinued"));
        _this.CategoryName = new odata_query_objects_1.QStringPath(_this.withPrefix("CategoryName"));
        return _this;
    }
    return QAlphabetical_list_of_product;
}(odata_query_objects_1.QueryObject));
exports.QAlphabetical_list_of_product = QAlphabetical_list_of_product;
exports.qAlphabetical_list_of_product = new QAlphabetical_list_of_product();
var QAlphabetical_list_of_productId = /** @class */ (function (_super) {
    __extends(QAlphabetical_list_of_productId, _super);
    function QAlphabetical_list_of_productId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CategoryName"), new odata_query_objects_1.QBooleanParam("Discontinued"), new odata_query_objects_1.QNumberParam("ProductID"), new odata_query_objects_1.QStringParam("ProductName")];
        return _this;
    }
    QAlphabetical_list_of_productId.prototype.getParams = function () {
        return this.params;
    };
    return QAlphabetical_list_of_productId;
}(odata_query_objects_1.QId));
exports.QAlphabetical_list_of_productId = QAlphabetical_list_of_productId;
var QCategory_Sales_for_1997 = /** @class */ (function (_super) {
    __extends(QCategory_Sales_for_1997, _super);
    function QCategory_Sales_for_1997() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CategoryName = new odata_query_objects_1.QStringPath(_this.withPrefix("CategoryName"));
        _this.CategorySales = new odata_query_objects_1.QNumberPath(_this.withPrefix("CategorySales"));
        return _this;
    }
    return QCategory_Sales_for_1997;
}(odata_query_objects_1.QueryObject));
exports.QCategory_Sales_for_1997 = QCategory_Sales_for_1997;
exports.qCategory_Sales_for_1997 = new QCategory_Sales_for_1997();
var QCategory_Sales_for_1997Id = /** @class */ (function (_super) {
    __extends(QCategory_Sales_for_1997Id, _super);
    function QCategory_Sales_for_1997Id() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CategoryName")];
        return _this;
    }
    QCategory_Sales_for_1997Id.prototype.getParams = function () {
        return this.params;
    };
    return QCategory_Sales_for_1997Id;
}(odata_query_objects_1.QId));
exports.QCategory_Sales_for_1997Id = QCategory_Sales_for_1997Id;
var QCurrent_Product_List = /** @class */ (function (_super) {
    __extends(QCurrent_Product_List, _super);
    function QCurrent_Product_List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ProductID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductID"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        return _this;
    }
    return QCurrent_Product_List;
}(odata_query_objects_1.QueryObject));
exports.QCurrent_Product_List = QCurrent_Product_List;
exports.qCurrent_Product_List = new QCurrent_Product_List();
var QCurrent_Product_ListId = /** @class */ (function (_super) {
    __extends(QCurrent_Product_ListId, _super);
    function QCurrent_Product_ListId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("ProductID"), new odata_query_objects_1.QStringParam("ProductName")];
        return _this;
    }
    QCurrent_Product_ListId.prototype.getParams = function () {
        return this.params;
    };
    return QCurrent_Product_ListId;
}(odata_query_objects_1.QId));
exports.QCurrent_Product_ListId = QCurrent_Product_ListId;
var QCustomer_and_Suppliers_by_City = /** @class */ (function (_super) {
    __extends(QCustomer_and_Suppliers_by_City, _super);
    function QCustomer_and_Suppliers_by_City() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.City = new odata_query_objects_1.QStringPath(_this.withPrefix("City"));
        _this.CompanyName = new odata_query_objects_1.QStringPath(_this.withPrefix("CompanyName"));
        _this.ContactName = new odata_query_objects_1.QStringPath(_this.withPrefix("ContactName"));
        _this.Relationship = new odata_query_objects_1.QStringPath(_this.withPrefix("Relationship"));
        return _this;
    }
    return QCustomer_and_Suppliers_by_City;
}(odata_query_objects_1.QueryObject));
exports.QCustomer_and_Suppliers_by_City = QCustomer_and_Suppliers_by_City;
exports.qCustomer_and_Suppliers_by_City = new QCustomer_and_Suppliers_by_City();
var QCustomer_and_Suppliers_by_CityId = /** @class */ (function (_super) {
    __extends(QCustomer_and_Suppliers_by_CityId, _super);
    function QCustomer_and_Suppliers_by_CityId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CompanyName"), new odata_query_objects_1.QStringParam("Relationship")];
        return _this;
    }
    QCustomer_and_Suppliers_by_CityId.prototype.getParams = function () {
        return this.params;
    };
    return QCustomer_and_Suppliers_by_CityId;
}(odata_query_objects_1.QId));
exports.QCustomer_and_Suppliers_by_CityId = QCustomer_and_Suppliers_by_CityId;
var QInvoice = /** @class */ (function (_super) {
    __extends(QInvoice, _super);
    function QInvoice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ShipName = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipName"));
        _this.ShipAddress = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipAddress"));
        _this.ShipCity = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipCity"));
        _this.ShipRegion = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipRegion"));
        _this.ShipPostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipPostalCode"));
        _this.ShipCountry = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipCountry"));
        _this.CustomerID = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerID"));
        _this.CustomerName = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerName"));
        _this.Address = new odata_query_objects_1.QStringPath(_this.withPrefix("Address"));
        _this.City = new odata_query_objects_1.QStringPath(_this.withPrefix("City"));
        _this.Region = new odata_query_objects_1.QStringPath(_this.withPrefix("Region"));
        _this.PostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("PostalCode"));
        _this.Country = new odata_query_objects_1.QStringPath(_this.withPrefix("Country"));
        _this.Salesperson = new odata_query_objects_1.QStringPath(_this.withPrefix("Salesperson"));
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.OrderDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("OrderDate"));
        _this.RequiredDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("RequiredDate"));
        _this.ShippedDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("ShippedDate"));
        _this.ShipperName = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipperName"));
        _this.ProductID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductID"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.UnitPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitPrice"));
        _this.Quantity = new odata_query_objects_1.QNumberPath(_this.withPrefix("Quantity"));
        _this.Discount = new odata_query_objects_1.QNumberPath(_this.withPrefix("Discount"));
        _this.ExtendedPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("ExtendedPrice"));
        _this.Freight = new odata_query_objects_1.QNumberPath(_this.withPrefix("Freight"));
        return _this;
    }
    return QInvoice;
}(odata_query_objects_1.QueryObject));
exports.QInvoice = QInvoice;
exports.qInvoice = new QInvoice();
var QInvoiceId = /** @class */ (function (_super) {
    __extends(QInvoiceId, _super);
    function QInvoiceId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CustomerName"), new odata_query_objects_1.QNumberParam("Discount"), new odata_query_objects_1.QNumberParam("OrderID"), new odata_query_objects_1.QNumberParam("ProductID"), new odata_query_objects_1.QStringParam("ProductName"), new odata_query_objects_1.QNumberParam("Quantity"), new odata_query_objects_1.QStringParam("Salesperson"), new odata_query_objects_1.QStringParam("ShipperName"), new odata_query_objects_1.QNumberParam("UnitPrice")];
        return _this;
    }
    QInvoiceId.prototype.getParams = function () {
        return this.params;
    };
    return QInvoiceId;
}(odata_query_objects_1.QId));
exports.QInvoiceId = QInvoiceId;
var QOrder_Details_Extended = /** @class */ (function (_super) {
    __extends(QOrder_Details_Extended, _super);
    function QOrder_Details_Extended() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.ProductID = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductID"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.UnitPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitPrice"));
        _this.Quantity = new odata_query_objects_1.QNumberPath(_this.withPrefix("Quantity"));
        _this.Discount = new odata_query_objects_1.QNumberPath(_this.withPrefix("Discount"));
        _this.ExtendedPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("ExtendedPrice"));
        return _this;
    }
    return QOrder_Details_Extended;
}(odata_query_objects_1.QueryObject));
exports.QOrder_Details_Extended = QOrder_Details_Extended;
exports.qOrder_Details_Extended = new QOrder_Details_Extended();
var QOrder_Details_ExtendedId = /** @class */ (function (_super) {
    __extends(QOrder_Details_ExtendedId, _super);
    function QOrder_Details_ExtendedId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("Discount"), new odata_query_objects_1.QNumberParam("OrderID"), new odata_query_objects_1.QNumberParam("ProductID"), new odata_query_objects_1.QStringParam("ProductName"), new odata_query_objects_1.QNumberParam("Quantity"), new odata_query_objects_1.QNumberParam("UnitPrice")];
        return _this;
    }
    QOrder_Details_ExtendedId.prototype.getParams = function () {
        return this.params;
    };
    return QOrder_Details_ExtendedId;
}(odata_query_objects_1.QId));
exports.QOrder_Details_ExtendedId = QOrder_Details_ExtendedId;
var QOrder_Subtotal = /** @class */ (function (_super) {
    __extends(QOrder_Subtotal, _super);
    function QOrder_Subtotal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.Subtotal = new odata_query_objects_1.QNumberPath(_this.withPrefix("Subtotal"));
        return _this;
    }
    return QOrder_Subtotal;
}(odata_query_objects_1.QueryObject));
exports.QOrder_Subtotal = QOrder_Subtotal;
exports.qOrder_Subtotal = new QOrder_Subtotal();
var QOrder_SubtotalId = /** @class */ (function (_super) {
    __extends(QOrder_SubtotalId, _super);
    function QOrder_SubtotalId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("OrderID")];
        return _this;
    }
    QOrder_SubtotalId.prototype.getParams = function () {
        return this.params;
    };
    return QOrder_SubtotalId;
}(odata_query_objects_1.QId));
exports.QOrder_SubtotalId = QOrder_SubtotalId;
var QOrders_Qry = /** @class */ (function (_super) {
    __extends(QOrders_Qry, _super);
    function QOrders_Qry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.CustomerID = new odata_query_objects_1.QStringPath(_this.withPrefix("CustomerID"));
        _this.EmployeeID = new odata_query_objects_1.QNumberPath(_this.withPrefix("EmployeeID"));
        _this.OrderDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("OrderDate"));
        _this.RequiredDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("RequiredDate"));
        _this.ShippedDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("ShippedDate"));
        _this.ShipVia = new odata_query_objects_1.QNumberPath(_this.withPrefix("ShipVia"));
        _this.Freight = new odata_query_objects_1.QNumberPath(_this.withPrefix("Freight"));
        _this.ShipName = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipName"));
        _this.ShipAddress = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipAddress"));
        _this.ShipCity = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipCity"));
        _this.ShipRegion = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipRegion"));
        _this.ShipPostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipPostalCode"));
        _this.ShipCountry = new odata_query_objects_1.QStringPath(_this.withPrefix("ShipCountry"));
        _this.CompanyName = new odata_query_objects_1.QStringPath(_this.withPrefix("CompanyName"));
        _this.Address = new odata_query_objects_1.QStringPath(_this.withPrefix("Address"));
        _this.City = new odata_query_objects_1.QStringPath(_this.withPrefix("City"));
        _this.Region = new odata_query_objects_1.QStringPath(_this.withPrefix("Region"));
        _this.PostalCode = new odata_query_objects_1.QStringPath(_this.withPrefix("PostalCode"));
        _this.Country = new odata_query_objects_1.QStringPath(_this.withPrefix("Country"));
        return _this;
    }
    return QOrders_Qry;
}(odata_query_objects_1.QueryObject));
exports.QOrders_Qry = QOrders_Qry;
exports.qOrders_Qry = new QOrders_Qry();
var QOrders_QryId = /** @class */ (function (_super) {
    __extends(QOrders_QryId, _super);
    function QOrders_QryId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CompanyName"), new odata_query_objects_1.QNumberParam("OrderID")];
        return _this;
    }
    QOrders_QryId.prototype.getParams = function () {
        return this.params;
    };
    return QOrders_QryId;
}(odata_query_objects_1.QId));
exports.QOrders_QryId = QOrders_QryId;
var QProduct_Sales_for_1997 = /** @class */ (function (_super) {
    __extends(QProduct_Sales_for_1997, _super);
    function QProduct_Sales_for_1997() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CategoryName = new odata_query_objects_1.QStringPath(_this.withPrefix("CategoryName"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.ProductSales = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductSales"));
        return _this;
    }
    return QProduct_Sales_for_1997;
}(odata_query_objects_1.QueryObject));
exports.QProduct_Sales_for_1997 = QProduct_Sales_for_1997;
exports.qProduct_Sales_for_1997 = new QProduct_Sales_for_1997();
var QProduct_Sales_for_1997Id = /** @class */ (function (_super) {
    __extends(QProduct_Sales_for_1997Id, _super);
    function QProduct_Sales_for_1997Id() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CategoryName"), new odata_query_objects_1.QStringParam("ProductName")];
        return _this;
    }
    QProduct_Sales_for_1997Id.prototype.getParams = function () {
        return this.params;
    };
    return QProduct_Sales_for_1997Id;
}(odata_query_objects_1.QId));
exports.QProduct_Sales_for_1997Id = QProduct_Sales_for_1997Id;
var QProducts_Above_Average_Price = /** @class */ (function (_super) {
    __extends(QProducts_Above_Average_Price, _super);
    function QProducts_Above_Average_Price() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.UnitPrice = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitPrice"));
        return _this;
    }
    return QProducts_Above_Average_Price;
}(odata_query_objects_1.QueryObject));
exports.QProducts_Above_Average_Price = QProducts_Above_Average_Price;
exports.qProducts_Above_Average_Price = new QProducts_Above_Average_Price();
var QProducts_Above_Average_PriceId = /** @class */ (function (_super) {
    __extends(QProducts_Above_Average_PriceId, _super);
    function QProducts_Above_Average_PriceId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("ProductName")];
        return _this;
    }
    QProducts_Above_Average_PriceId.prototype.getParams = function () {
        return this.params;
    };
    return QProducts_Above_Average_PriceId;
}(odata_query_objects_1.QId));
exports.QProducts_Above_Average_PriceId = QProducts_Above_Average_PriceId;
var QProducts_by_Category = /** @class */ (function (_super) {
    __extends(QProducts_by_Category, _super);
    function QProducts_by_Category() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CategoryName = new odata_query_objects_1.QStringPath(_this.withPrefix("CategoryName"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.QuantityPerUnit = new odata_query_objects_1.QStringPath(_this.withPrefix("QuantityPerUnit"));
        _this.UnitsInStock = new odata_query_objects_1.QNumberPath(_this.withPrefix("UnitsInStock"));
        _this.Discontinued = new odata_query_objects_1.QBooleanPath(_this.withPrefix("Discontinued"));
        return _this;
    }
    return QProducts_by_Category;
}(odata_query_objects_1.QueryObject));
exports.QProducts_by_Category = QProducts_by_Category;
exports.qProducts_by_Category = new QProducts_by_Category();
var QProducts_by_CategoryId = /** @class */ (function (_super) {
    __extends(QProducts_by_CategoryId, _super);
    function QProducts_by_CategoryId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CategoryName"), new odata_query_objects_1.QBooleanParam("Discontinued"), new odata_query_objects_1.QStringParam("ProductName")];
        return _this;
    }
    QProducts_by_CategoryId.prototype.getParams = function () {
        return this.params;
    };
    return QProducts_by_CategoryId;
}(odata_query_objects_1.QId));
exports.QProducts_by_CategoryId = QProducts_by_CategoryId;
var QSales_by_Category = /** @class */ (function (_super) {
    __extends(QSales_by_Category, _super);
    function QSales_by_Category() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CategoryID = new odata_query_objects_1.QNumberPath(_this.withPrefix("CategoryID"));
        _this.CategoryName = new odata_query_objects_1.QStringPath(_this.withPrefix("CategoryName"));
        _this.ProductName = new odata_query_objects_1.QStringPath(_this.withPrefix("ProductName"));
        _this.ProductSales = new odata_query_objects_1.QNumberPath(_this.withPrefix("ProductSales"));
        return _this;
    }
    return QSales_by_Category;
}(odata_query_objects_1.QueryObject));
exports.QSales_by_Category = QSales_by_Category;
exports.qSales_by_Category = new QSales_by_Category();
var QSales_by_CategoryId = /** @class */ (function (_super) {
    __extends(QSales_by_CategoryId, _super);
    function QSales_by_CategoryId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("CategoryID"), new odata_query_objects_1.QStringParam("CategoryName"), new odata_query_objects_1.QStringParam("ProductName")];
        return _this;
    }
    QSales_by_CategoryId.prototype.getParams = function () {
        return this.params;
    };
    return QSales_by_CategoryId;
}(odata_query_objects_1.QId));
exports.QSales_by_CategoryId = QSales_by_CategoryId;
var QSales_Totals_by_Amount = /** @class */ (function (_super) {
    __extends(QSales_Totals_by_Amount, _super);
    function QSales_Totals_by_Amount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SaleAmount = new odata_query_objects_1.QNumberPath(_this.withPrefix("SaleAmount"));
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.CompanyName = new odata_query_objects_1.QStringPath(_this.withPrefix("CompanyName"));
        _this.ShippedDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("ShippedDate"));
        return _this;
    }
    return QSales_Totals_by_Amount;
}(odata_query_objects_1.QueryObject));
exports.QSales_Totals_by_Amount = QSales_Totals_by_Amount;
exports.qSales_Totals_by_Amount = new QSales_Totals_by_Amount();
var QSales_Totals_by_AmountId = /** @class */ (function (_super) {
    __extends(QSales_Totals_by_AmountId, _super);
    function QSales_Totals_by_AmountId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QStringParam("CompanyName"), new odata_query_objects_1.QNumberParam("OrderID")];
        return _this;
    }
    QSales_Totals_by_AmountId.prototype.getParams = function () {
        return this.params;
    };
    return QSales_Totals_by_AmountId;
}(odata_query_objects_1.QId));
exports.QSales_Totals_by_AmountId = QSales_Totals_by_AmountId;
var QSummary_of_Sales_by_Quarter = /** @class */ (function (_super) {
    __extends(QSummary_of_Sales_by_Quarter, _super);
    function QSummary_of_Sales_by_Quarter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ShippedDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("ShippedDate"));
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.Subtotal = new odata_query_objects_1.QNumberPath(_this.withPrefix("Subtotal"));
        return _this;
    }
    return QSummary_of_Sales_by_Quarter;
}(odata_query_objects_1.QueryObject));
exports.QSummary_of_Sales_by_Quarter = QSummary_of_Sales_by_Quarter;
exports.qSummary_of_Sales_by_Quarter = new QSummary_of_Sales_by_Quarter();
var QSummary_of_Sales_by_QuarterId = /** @class */ (function (_super) {
    __extends(QSummary_of_Sales_by_QuarterId, _super);
    function QSummary_of_Sales_by_QuarterId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("OrderID")];
        return _this;
    }
    QSummary_of_Sales_by_QuarterId.prototype.getParams = function () {
        return this.params;
    };
    return QSummary_of_Sales_by_QuarterId;
}(odata_query_objects_1.QId));
exports.QSummary_of_Sales_by_QuarterId = QSummary_of_Sales_by_QuarterId;
var QSummary_of_Sales_by_Year = /** @class */ (function (_super) {
    __extends(QSummary_of_Sales_by_Year, _super);
    function QSummary_of_Sales_by_Year() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ShippedDate = new odata_query_objects_1.QDateTimeOffsetPath(_this.withPrefix("ShippedDate"));
        _this.OrderID = new odata_query_objects_1.QNumberPath(_this.withPrefix("OrderID"));
        _this.Subtotal = new odata_query_objects_1.QNumberPath(_this.withPrefix("Subtotal"));
        return _this;
    }
    return QSummary_of_Sales_by_Year;
}(odata_query_objects_1.QueryObject));
exports.QSummary_of_Sales_by_Year = QSummary_of_Sales_by_Year;
exports.qSummary_of_Sales_by_Year = new QSummary_of_Sales_by_Year();
var QSummary_of_Sales_by_YearId = /** @class */ (function (_super) {
    __extends(QSummary_of_Sales_by_YearId, _super);
    function QSummary_of_Sales_by_YearId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [new odata_query_objects_1.QNumberParam("OrderID")];
        return _this;
    }
    QSummary_of_Sales_by_YearId.prototype.getParams = function () {
        return this.params;
    };
    return QSummary_of_Sales_by_YearId;
}(odata_query_objects_1.QId));
exports.QSummary_of_Sales_by_YearId = QSummary_of_Sales_by_YearId;
