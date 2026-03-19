import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/it-device/it-device-management-service",
    },
    {
      type: "category",
      label: "admin-printer-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-update-printer",
          label: "admin update Printer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/it-device/admin-save-printer",
          label: "admin save Printer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-page-reason",
          label: "admin get page Printer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/import-excel",
          label: "Admin import printer from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-computer-validate-field",
          label: "Validate printer field for duplicates",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-detail-printer",
          label: "Admin get detail Printer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-delete-printer",
          label: "admin delete Printer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-number-printer",
          label: "Admin get number Printer in Department",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-ip-range-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-update-ip-range",
          label: "admin update ipRange",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/it-device/admin-save-ip-range",
          label: "admin save ipRange",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-page-ip-range",
          label: "admin get page ipRange",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-detail-ip-range",
          label: "Admin get detail ipRange",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-delete-ip-range",
          label: "admin delete ipRange",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-info-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-get-all-info",
          label: "admin get all info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-save-or-update-info",
          label: "admin update info",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-info",
          label: "admin get info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-delete-info",
          label: "admin delete info",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-employee-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-update-employee",
          label: "admin update employee",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/it-device/admin-save-employee",
          label: "admin save employee",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-page-employee",
          label: "admin get page employee",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-detail-employee",
          label: "Admin get detail employee",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-delete-employee",
          label: "admin delete employee",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-department-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-update-department",
          label: "admin update department",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/it-device/admin-save-department",
          label: "admin save department",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-page-reason-1",
          label: "admin get page department",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-detail-department",
          label: "Admin get detail department",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-delete-department",
          label: "admin delete department",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-computer-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-update-computer",
          label: "admin update Computer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/it-device/admin-save-computer",
          label: "admin save Computer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-page-computer",
          label: "admin get page Computer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/import-excel-1",
          label: "Admin import computer from Excel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-computer-validate-field-1",
          label: "Validate computer field for duplicates",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-detail-computer",
          label: "Admin get detail Computer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/admin-delete-computer",
          label: "admin delete Computer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/it-device/admin-get-number-computer",
          label: "Admin get number Computer in department",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-employee-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/search-page-employees",
          label: "shared search page employee",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/it-device/search-employees",
          label: "shared search employee",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-sync-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-sync-employee-email",
          label: "Admin sync employee email",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-printer-report-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-get-page-printer-report",
          label: "Get list printer for export excel",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-printer-change-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/get-page-printer-change",
          label: "get page history printer change",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-computer-report-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/admin-get-page-computer-report",
          label: "Get list computer for export excel",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-computer-change-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/get-page-computer-change",
          label: "get page history computer change",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "shared-ip-range-controller",
      items: [
        {
          type: "doc",
          id: "api/it-device/search-ip-ranges",
          label: "Search ip range",
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
          id: "api/it-device/get-department-branch",
          label: "get department by branch",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/get-all-department",
          label: "get all department",
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
          id: "api/it-device/get-dashboard-stats",
          label: "Get dashboard statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/get-dashboard-department-stats",
          label: "Get department statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/it-device/get-dashboard-charts",
          label: "Get dashboard charts data",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
