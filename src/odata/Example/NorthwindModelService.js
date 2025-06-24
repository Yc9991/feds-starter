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
exports.Summary_of_Sales_by_QuarterService = exports.Sales_Totals_by_AmountCollectionService = exports.Sales_Totals_by_AmountService = exports.Sales_by_CategoryCollectionService = exports.Sales_by_CategoryService = exports.Products_by_CategoryCollectionService = exports.Products_by_CategoryService = exports.Products_Above_Average_PriceCollectionService = exports.Products_Above_Average_PriceService = exports.Product_Sales_for_1997CollectionService = exports.Product_Sales_for_1997Service = exports.Orders_QryCollectionService = exports.Orders_QryService = exports.Order_SubtotalCollectionService = exports.Order_SubtotalService = exports.Order_Details_ExtendedCollectionService = exports.Order_Details_ExtendedService = exports.InvoiceCollectionService = exports.InvoiceService = exports.Customer_and_Suppliers_by_CityCollectionService = exports.Customer_and_Suppliers_by_CityService = exports.Current_Product_ListCollectionService = exports.Current_Product_ListService = exports.Category_Sales_for_1997CollectionService = exports.Category_Sales_for_1997Service = exports.Alphabetical_list_of_productCollectionService = exports.Alphabetical_list_of_productService = exports.TerritoryCollectionService = exports.TerritoryService = exports.SupplierCollectionService = exports.SupplierService = exports.ShipperCollectionService = exports.ShipperService = exports.RegionCollectionService = exports.RegionService = exports.ProductCollectionService = exports.ProductService = exports.OrderCollectionService = exports.OrderService = exports.Order_DetailCollectionService = exports.Order_DetailService = exports.EmployeeCollectionService = exports.EmployeeService = exports.CustomerCollectionService = exports.CustomerService = exports.CustomerDemographicCollectionService = exports.CustomerDemographicService = exports.CategoryCollectionService = exports.CategoryService = exports.NorthwindModelService = void 0;
exports.Summary_of_Sales_by_YearCollectionService = exports.Summary_of_Sales_by_YearService = exports.Summary_of_Sales_by_QuarterCollectionService = void 0;
var odata_service_1 = require("@odata2ts/odata-service");
var QNorthwindModel_1 = require("./QNorthwindModel");
var NorthwindModelService = /** @class */ (function (_super) {
    __extends(NorthwindModelService, _super);
    function NorthwindModelService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NorthwindModelService.prototype.Categories = function (id) {
        var fieldName = "Categories";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new CategoryCollectionService(client, path, fieldName, options)
            : new CategoryService(client, path, new QNorthwindModel_1.QCategoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.CustomerDemographics = function (id) {
        var fieldName = "CustomerDemographics";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new CustomerDemographicCollectionService(client, path, fieldName, options)
            : new CustomerDemographicService(client, path, new QNorthwindModel_1.QCustomerDemographicId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Customers = function (id) {
        var fieldName = "Customers";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new CustomerCollectionService(client, path, fieldName, options)
            : new CustomerService(client, path, new QNorthwindModel_1.QCustomerId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Employees = function (id) {
        var fieldName = "Employees";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new EmployeeCollectionService(client, path, fieldName, options)
            : new EmployeeService(client, path, new QNorthwindModel_1.QEmployeeId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Order_Details = function (id) {
        var fieldName = "Order_Details";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Order_DetailCollectionService(client, path, fieldName, options)
            : new Order_DetailService(client, path, new QNorthwindModel_1.QOrder_DetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Orders = function (id) {
        var fieldName = "Orders";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new OrderCollectionService(client, path, fieldName, options)
            : new OrderService(client, path, new QNorthwindModel_1.QOrderId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Products = function (id) {
        var fieldName = "Products";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new ProductCollectionService(client, path, fieldName, options)
            : new ProductService(client, path, new QNorthwindModel_1.QProductId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Regions = function (id) {
        var fieldName = "Regions";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new RegionCollectionService(client, path, fieldName, options)
            : new RegionService(client, path, new QNorthwindModel_1.QRegionId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Shippers = function (id) {
        var fieldName = "Shippers";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new ShipperCollectionService(client, path, fieldName, options)
            : new ShipperService(client, path, new QNorthwindModel_1.QShipperId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Suppliers = function (id) {
        var fieldName = "Suppliers";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new SupplierCollectionService(client, path, fieldName, options)
            : new SupplierService(client, path, new QNorthwindModel_1.QSupplierId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Territories = function (id) {
        var fieldName = "Territories";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new TerritoryCollectionService(client, path, fieldName, options)
            : new TerritoryService(client, path, new QNorthwindModel_1.QTerritoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Alphabetical_list_of_products = function (id) {
        var fieldName = "Alphabetical_list_of_products";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Alphabetical_list_of_productCollectionService(client, path, fieldName, options)
            : new Alphabetical_list_of_productService(client, path, new QNorthwindModel_1.QAlphabetical_list_of_productId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Category_Sales_for_1997 = function (id) {
        var fieldName = "Category_Sales_for_1997";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Category_Sales_for_1997CollectionService(client, path, fieldName, options)
            : new Category_Sales_for_1997Service(client, path, new QNorthwindModel_1.QCategory_Sales_for_1997Id(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Current_Product_Lists = function (id) {
        var fieldName = "Current_Product_Lists";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Current_Product_ListCollectionService(client, path, fieldName, options)
            : new Current_Product_ListService(client, path, new QNorthwindModel_1.QCurrent_Product_ListId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Customer_and_Suppliers_by_Cities = function (id) {
        var fieldName = "Customer_and_Suppliers_by_Cities";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Customer_and_Suppliers_by_CityCollectionService(client, path, fieldName, options)
            : new Customer_and_Suppliers_by_CityService(client, path, new QNorthwindModel_1.QCustomer_and_Suppliers_by_CityId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Invoices = function (id) {
        var fieldName = "Invoices";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new InvoiceCollectionService(client, path, fieldName, options)
            : new InvoiceService(client, path, new QNorthwindModel_1.QInvoiceId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Order_Details_Extendeds = function (id) {
        var fieldName = "Order_Details_Extendeds";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Order_Details_ExtendedCollectionService(client, path, fieldName, options)
            : new Order_Details_ExtendedService(client, path, new QNorthwindModel_1.QOrder_Details_ExtendedId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Order_Subtotals = function (id) {
        var fieldName = "Order_Subtotals";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Order_SubtotalCollectionService(client, path, fieldName, options)
            : new Order_SubtotalService(client, path, new QNorthwindModel_1.QOrder_SubtotalId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Orders_Qries = function (id) {
        var fieldName = "Orders_Qries";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Orders_QryCollectionService(client, path, fieldName, options)
            : new Orders_QryService(client, path, new QNorthwindModel_1.QOrders_QryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Product_Sales_for_1997 = function (id) {
        var fieldName = "Product_Sales_for_1997";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Product_Sales_for_1997CollectionService(client, path, fieldName, options)
            : new Product_Sales_for_1997Service(client, path, new QNorthwindModel_1.QProduct_Sales_for_1997Id(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Products_Above_Average_Prices = function (id) {
        var fieldName = "Products_Above_Average_Prices";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Products_Above_Average_PriceCollectionService(client, path, fieldName, options)
            : new Products_Above_Average_PriceService(client, path, new QNorthwindModel_1.QProducts_Above_Average_PriceId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Products_by_Categories = function (id) {
        var fieldName = "Products_by_Categories";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Products_by_CategoryCollectionService(client, path, fieldName, options)
            : new Products_by_CategoryService(client, path, new QNorthwindModel_1.QProducts_by_CategoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Sales_by_Categories = function (id) {
        var fieldName = "Sales_by_Categories";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Sales_by_CategoryCollectionService(client, path, fieldName, options)
            : new Sales_by_CategoryService(client, path, new QNorthwindModel_1.QSales_by_CategoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Sales_Totals_by_Amounts = function (id) {
        var fieldName = "Sales_Totals_by_Amounts";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Sales_Totals_by_AmountCollectionService(client, path, fieldName, options)
            : new Sales_Totals_by_AmountService(client, path, new QNorthwindModel_1.QSales_Totals_by_AmountId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Summary_of_Sales_by_Quarters = function (id) {
        var fieldName = "Summary_of_Sales_by_Quarters";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Summary_of_Sales_by_QuarterCollectionService(client, path, fieldName, options)
            : new Summary_of_Sales_by_QuarterService(client, path, new QNorthwindModel_1.QSummary_of_Sales_by_QuarterId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    NorthwindModelService.prototype.Summary_of_Sales_by_Years = function (id) {
        var fieldName = "Summary_of_Sales_by_Years";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Summary_of_Sales_by_YearCollectionService(client, path, fieldName, options)
            : new Summary_of_Sales_by_YearService(client, path, new QNorthwindModel_1.QSummary_of_Sales_by_YearId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return NorthwindModelService;
}(odata_service_1.ODataService));
exports.NorthwindModelService = NorthwindModelService;
var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCategory, options) || this;
    }
    CategoryService.prototype.Products = function (id) {
        var fieldName = "Products";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new ProductCollectionService(client, path, fieldName, options)
            : new ProductService(client, path, new QNorthwindModel_1.QProductId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return CategoryService;
}(odata_service_1.EntityTypeServiceV4));
exports.CategoryService = CategoryService;
var CategoryCollectionService = /** @class */ (function (_super) {
    __extends(CategoryCollectionService, _super);
    function CategoryCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCategory, new QNorthwindModel_1.QCategoryId(name), options) || this;
    }
    return CategoryCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.CategoryCollectionService = CategoryCollectionService;
var CustomerDemographicService = /** @class */ (function (_super) {
    __extends(CustomerDemographicService, _super);
    function CustomerDemographicService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCustomerDemographic, options) || this;
    }
    CustomerDemographicService.prototype.Customers = function (id) {
        var fieldName = "Customers";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new CustomerCollectionService(client, path, fieldName, options)
            : new CustomerService(client, path, new QNorthwindModel_1.QCustomerId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return CustomerDemographicService;
}(odata_service_1.EntityTypeServiceV4));
exports.CustomerDemographicService = CustomerDemographicService;
var CustomerDemographicCollectionService = /** @class */ (function (_super) {
    __extends(CustomerDemographicCollectionService, _super);
    function CustomerDemographicCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCustomerDemographic, new QNorthwindModel_1.QCustomerDemographicId(name), options) || this;
    }
    return CustomerDemographicCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.CustomerDemographicCollectionService = CustomerDemographicCollectionService;
var CustomerService = /** @class */ (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCustomer, options) || this;
    }
    CustomerService.prototype.Orders = function (id) {
        var fieldName = "Orders";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new OrderCollectionService(client, path, fieldName, options)
            : new OrderService(client, path, new QNorthwindModel_1.QOrderId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    CustomerService.prototype.CustomerDemographics = function (id) {
        var fieldName = "CustomerDemographics";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new CustomerDemographicCollectionService(client, path, fieldName, options)
            : new CustomerDemographicService(client, path, new QNorthwindModel_1.QCustomerDemographicId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return CustomerService;
}(odata_service_1.EntityTypeServiceV4));
exports.CustomerService = CustomerService;
var CustomerCollectionService = /** @class */ (function (_super) {
    __extends(CustomerCollectionService, _super);
    function CustomerCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCustomer, new QNorthwindModel_1.QCustomerId(name), options) || this;
    }
    return CustomerCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.CustomerCollectionService = CustomerCollectionService;
var EmployeeService = /** @class */ (function (_super) {
    __extends(EmployeeService, _super);
    function EmployeeService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qEmployee, options) || this;
    }
    EmployeeService.prototype.Employees1 = function (id) {
        var fieldName = "Employees1";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new EmployeeCollectionService(client, path, fieldName, options)
            : new EmployeeService(client, path, new QNorthwindModel_1.QEmployeeId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    EmployeeService.prototype.Employee1 = function () {
        if (!this._Employee1) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Employee1 = new EmployeeService(client, path, "Employee1", options);
        }
        return this._Employee1;
    };
    EmployeeService.prototype.Orders = function (id) {
        var fieldName = "Orders";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new OrderCollectionService(client, path, fieldName, options)
            : new OrderService(client, path, new QNorthwindModel_1.QOrderId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    EmployeeService.prototype.Territories = function (id) {
        var fieldName = "Territories";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new TerritoryCollectionService(client, path, fieldName, options)
            : new TerritoryService(client, path, new QNorthwindModel_1.QTerritoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return EmployeeService;
}(odata_service_1.EntityTypeServiceV4));
exports.EmployeeService = EmployeeService;
var EmployeeCollectionService = /** @class */ (function (_super) {
    __extends(EmployeeCollectionService, _super);
    function EmployeeCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qEmployee, new QNorthwindModel_1.QEmployeeId(name), options) || this;
    }
    return EmployeeCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.EmployeeCollectionService = EmployeeCollectionService;
var Order_DetailService = /** @class */ (function (_super) {
    __extends(Order_DetailService, _super);
    function Order_DetailService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder_Detail, options) || this;
    }
    Order_DetailService.prototype.Order = function () {
        if (!this._Order) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Order = new OrderService(client, path, "Order", options);
        }
        return this._Order;
    };
    Order_DetailService.prototype.Product = function () {
        if (!this._Product) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Product = new ProductService(client, path, "Product", options);
        }
        return this._Product;
    };
    return Order_DetailService;
}(odata_service_1.EntityTypeServiceV4));
exports.Order_DetailService = Order_DetailService;
var Order_DetailCollectionService = /** @class */ (function (_super) {
    __extends(Order_DetailCollectionService, _super);
    function Order_DetailCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder_Detail, new QNorthwindModel_1.QOrder_DetailId(name), options) || this;
    }
    return Order_DetailCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Order_DetailCollectionService = Order_DetailCollectionService;
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder, options) || this;
    }
    OrderService.prototype.Customer = function () {
        if (!this._Customer) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Customer = new CustomerService(client, path, "Customer", options);
        }
        return this._Customer;
    };
    OrderService.prototype.Employee = function () {
        if (!this._Employee) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Employee = new EmployeeService(client, path, "Employee", options);
        }
        return this._Employee;
    };
    OrderService.prototype.Order_Details = function (id) {
        var fieldName = "Order_Details";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Order_DetailCollectionService(client, path, fieldName, options)
            : new Order_DetailService(client, path, new QNorthwindModel_1.QOrder_DetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    OrderService.prototype.Shipper = function () {
        if (!this._Shipper) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Shipper = new ShipperService(client, path, "Shipper", options);
        }
        return this._Shipper;
    };
    return OrderService;
}(odata_service_1.EntityTypeServiceV4));
exports.OrderService = OrderService;
var OrderCollectionService = /** @class */ (function (_super) {
    __extends(OrderCollectionService, _super);
    function OrderCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder, new QNorthwindModel_1.QOrderId(name), options) || this;
    }
    return OrderCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.OrderCollectionService = OrderCollectionService;
var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);
    function ProductService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProduct, options) || this;
    }
    ProductService.prototype.Category = function () {
        if (!this._Category) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Category = new CategoryService(client, path, "Category", options);
        }
        return this._Category;
    };
    ProductService.prototype.Order_Details = function (id) {
        var fieldName = "Order_Details";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new Order_DetailCollectionService(client, path, fieldName, options)
            : new Order_DetailService(client, path, new QNorthwindModel_1.QOrder_DetailId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    ProductService.prototype.Supplier = function () {
        if (!this._Supplier) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Supplier = new SupplierService(client, path, "Supplier", options);
        }
        return this._Supplier;
    };
    return ProductService;
}(odata_service_1.EntityTypeServiceV4));
exports.ProductService = ProductService;
var ProductCollectionService = /** @class */ (function (_super) {
    __extends(ProductCollectionService, _super);
    function ProductCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProduct, new QNorthwindModel_1.QProductId(name), options) || this;
    }
    return ProductCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.ProductCollectionService = ProductCollectionService;
var RegionService = /** @class */ (function (_super) {
    __extends(RegionService, _super);
    function RegionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qRegion, options) || this;
    }
    RegionService.prototype.Territories = function (id) {
        var fieldName = "Territories";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new TerritoryCollectionService(client, path, fieldName, options)
            : new TerritoryService(client, path, new QNorthwindModel_1.QTerritoryId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return RegionService;
}(odata_service_1.EntityTypeServiceV4));
exports.RegionService = RegionService;
var RegionCollectionService = /** @class */ (function (_super) {
    __extends(RegionCollectionService, _super);
    function RegionCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qRegion, new QNorthwindModel_1.QRegionId(name), options) || this;
    }
    return RegionCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.RegionCollectionService = RegionCollectionService;
var ShipperService = /** @class */ (function (_super) {
    __extends(ShipperService, _super);
    function ShipperService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qShipper, options) || this;
    }
    ShipperService.prototype.Orders = function (id) {
        var fieldName = "Orders";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new OrderCollectionService(client, path, fieldName, options)
            : new OrderService(client, path, new QNorthwindModel_1.QOrderId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return ShipperService;
}(odata_service_1.EntityTypeServiceV4));
exports.ShipperService = ShipperService;
var ShipperCollectionService = /** @class */ (function (_super) {
    __extends(ShipperCollectionService, _super);
    function ShipperCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qShipper, new QNorthwindModel_1.QShipperId(name), options) || this;
    }
    return ShipperCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.ShipperCollectionService = ShipperCollectionService;
var SupplierService = /** @class */ (function (_super) {
    __extends(SupplierService, _super);
    function SupplierService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSupplier, options) || this;
    }
    SupplierService.prototype.Products = function (id) {
        var fieldName = "Products";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new ProductCollectionService(client, path, fieldName, options)
            : new ProductService(client, path, new QNorthwindModel_1.QProductId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return SupplierService;
}(odata_service_1.EntityTypeServiceV4));
exports.SupplierService = SupplierService;
var SupplierCollectionService = /** @class */ (function (_super) {
    __extends(SupplierCollectionService, _super);
    function SupplierCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSupplier, new QNorthwindModel_1.QSupplierId(name), options) || this;
    }
    return SupplierCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.SupplierCollectionService = SupplierCollectionService;
var TerritoryService = /** @class */ (function (_super) {
    __extends(TerritoryService, _super);
    function TerritoryService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qTerritory, options) || this;
    }
    TerritoryService.prototype.Region = function () {
        if (!this._Region) {
            var _a = this.__base, client = _a.client, path = _a.path, options = _a.options;
            this._Region = new RegionService(client, path, "Region", options);
        }
        return this._Region;
    };
    TerritoryService.prototype.Employees = function (id) {
        var fieldName = "Employees";
        var _a = this.__base, client = _a.client, path = _a.path, options = _a.options, isUrlNotEncoded = _a.isUrlNotEncoded;
        return typeof id === "undefined" || id === null
            ? new EmployeeCollectionService(client, path, fieldName, options)
            : new EmployeeService(client, path, new QNorthwindModel_1.QEmployeeId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
    };
    return TerritoryService;
}(odata_service_1.EntityTypeServiceV4));
exports.TerritoryService = TerritoryService;
var TerritoryCollectionService = /** @class */ (function (_super) {
    __extends(TerritoryCollectionService, _super);
    function TerritoryCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qTerritory, new QNorthwindModel_1.QTerritoryId(name), options) || this;
    }
    return TerritoryCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.TerritoryCollectionService = TerritoryCollectionService;
var Alphabetical_list_of_productService = /** @class */ (function (_super) {
    __extends(Alphabetical_list_of_productService, _super);
    function Alphabetical_list_of_productService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qAlphabetical_list_of_product, options) || this;
    }
    return Alphabetical_list_of_productService;
}(odata_service_1.EntityTypeServiceV4));
exports.Alphabetical_list_of_productService = Alphabetical_list_of_productService;
var Alphabetical_list_of_productCollectionService = /** @class */ (function (_super) {
    __extends(Alphabetical_list_of_productCollectionService, _super);
    function Alphabetical_list_of_productCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qAlphabetical_list_of_product, new QNorthwindModel_1.QAlphabetical_list_of_productId(name), options) || this;
    }
    return Alphabetical_list_of_productCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Alphabetical_list_of_productCollectionService = Alphabetical_list_of_productCollectionService;
var Category_Sales_for_1997Service = /** @class */ (function (_super) {
    __extends(Category_Sales_for_1997Service, _super);
    function Category_Sales_for_1997Service(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCategory_Sales_for_1997, options) || this;
    }
    return Category_Sales_for_1997Service;
}(odata_service_1.EntityTypeServiceV4));
exports.Category_Sales_for_1997Service = Category_Sales_for_1997Service;
var Category_Sales_for_1997CollectionService = /** @class */ (function (_super) {
    __extends(Category_Sales_for_1997CollectionService, _super);
    function Category_Sales_for_1997CollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCategory_Sales_for_1997, new QNorthwindModel_1.QCategory_Sales_for_1997Id(name), options) || this;
    }
    return Category_Sales_for_1997CollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Category_Sales_for_1997CollectionService = Category_Sales_for_1997CollectionService;
var Current_Product_ListService = /** @class */ (function (_super) {
    __extends(Current_Product_ListService, _super);
    function Current_Product_ListService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCurrent_Product_List, options) || this;
    }
    return Current_Product_ListService;
}(odata_service_1.EntityTypeServiceV4));
exports.Current_Product_ListService = Current_Product_ListService;
var Current_Product_ListCollectionService = /** @class */ (function (_super) {
    __extends(Current_Product_ListCollectionService, _super);
    function Current_Product_ListCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCurrent_Product_List, new QNorthwindModel_1.QCurrent_Product_ListId(name), options) || this;
    }
    return Current_Product_ListCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Current_Product_ListCollectionService = Current_Product_ListCollectionService;
var Customer_and_Suppliers_by_CityService = /** @class */ (function (_super) {
    __extends(Customer_and_Suppliers_by_CityService, _super);
    function Customer_and_Suppliers_by_CityService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCustomer_and_Suppliers_by_City, options) || this;
    }
    return Customer_and_Suppliers_by_CityService;
}(odata_service_1.EntityTypeServiceV4));
exports.Customer_and_Suppliers_by_CityService = Customer_and_Suppliers_by_CityService;
var Customer_and_Suppliers_by_CityCollectionService = /** @class */ (function (_super) {
    __extends(Customer_and_Suppliers_by_CityCollectionService, _super);
    function Customer_and_Suppliers_by_CityCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qCustomer_and_Suppliers_by_City, new QNorthwindModel_1.QCustomer_and_Suppliers_by_CityId(name), options) || this;
    }
    return Customer_and_Suppliers_by_CityCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Customer_and_Suppliers_by_CityCollectionService = Customer_and_Suppliers_by_CityCollectionService;
var InvoiceService = /** @class */ (function (_super) {
    __extends(InvoiceService, _super);
    function InvoiceService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qInvoice, options) || this;
    }
    return InvoiceService;
}(odata_service_1.EntityTypeServiceV4));
exports.InvoiceService = InvoiceService;
var InvoiceCollectionService = /** @class */ (function (_super) {
    __extends(InvoiceCollectionService, _super);
    function InvoiceCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qInvoice, new QNorthwindModel_1.QInvoiceId(name), options) || this;
    }
    return InvoiceCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.InvoiceCollectionService = InvoiceCollectionService;
var Order_Details_ExtendedService = /** @class */ (function (_super) {
    __extends(Order_Details_ExtendedService, _super);
    function Order_Details_ExtendedService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder_Details_Extended, options) || this;
    }
    return Order_Details_ExtendedService;
}(odata_service_1.EntityTypeServiceV4));
exports.Order_Details_ExtendedService = Order_Details_ExtendedService;
var Order_Details_ExtendedCollectionService = /** @class */ (function (_super) {
    __extends(Order_Details_ExtendedCollectionService, _super);
    function Order_Details_ExtendedCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder_Details_Extended, new QNorthwindModel_1.QOrder_Details_ExtendedId(name), options) || this;
    }
    return Order_Details_ExtendedCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Order_Details_ExtendedCollectionService = Order_Details_ExtendedCollectionService;
var Order_SubtotalService = /** @class */ (function (_super) {
    __extends(Order_SubtotalService, _super);
    function Order_SubtotalService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder_Subtotal, options) || this;
    }
    return Order_SubtotalService;
}(odata_service_1.EntityTypeServiceV4));
exports.Order_SubtotalService = Order_SubtotalService;
var Order_SubtotalCollectionService = /** @class */ (function (_super) {
    __extends(Order_SubtotalCollectionService, _super);
    function Order_SubtotalCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrder_Subtotal, new QNorthwindModel_1.QOrder_SubtotalId(name), options) || this;
    }
    return Order_SubtotalCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Order_SubtotalCollectionService = Order_SubtotalCollectionService;
var Orders_QryService = /** @class */ (function (_super) {
    __extends(Orders_QryService, _super);
    function Orders_QryService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrders_Qry, options) || this;
    }
    return Orders_QryService;
}(odata_service_1.EntityTypeServiceV4));
exports.Orders_QryService = Orders_QryService;
var Orders_QryCollectionService = /** @class */ (function (_super) {
    __extends(Orders_QryCollectionService, _super);
    function Orders_QryCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qOrders_Qry, new QNorthwindModel_1.QOrders_QryId(name), options) || this;
    }
    return Orders_QryCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Orders_QryCollectionService = Orders_QryCollectionService;
var Product_Sales_for_1997Service = /** @class */ (function (_super) {
    __extends(Product_Sales_for_1997Service, _super);
    function Product_Sales_for_1997Service(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProduct_Sales_for_1997, options) || this;
    }
    return Product_Sales_for_1997Service;
}(odata_service_1.EntityTypeServiceV4));
exports.Product_Sales_for_1997Service = Product_Sales_for_1997Service;
var Product_Sales_for_1997CollectionService = /** @class */ (function (_super) {
    __extends(Product_Sales_for_1997CollectionService, _super);
    function Product_Sales_for_1997CollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProduct_Sales_for_1997, new QNorthwindModel_1.QProduct_Sales_for_1997Id(name), options) || this;
    }
    return Product_Sales_for_1997CollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Product_Sales_for_1997CollectionService = Product_Sales_for_1997CollectionService;
var Products_Above_Average_PriceService = /** @class */ (function (_super) {
    __extends(Products_Above_Average_PriceService, _super);
    function Products_Above_Average_PriceService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProducts_Above_Average_Price, options) || this;
    }
    return Products_Above_Average_PriceService;
}(odata_service_1.EntityTypeServiceV4));
exports.Products_Above_Average_PriceService = Products_Above_Average_PriceService;
var Products_Above_Average_PriceCollectionService = /** @class */ (function (_super) {
    __extends(Products_Above_Average_PriceCollectionService, _super);
    function Products_Above_Average_PriceCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProducts_Above_Average_Price, new QNorthwindModel_1.QProducts_Above_Average_PriceId(name), options) || this;
    }
    return Products_Above_Average_PriceCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Products_Above_Average_PriceCollectionService = Products_Above_Average_PriceCollectionService;
var Products_by_CategoryService = /** @class */ (function (_super) {
    __extends(Products_by_CategoryService, _super);
    function Products_by_CategoryService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProducts_by_Category, options) || this;
    }
    return Products_by_CategoryService;
}(odata_service_1.EntityTypeServiceV4));
exports.Products_by_CategoryService = Products_by_CategoryService;
var Products_by_CategoryCollectionService = /** @class */ (function (_super) {
    __extends(Products_by_CategoryCollectionService, _super);
    function Products_by_CategoryCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qProducts_by_Category, new QNorthwindModel_1.QProducts_by_CategoryId(name), options) || this;
    }
    return Products_by_CategoryCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Products_by_CategoryCollectionService = Products_by_CategoryCollectionService;
var Sales_by_CategoryService = /** @class */ (function (_super) {
    __extends(Sales_by_CategoryService, _super);
    function Sales_by_CategoryService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSales_by_Category, options) || this;
    }
    return Sales_by_CategoryService;
}(odata_service_1.EntityTypeServiceV4));
exports.Sales_by_CategoryService = Sales_by_CategoryService;
var Sales_by_CategoryCollectionService = /** @class */ (function (_super) {
    __extends(Sales_by_CategoryCollectionService, _super);
    function Sales_by_CategoryCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSales_by_Category, new QNorthwindModel_1.QSales_by_CategoryId(name), options) || this;
    }
    return Sales_by_CategoryCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Sales_by_CategoryCollectionService = Sales_by_CategoryCollectionService;
var Sales_Totals_by_AmountService = /** @class */ (function (_super) {
    __extends(Sales_Totals_by_AmountService, _super);
    function Sales_Totals_by_AmountService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSales_Totals_by_Amount, options) || this;
    }
    return Sales_Totals_by_AmountService;
}(odata_service_1.EntityTypeServiceV4));
exports.Sales_Totals_by_AmountService = Sales_Totals_by_AmountService;
var Sales_Totals_by_AmountCollectionService = /** @class */ (function (_super) {
    __extends(Sales_Totals_by_AmountCollectionService, _super);
    function Sales_Totals_by_AmountCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSales_Totals_by_Amount, new QNorthwindModel_1.QSales_Totals_by_AmountId(name), options) || this;
    }
    return Sales_Totals_by_AmountCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Sales_Totals_by_AmountCollectionService = Sales_Totals_by_AmountCollectionService;
var Summary_of_Sales_by_QuarterService = /** @class */ (function (_super) {
    __extends(Summary_of_Sales_by_QuarterService, _super);
    function Summary_of_Sales_by_QuarterService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSummary_of_Sales_by_Quarter, options) || this;
    }
    return Summary_of_Sales_by_QuarterService;
}(odata_service_1.EntityTypeServiceV4));
exports.Summary_of_Sales_by_QuarterService = Summary_of_Sales_by_QuarterService;
var Summary_of_Sales_by_QuarterCollectionService = /** @class */ (function (_super) {
    __extends(Summary_of_Sales_by_QuarterCollectionService, _super);
    function Summary_of_Sales_by_QuarterCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSummary_of_Sales_by_Quarter, new QNorthwindModel_1.QSummary_of_Sales_by_QuarterId(name), options) || this;
    }
    return Summary_of_Sales_by_QuarterCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Summary_of_Sales_by_QuarterCollectionService = Summary_of_Sales_by_QuarterCollectionService;
var Summary_of_Sales_by_YearService = /** @class */ (function (_super) {
    __extends(Summary_of_Sales_by_YearService, _super);
    function Summary_of_Sales_by_YearService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSummary_of_Sales_by_Year, options) || this;
    }
    return Summary_of_Sales_by_YearService;
}(odata_service_1.EntityTypeServiceV4));
exports.Summary_of_Sales_by_YearService = Summary_of_Sales_by_YearService;
var Summary_of_Sales_by_YearCollectionService = /** @class */ (function (_super) {
    __extends(Summary_of_Sales_by_YearCollectionService, _super);
    function Summary_of_Sales_by_YearCollectionService(client, basePath, name, options) {
        return _super.call(this, client, basePath, name, QNorthwindModel_1.qSummary_of_Sales_by_Year, new QNorthwindModel_1.QSummary_of_Sales_by_YearId(name), options) || this;
    }
    return Summary_of_Sales_by_YearCollectionService;
}(odata_service_1.EntitySetServiceV4));
exports.Summary_of_Sales_by_YearCollectionService = Summary_of_Sales_by_YearCollectionService;
