import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/inventory/inventory-service",
    },
    {
      type: "category",
      label: "warehouse-supplier-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/update",
          label: "Warehouse update supplier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/save",
          label: "Warehouse save supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-page-2",
          label: "Warehouse get page supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail",
          label: "Warehouse get detail supplier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete",
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
          id: "api/inventory/update-product",
          label: "Update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/save-product",
          label: "Save product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/partial-update",
          label: "Warehouse partial update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/update-product-index",
          label: "Update product index",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-get-page-product",
          label: "Warehouse get page product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/import-excel",
          label: "Warehouse import product from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/import-excel-2",
          label: "Warehouse import product from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-product",
          label: "get detail product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete-product",
          label: "Delete product",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/search-product",
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
          id: "api/inventory/update-location",
          label: "Update location",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/save-location",
          label: "Save location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-page-location",
          label: "Get page location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-location",
          label: "Get detail location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete-location",
          label: "Delete location",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/search-location",
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
          id: "api/inventory/warehouse-restore-out-inventory-transaction",
          label: "Warehouse restore out inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-reverse-in-inventory-transaction",
          label: "Warehouse restore in inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-update-out-inventory-transaction",
          label: "Warehouse update inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-update-center-transaction",
          label: "Warehouse update inventory transaction code",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-update-in-inventory-transaction",
          label: "Warehouse update inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-in-transfer-product",
          label: "Warehouse in transfer product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-get-page-inventory-transaction",
          label: "Warehouse get page inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/import-out-excel",
          label: "Warehouse import out inventory transaction from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/save-batch-out",
          label: "Warehouse save batch OUT inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/import-in-excel",
          label: "Warehouse import in inventory transaction from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/save-batch-in",
          label: "Warehouse save batch IN inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-get-detail-inventory-transaction",
          label: "Warehouse get detail inventory transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-transaction-history",
          label: "Warehouse get history inventory transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-get-list-available-batches",
          label: "Warehouse get list available batches",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-delete-out-inventory-transaction",
          label: "Warehouse delete out inventory transaction (soft delete)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-delete-in-inventory-transaction",
          label: "Warehouse delete in inventory transaction (soft delete)",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-center-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/update-1",
          label: "Update center transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/save-1",
          label: "Save center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-page-3",
          label: "Get page center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/save-batch",
          label: "Save batch center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-1",
          label: "get detail center transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete-1",
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
          id: "api/inventory/update-2",
          label: "Warehouse update category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/save-2",
          label: "Warehouse save category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-page-4",
          label: "Warehouse get page category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-2",
          label: "Warehouse get detail category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete-2",
          label: "Warehouse delete category",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/get-tree",
          label: "Warehouse get category tree",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-all",
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
          id: "api/inventory/admin-update-warehouse",
          label: "Admin update warehouse",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-warehouse",
          label: "Admin save warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/restore-warehouse",
          label: "Admin restore warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-warehouse",
          label: "Admin get page warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-warehouse",
          label: "Admin get detail warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-warehouse",
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
          id: "api/inventory/admin-update-user-warehouse",
          label: "Admin update user warehouse",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-user-warehouse",
          label: "Admin save user warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-user-warehouse",
          label: "Admin get page user warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-user-warehouse",
          label: "Admin get detail user warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-user-warehouse",
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
          id: "api/inventory/admin-update-location",
          label: "Admin update location",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-location",
          label: "Admin save location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-location",
          label: "Admin get page location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-location",
          label: "Admin get detail location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-location",
          label: "Admin delete location",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-task-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/admin-update-task",
          label: "Admin update task",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-task",
          label: "Admin save task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-task",
          label: "Admin get page task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-task",
          label: "Admin get detail task",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-task",
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
          id: "api/inventory/admin-update-supplier",
          label: "Admin update supplier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-supplier",
          label: "Admin save supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-supplier",
          label: "Admin get page supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-supplier",
          label: "Admin get detail supplier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-supplier",
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
          id: "api/inventory/admin-update-adjustment",
          label: "Admin update stock adjustment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-stock-adjustment",
          label: "Admin save stock adjustment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-stock-adjustment",
          label: "Admin get page stock adjustment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-stock-adjustment",
          label: "Admin get detail stock adjustment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-adjustment",
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
          id: "api/inventory/admin-update-product",
          label: "Admin update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-product",
          label: "Admin save product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-product",
          label: "Admin get page product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-product",
          label: "Admin get detail product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-product",
          label: "Admin delete product",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-inventory-transaction-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/admin-restore-out-inventory-transaction",
          label: "Admin restore out inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-reverse-in-inventory-transaction",
          label: "Admin restore in inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-update-out-inventory-transaction",
          label: "Admin update out inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-update-center-transaction",
          label: "Admin update inventory transaction code",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-update-in-inventory-transaction",
          label: "Admin update in inventory transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-in-transfer-product",
          label: "Admin in transfer product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-inventory-transaction",
          label: "Admin get page inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/save-batch-out-1",
          label: "Admin save batch out inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/save-batch-in-1",
          label: "Admin save batch in inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-inventory-transaction",
          label: "Admin get detail inventory transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-transaction-history-1",
          label: "Admin get history inventory transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/warehouse-get-list-available-batches-1",
          label: "Admin get list available batches",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-out-inventory-transaction",
          label: "Admin delete out inventory transaction (soft delete)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-in-inventory-transaction",
          label: "Admin delete in inventory transaction (soft delete)",
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
          id: "api/inventory/update-3",
          label: "Update center transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/save-3",
          label: "Save center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-page-5",
          label: "Get page center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/save-batch-1",
          label: "Save batch center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-3",
          label: "get detail center transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete-3",
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
          id: "api/inventory/admin-update-category",
          label: "Admin update category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/inventory/admin-save-category",
          label: "Admin save category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-page-category",
          label: "Admin get page category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-category",
          label: "Admin get detail category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-category",
          label: "Admin delete category",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-category-tree",
          label: "Admin get category tree",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-all-categories-1",
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
          id: "api/inventory/get-page",
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
          id: "api/inventory/get-all-file-upload",
          label: "Get all file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/upload-file",
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
          id: "api/inventory/get-page-1",
          label: "Warehouse get page unit of measure",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-recycle-bin-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/restore-supplier",
          label: "Warehouse restore supplier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/restore-product",
          label: "Warehouse restore product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/restore-location",
          label: "Warehouse restore location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/restore-inventory-transaction",
          label: "Warehouse restore inventory transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/restore-center-transaction",
          label: "Warehouse restore center transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/restore-category",
          label: "Warehouse restore category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-recycle-bin-page",
          label: "Get recycle bin page (Mixed Product & Category)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/delete-supplier-permanently",
          label: "Warehouse delete supplier permanently",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/delete-product-permanently",
          label: "Warehouse delete product permanently",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/delete-location-permanently",
          label: "Warehouse delete location permanently",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/delete-center-transaction-permanently",
          label: "Warehouse delete center transaction permanently",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/delete-category-permanently",
          label: "Warehouse delete category permanently",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "warehouse-inventory-report-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/get-yearly-report",
          label: "Get year report inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-usage-report",
          label: "Get year usage report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-page-report-inventory",
          label: "Get page report inventory",
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
          id: "api/inventory/get-page-inventory",
          label: "Get page inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-out-of-date-inventory",
          label: "Get out of date inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-inventory-by-sku",
          label: "Get detail inventory by sku",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-advanced-search-inventory",
          label: "Get page advanced search inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-detail-inventory",
          label: "Get detail inventory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-out-of-date-detail",
          label: "Get out of date detail",
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
          id: "api/inventory/get-out-of-date-inventory-1",
          label: "Get out of date inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-total-transactions",
          label: "Get total transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-total-products",
          label: "Get total products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-total-inventories",
          label: "Get total inventories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-stock-levels",
          label: "Get stock levels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-recent-transactions",
          label: "Get recent transactions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-product-warehouse-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/admin-restore-product-warehouse",
          label: "Admin restore product warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-delete-product-warehouse",
          label: "Admin delete product warehouse",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-report-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/create-report",
          label: "Admin create report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-report-detail",
          label: "Admin get detail report",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/delete-report",
          label: "Admin delete report",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/inventory/get-report-list",
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
          id: "api/inventory/admin-get-page-inventory",
          label: "Admin get page inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/admin-get-detail-inventory",
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
          id: "api/inventory/get-out-of-date-inventory-2",
          label: "Get out of date inventory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/inventory/get-total-transactions-1",
          label: "Get total transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-total-products-1",
          label: "Get total products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-total-inventories-1",
          label: "Get total inventories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-stock-levels-1",
          label: "Get stock levels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-recent-transactions-1",
          label: "Get recent transactions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-audit-log-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/admin-get-page-audit-log",
          label: "Admin get page audit log",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "shared-weight-unit-controller",
      items: [
        {
          type: "doc",
          id: "api/inventory/search",
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
          id: "api/inventory/get-detail-warehouse",
          label: "Get detail warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/search-warehouse",
          label: "Search warehouse by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-list-warehouse-of-user",
          label: "Get list warehouse of user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-list-warehouse-available-for-product",
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
          id: "api/inventory/search-unit-measure",
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
          id: "api/inventory/search-supplier",
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
          id: "api/inventory/search-product-1",
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
          id: "api/inventory/search-location-1",
          label: "search location by name",
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
          id: "api/inventory/search-1",
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
          id: "api/inventory/search-categories",
          label: "Search categories by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/inventory/get-all-categories",
          label: "get all categories",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
