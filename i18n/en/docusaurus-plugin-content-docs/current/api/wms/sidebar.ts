import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/wms/wms-service",
    },
    {
      type: "category",
      label: "warehouse-supplier-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/update",
          label: "Warehouse update supplier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/save",
          label: "Warehouse save supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-page-2",
          label: "Warehouse get page supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail",
          label: "Warehouse get detail supplier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete",
          label: "Warehouse delete supplier",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-product-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/update-product",
          label: "Update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/save-product",
          label: "Save product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/warehouse-get-page-product",
          label: "Warehouse get page product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/import-excel",
          label: "Warehouse import product from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/import-excel-2",
          label: "Warehouse import product from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-product",
          label: "get detail product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete-product",
          label: "Delete product",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/search-product",
          label: "search product by name",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-location-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/update-location",
          label: "Update location",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/save-location",
          label: "Save location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-page-location",
          label: "Get page location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-location",
          label: "Get detail location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete-location",
          label: "Delete location",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/search-location",
          label: "search location by name",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-inventory-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/warehouse-update-out-inventory-transaction",
          label: "Warehouse update inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/warehouse-update-in-inventory-transaction",
          label: "Warehouse update inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/warehouse-get-page-inventory-transaction",
          label: "Warehouse get page inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/import-out-excel",
          label: "Warehouse import out inventory transaction from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/save-batch-out",
          label: "Warehouse save batch OUT inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/import-in-excel",
          label: "Warehouse import in inventory transaction from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/save-batch-in",
          label: "Warehouse save batch IN inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/warehouse-get-detail-inventory-transaction",
          label: "Warehouse get detail inventory transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/warehouse-delete-inventory-transaction",
          label: "Warehouse delete inventory transaction (soft delete)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/warehouse-get-list-available-batches",
          label: "Warehouse get list available batches",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-center-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/update-1",
          label: "Update center transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/save-1",
          label: "Save center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-page-3",
          label: "Get page center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/save-batch",
          label: "Save batch center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-1",
          label: "get detail center transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete-1",
          label: "delete center transaction",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-category-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/update-2",
          label: "Warehouse update category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/save-2",
          label: "Warehouse save category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-page-4",
          label: "Warehouse get page category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-2",
          label: "Warehouse get detail category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete-2",
          label: "Warehouse delete category",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/get-tree",
          label: "Warehouse get category tree",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-all",
          label: "Warehouse get all categories",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-warehouse-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-warehouse",
          label: "Admin update warehouse",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-warehouse",
          label: "Admin save warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-warehouse",
          label: "Admin get page warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-warehouse",
          label: "Admin get detail warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-warehouse",
          label: "Admin delete warehouse",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-user-warehouse-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-user-warehouse",
          label: "Admin update user warehouse",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-user-warehouse",
          label: "Admin save user warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-user-warehouse",
          label: "Admin get page user warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-user-warehouse",
          label: "Admin get detail user warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-user-warehouse",
          label: "Admin delete user warehouse",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-location-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-location",
          label: "Admin update location",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-location",
          label: "Admin save location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-location",
          label: "Admin get page location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-location",
          label: "Admin get detail location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-location",
          label: "Admin delete location",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/admin-generate-location-qr-code-image",
          label: "Admin generate QR code for location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-generate-location-barcode-image",
          label: "Admin generate Barcode for location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-all-location-by-warehouse",
          label: "Admin get all location by warehouse",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-task-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-task",
          label: "Admin update task",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-task",
          label: "Admin save task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-task",
          label: "Admin get page task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-task",
          label: "Admin get detail task",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-task",
          label: "Admin delete task",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-supplier-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-supplier",
          label: "Admin update supplier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-supplier",
          label: "Admin save supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-supplier",
          label: "Admin get page supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-supplier",
          label: "Admin get detail supplier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-supplier",
          label: "Admin delete supplier",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-stock-adjustment-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-adjustment",
          label: "Admin update stock adjustment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-stock-adjustment",
          label: "Admin save stock adjustment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-stock-adjustment",
          label: "Admin get page stock adjustment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-stock-adjustment",
          label: "Admin get detail stock adjustment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-adjustment",
          label: "Admin delete stock adjustment (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-product-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-product",
          label: "Admin update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-product",
          label: "Admin save product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-product",
          label: "Admin get page product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-product",
          label: "Admin get detail product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-product",
          label: "Admin delete product",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-list-product-belong-location",
          label: "Admin get list product belong location",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-inventory-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-out-inventory-transaction",
          label: "Admin update out inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-update-in-inventory-transaction",
          label: "Admin update in inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-inventory-transaction",
          label: "Admin get page inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/save-batch-out-1",
          label: "Admin save batch out inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/save-batch-in-1",
          label: "Admin save batch in inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-inventory-transaction",
          label: "Admin get detail inventory transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-inventory-transaction",
          label: "Admin delete inventory transaction (soft delete)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-list-location-quantity",
          label: "Admin get list location quantity",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-inventory-transaction-by-batch-code",
          label: "Admin get detail inventory transaction by batch code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-list-available-batches",
          label: "Admin get list available batches",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-department-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-department",
          label: "Admin update department",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-department",
          label: "Admin save department",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-department",
          label: "Admin get page department",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-department",
          label: "Admin get detail department",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-department",
          label: "Admin delete department",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-center-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/update-3",
          label: "Update center transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/save-3",
          label: "Save center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-page-5",
          label: "Get page center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/save-batch-1",
          label: "Save batch center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-3",
          label: "get detail center transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete-3",
          label: "delete center transaction",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-category-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-update-category",
          label: "Admin update category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/wms/admin-save-category",
          label: "Admin save category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-category",
          label: "Admin get page category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-category",
          label: "Admin get detail category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-delete-category",
          label: "Admin delete category",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-category-tree",
          label: "Admin get category tree",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/admin-search-categories",
          label: "Admin search categories by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-all-categories-1",
          label: "Admin get all categories",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-weight-unit-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-page",
          label: "Warehouse get page weight unit",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-file-upload-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-all-file-upload",
          label: "Get all file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/upload-file",
          label: "upload file",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-unit-of-measure-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-page-1",
          label: "Warehouse get page unit of measure",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-inventory-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-page-inventory",
          label: "Get page inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-out-of-date-inventory",
          label: "Get out of date inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-inventory-by-sku",
          label: "Get detail inventory by sku",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-detail-inventory",
          label: "Get detail inventory",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-dashboard-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-out-of-date-inventory-1",
          label: "Get out of date inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-total-transactions",
          label: "Get total transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-total-products",
          label: "Get total products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-total-inventories",
          label: "Get total inventories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-stock-levels",
          label: "Get stock levels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-recent-transactions",
          label: "Get recent transactions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-transfer-location-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/transfer-location",
          label: "Admin transfer location",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-transfer-request-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/create-request",
          label: "Create a new transfer location request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-transfer-location-request",
          label: "Admin get page transfer location request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/confirm-request",
          label: "Confirm and execute a transfer request by scanning batch and location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-transfer-location-request",
          label: "Admin get detail transfer location request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-request-qr-code",
          label: "Admin generate QR code image for a transfer location request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-request-barcode",
          label: "Admin generate barcode image for a transfer location request",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-stock-out-request-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/create-request-1",
          label: "Admin create a new stock-out request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-stock-out-request",
          label: "Admin get page stock out requests",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/confirm-by-scan",
          label: "Admin confirm a stock-out request by scanning codes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-stock-out-request",
          label: "Admin get detail stock out request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-request-qr-code-1",
          label: "Admin generate QR code for a stock-out request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-request-barcode-1",
          label: "Admin generate barcode image for a stock-out request",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-stock-in-request-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/create-request-2",
          label: "Admin create a new stock-in request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-page-stock-in-request",
          label: "Admin get page stock in requests",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/confirm-by-scan-1",
          label: "Admin confirm a stock-in request by scanning codes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-stock-in-request",
          label: "Admin get detail stock in request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-request-qr-code-2",
          label: "Admin generate QR code image for a stock-in request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-request-barcode-2",
          label: "Admin generate barcode image for a stock-in request",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-report-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/create-report",
          label: "Admin create report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-report-detail",
          label: "Admin get detail report",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/delete-report",
          label: "Admin delete report",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/wms/get-report-list",
          label: "Admin get page report",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-inventory-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/admin-get-page-inventory",
          label: "Admin get page inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/admin-get-detail-inventory",
          label: "Admin get detail inventory",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-dashboard-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-out-of-date-inventory-2",
          label: "Get out of date inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/wms/get-total-transactions-1",
          label: "Get total transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-total-products-1",
          label: "Get total products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-total-inventories-1",
          label: "Get total inventories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-stock-levels-1",
          label: "Get stock levels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-recent-transactions-1",
          label: "Get recent transactions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-weight-unit-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search",
          label: "search weight unit",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-warehouse-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/get-detail-warehouse",
          label: "Get detail warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/search-warehouse",
          label: "Search warehouse by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-list-warehouse-of-user",
          label: "Get list warehouse of user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-list-warehouse-available-for-product",
          label: "Get list warehouse available for product",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-unit-measure-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-unit-measure",
          label: "search unit measure",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-supplier-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-supplier",
          label: "search supplier",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-product-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-product-1",
          label: "search product by name",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-location-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-location-1",
          label: "search location by name",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-department-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-department",
          label: "search department",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-center-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-1",
          label: "search center transaction",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-category-controller",
      items: [
        {
          type: "doc",
          id: "api/wms/search-categories",
          label: "Search categories by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/wms/get-all-categories",
          label: "get all categories",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
