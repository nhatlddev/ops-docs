import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/vehicle/vehicle-service",
    },
    {
      type: "category",
      label: "warehouse-order-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/call-vehicle-for-pickup",
          label: "Call vehicle for pickup",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "security-order-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/update-orders",
          label: "Update orders",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vehicle/save-order",
          label: "Create order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vehicle/update-exist-date",
          label: "Update exist date",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vehicle/update-entry-date",
          label: "Update entry date",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vehicle/delete-order",
          label: "Delete order",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "qc-order-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/qc-confirmation",
          label: "QC confirmation",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "admin-warehouse-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/admin-get-page-warehouse",
          label: "Admin get page warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-update-warehouse",
          label: "Admin update warehouse",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-save-warehouse",
          label: "Admin save warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-get-detail-warehouse",
          label: "Admin get detail warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-delete-warehouse",
          label: "Admin delete warehouse",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-packing-lot-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/admin-get-page-packing-lot",
          label: "Admin get page packing lot",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-update-packing-lot",
          label: "Admin update packing lot",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-save-packing-lot",
          label: "Admin save packing lot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-get-detail-packing-lot",
          label: "Admin get detail packing lot",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-delete-packing-lot",
          label: "Admin delete packing lot",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "shared-order-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/get-page-orders",
          label: "Get page orders",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/vehicle/get-detail-order",
          label: "get detail order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/search-latest-order",
          label: "Search latest order by license plate or driver phone",
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
          id: "api/vehicle/warehouse-get-warehouse-stats",
          label: "Warehouse get warehouse stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/warehouse-get-vehicles-inside",
          label: "Warehouse get vehicles inside",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/warehouse-get-total-vehicles",
          label: "Warehouse get total vehicles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/warehouse-get-order-status-stats",
          label: "Warehouse get orders status stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/warehouse-get-in-out-today",
          label: "Warehouse get in out today",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-dashboard-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/user-get-warehouse-stats",
          label: "User get warehouse stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/user-get-vehicles-inside",
          label: "User get vehicles inside",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/user-get-total-vehicles",
          label: "User get total vehicles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/user-get-order-status-stats",
          label: "User get orders status stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/user-get-in-out-today",
          label: "User get in out today",
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
          id: "api/vehicle/get-page-warehouse",
          label: "Security get page warehouse",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/search-warehouse",
          label: "search warehouse by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/get-list-warehouse-of-user",
          label: "Get list warehouse of user",
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
          id: "api/vehicle/search-suppliers",
          label: "Search supplier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/search-materials",
          label: "Search material",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-packing-lot-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/get-list-packing-lot",
          label: "Security get list packing lot",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "security-dashboard-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/security-get-warehouse-stats",
          label: "Security get warehouse stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/security-get-vehicles-inside",
          label: "Security get vehicles inside",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/security-get-total-vehicles",
          label: "Security get total vehicles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/security-get-order-status-stats",
          label: "Security get orders status stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/security-get-in-out-today",
          label: "Security get in out today",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "qc-dashboard-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/qc-get-warehouse-stats",
          label: "QC get warehouse stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/qc-get-vehicles-inside",
          label: "QC get vehicles inside",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/qc-get-total-vehicles",
          label: "QC get total vehicles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/qc-get-order-status-stats",
          label: "QC get orders status stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/qc-get-in-out-today",
          label: "QC get in out today",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "notification-controller",
      items: [
        {
          type: "doc",
          id: "api/vehicle/get-notification-counts",
          label: "getNotificationCounts",
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
          id: "api/vehicle/admin-get-warehouse-stats",
          label: "Admin get warehouse stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-get-vehicles-inside",
          label: "Admin get vehicles inside",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-get-total-vehicles",
          label: "Admin get total vehicles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-get-order-status-stats",
          label: "Admin get orders status stats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/vehicle/admin-get-in-out-today",
          label: "Admin get in out today",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
