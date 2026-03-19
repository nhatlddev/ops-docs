import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/company-registration/company-registration-service",
    },
    {
      type: "category",
      label: "security-work-log-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/security-check-out-work-log",
          label: "security check out work logs",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/company-registration/security-save-work-log",
          label: "security save work logs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/security-get-page-work-log",
          label: "security get page work logs",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "security-visitor-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/security-get-page-visitor",
          label: "security get page visitor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/security-update-visitor",
          label: "security update visitor",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/company-registration/security-save-visitor",
          label: "security save visitor",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/security-detail-visitor",
          label: "security detail visitor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/security-delete-visitor",
          label: "security delete visitor",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/company-registration/security-search-license-plate",
          label: "security search license plate visitor",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-reason-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/admin-update-reason",
          label: "admin update reason",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-save-reason",
          label: "admin save reason",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-get-page-reason",
          label: "admin get page reason",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-get-detail-reason",
          label: "Admin get detail reason",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-delete-reason",
          label: "admin delete reason",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-organization-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/admin-update-organization",
          label: "admin update organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-save-organization",
          label: "admin save organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-get-page-organization",
          label: "admin get page organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-get-detail-organization",
          label: "Admin get detail organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-delete-organization",
          label: "admin delete organization",
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
          id: "api/company-registration/admin-update-department",
          label: "admin update department",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-save-department",
          label: "admin save department",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-get-page-department",
          label: "security get page department",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-get-detail-department",
          label: "Admin get detail department",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-delete-department",
          label: "admin delete department",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "security-visitor-change-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/get-page-history-visitor-change",
          label: "get page history visitor change",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "shared-reason-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/get-lis-reason",
          label: "Get list reason",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/search-reason",
          label: "search reason by name",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-organization-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/get-list-organization",
          label: "all organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/find-organization",
          label: "find organization",
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
          id: "api/company-registration/get-list-department",
          label: "Get list department",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/search-reason-1",
          label: "search department by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/get-page-department",
          label: "Security get page department",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/get-all-department",
          label: "get all department",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-visitor-controller",
      items: [
        {
          type: "doc",
          id: "api/company-registration/admin-get-page-visitor",
          label: "admin get page visitor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/company-registration/admin-delete-visitor",
          label: "admin delete visitor",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
