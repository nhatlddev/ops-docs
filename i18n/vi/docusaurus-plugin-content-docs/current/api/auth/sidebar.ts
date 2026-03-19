import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/auth/auth-service",
    },
    {
      type: "category",
      label: "user-controller",
      items: [
        {
          type: "doc",
          id: "api/auth/update-user",
          label: "Update user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth/authenticate-user",
          label: "authenticateUser",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth/change-password",
          label: "Change password",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "authentication-controller",
      items: [
        {
          type: "doc",
          id: "api/auth/authenticate-user-1",
          label: "Admin sign in",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth/get-access-token",
          label: "Admin get access token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-ldap-controller",
      items: [
        {
          type: "doc",
          id: "api/auth/sync-ldap-users",
          label: "Sync ldap users",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
