import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/common/common-service",
    },
    {
      type: "category",
      label: "admin-user-controller",
      items: [
        {
          type: "doc",
          id: "api/common/admin-update-user",
          label: "Admin update users",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/admin-save-user",
          label: "Admin save users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-update-user-by-module",
          label: "Admin update users by module",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/admin-search-users-by-module",
          label: "Admin search users by module",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-page-users-by-module",
          label: "Admin get page users by module",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-page-users",
          label: "Admin get page users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-detail-user",
          label: "Admin get detail users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-delete-user",
          label: "Admin delete users",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/common/admin-delete-user-by-module",
          label: "Admin delete users by module",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-role-controller",
      items: [
        {
          type: "doc",
          id: "api/common/admin-get-all-role",
          label: "Admin get all role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-update-role",
          label: "Admin update role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/admin-save-role",
          label: "Admin save role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-page-role-by-module",
          label: "Admin get page role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-get-detail-role",
          label: "Admin get detail role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-delete-role",
          label: "Admin delete role",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/common/admin-get-page-role",
          label: "Admin get page role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-delete-role-by-module",
          label: "Admin delete role by module",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-module-controller",
      items: [
        {
          type: "doc",
          id: "api/common/admin-get-all-module",
          label: "Admin get all module",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-update-module",
          label: "Admin update module",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/admin-save-module",
          label: "Admin save module",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-detail-module",
          label: "Admin get detail module",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-delete-module",
          label: "Admin delete module",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/common/get-page-branch-1",
          label: "Admin get page module",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-language-controller",
      items: [
        {
          type: "doc",
          id: "api/common/admin-edit-language",
          label: "Admin edit language",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/admin-save-language",
          label: "Admin save language",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-page-language",
          label: "Admin get page language",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-get-detail-language",
          label: "Admin get detail language",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/admin-get-list-language",
          label: "Admin get list language",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-branch-controller",
      items: [
        {
          type: "doc",
          id: "api/common/admin-update-branch",
          label: "Admin update branch",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/admin-save-branch",
          label: "Admin save branch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/admin-delete-branch",
          label: "Admin delete branch",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-allowed-origin-controller",
      items: [
        {
          type: "doc",
          id: "api/common/update",
          label: "Update allowed origin",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/common/save",
          label: "Save allowed origin",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/get-page",
          label: "Get page allowed origin",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/common/get-detail",
          label: "Get detail allowed origin",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/delete",
          label: "Delete allowed origin",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "shared-user-controller",
      items: [
        {
          type: "doc",
          id: "api/common/get-page-users-by-module",
          label: "Get page users by module",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-controller",
      items: [
        {
          type: "doc",
          id: "api/common/get-detail-users",
          label: "Get detail user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "language-controller",
      items: [
        {
          type: "doc",
          id: "api/common/get-list-language",
          label: "Get list language",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-file-controller",
      items: [
        {
          type: "doc",
          id: "api/common/get-file",
          label: "Get file",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "shared-branch-controller",
      items: [
        {
          type: "doc",
          id: "api/common/get-list-branch",
          label: "Get list branch",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/get-detail-branch",
          label: "Get detail branch",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/get-list-branch-by-user",
          label: "Get list branch by user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/get-page-branch",
          label: "Get page branch",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "module-controller",
      items: [
        {
          type: "doc",
          id: "api/common/get-list-modules",
          label: "Get list module",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/common/get-list-modules-available-for-user",
          label: "Get list module available for users",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
