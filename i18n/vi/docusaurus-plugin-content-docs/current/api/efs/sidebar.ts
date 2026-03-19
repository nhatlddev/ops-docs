import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/efs/efs-service",
    },
    {
      type: "category",
      label: "user-process-draft-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/user-update-process-draft",
          label: "User update process draft",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/user-save-process-draft",
          label: "User save process draft",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/trace-process-draft",
          label: "User trace process draft",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/count-process-draft",
          label: "User count process draft",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-detail-process-draft",
          label: "User get detail process draft",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/user-delete-process-draft",
          label: "User delete process draft",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user-substitution-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/update-workflow-substitute",
          label: "Update workflow substitute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/save-workflow-substitute",
          label: "Save workflow substitute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/update-default-substitute",
          label: "Update default substitute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/save-default-substitute",
          label: "Save default substitute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-workflow-substitutions",
          label: "Get list workflow substitute",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/get-default-substitutions",
          label: "Get list default substitute",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/delete-workflow-substitute",
          label: "Delete workflow substitute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/efs/delete-default-substitute",
          label: "Delete default substitute",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user-profile-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/update-user-profile",
          label: "Update user profile",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/update-signature",
          label: "Update signature",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/get-detail-user-profile",
          label: "Get detail user profile",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-workflow-definition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-edit-workflow-definition",
          label: "Admin edit workflow definition",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-workflow-definition",
          label: "Admin save workflow definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-overwrite-workflow-definition",
          label: "Admin overwrite workflow definition",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-checkin-workflow-definition",
          label: "Admin checkin workflow definition",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-list-workflow-definition",
          label: "Admin get list workflow definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-workflow-definition",
          label: "Admin get detail workflow definition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-workflow-definition",
          label: "Admin delete workflow definition",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-workflow-category-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-get-list-workflow-category",
          label: "Admin get list workflow category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-workflow-category",
          label: "Admin update workflow category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-workflow-category",
          label: "Admin save workflow category",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-form-sql-clause-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-form-sql-clause",
          label: "Admin update form sql clause",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-form-sql-clause",
          label: "Admin save form sql clause",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-page-sql-clause",
          label: "Admin get page sql clause",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-list-form-sql-clause",
          label: "Admin get list form sql clause",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-form-sql-clause",
          label: "Admin get detail form sql clause",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-form-sql-clause",
          label: "Admin delete form sql clause",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-mail-config-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-get-detail-mail-config",
          label: "Admin get detail mail config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-mail-config",
          label: "Admin update mail config",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-mail-config",
          label: "Admin save mail config",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-mail-notice",
          label: "Admin update mail notice",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-test-connection",
          label: "Admin test connection mail config",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-data-access-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-get-list-data-access",
          label: "Admin get list data access",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-data-access",
          label: "Admin update data access",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-data-access",
          label: "Admin save data access",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-test-connection-1",
          label: "Admin test connection data access",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-data-access",
          label: "Admin get detail data access",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-data-access",
          label: "Admin delete data access",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-position-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-position",
          label: "Admin update position",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-position",
          label: "Admin save position",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-page-position",
          label: "Admin get page position",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-position",
          label: "Admin delete position",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-position-level-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-position-level",
          label: "Admin update position level",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-position-level",
          label: "Admin save position level",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-page-position-level",
          label: "Admin get page position level",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-position-level",
          label: "Admin delete position level",
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
          id: "api/efs/admin-get-all-organization",
          label: "Admin get all organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-organization",
          label: "Admin update organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-organization",
          label: "Admin save organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-general-search",
          label: "Admin general search organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-organization",
          label: "Admin get detail organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-organization",
          label: "Amin delete organization",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-user-position-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-position-1",
          label: "Admin update position",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-remove-user-from-organization",
          label: "Admin remove user from organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-reinstate-working-date",
          label: "Admin reinstate working date",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-move-unit",
          label: "Admin move unit",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-common-info",
          label: "Admin update common info",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-position-batch",
          label: "Admin update position batch",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-page-user-position",
          label: "Admin get page user position",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-user-position",
          label: "Admin get detail user position",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-list-detail-user-position",
          label: "Admin get list detail user position",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-unit-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-unit",
          label: "Admin update organization unit",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-unit",
          label: "Admin save organization unit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-transfer-unit",
          label: "Admin transfer organization unit",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-units-for-parent",
          label: "Amin get unit for parent",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-units-for-organization",
          label: "Amin get unit for organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-organization-unit",
          label: "Amin get detail organization unit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-unit",
          label: "Amin delete unit",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-organization-unit-level-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-organization-unit-level",
          label: "Admin update organization unit level",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-organization-unit-level",
          label: "Admin save organization unit level",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-page-organization-unit-level",
          label: "Admin get page organization unit level",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-organization-unit-level",
          label: "Admin delete organization unit level",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-organization-role-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-organization-role",
          label: "Admin update organization role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-organization-role",
          label: "Admin save organization role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-page-organization-role",
          label: "Admin get page organization role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-organization-role",
          label: "Admin delete organization role",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-group-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-update-group",
          label: "Admin update group",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-group",
          label: "Admin save group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-groups-for-organization",
          label: "Amin get group for organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-group",
          label: "Amin delete group",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin-form-definition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-edit-form-definition",
          label: "Admin edit form definition",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-form-definition",
          label: "Admin save form definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-form-script",
          label: "Admin update form script",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-list-form-definition",
          label: "Admin get list form definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-list-participants",
          label: "Admin get list participant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-import-form-definition",
          label: "Admin import form definition from file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-import-form-definition-json",
          label: "Admin import form definition from JSON",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-form-definition",
          label: "Admin get detail form definition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-delete-form-definition",
          label: "Admin delete form definition",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/efs/admin-export-form-definition",
          label: "Admin export form definition",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-form-category-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-get-list-form-category",
          label: "Admin get list form category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-update-form-category",
          label: "Admin update form category",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-form-category",
          label: "Admin save form category",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-workflow-timeline-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-process-timeline",
          label: "User get timeline workflow",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-workflow-preview-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/preview-workflow",
          label: "User get preview workflow",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-process-trace-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/trace-process",
          label: "User trace process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-todo-lists",
          label: "User get todo list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/count-todo-lists",
          label: "User count todo list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/count-process",
          label: "User count process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-process-detail",
          label: "User get detail process",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/get-returnable-activities",
          label: "User get returnable activity",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/get-multi-user-processing-info",
          label: "User get multiple user processing info",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-sql-execution-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/user-execution-sql",
          label: "User execution sql",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/user-execution-raw-sql",
          label: "User execution raw sql",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-process-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/send-notification",
          label: "User send notification",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/user-regain-process",
          label: "User regain process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/user-create-new-process",
          label: "User create new process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/delegate-work-item",
          label: "User delegate work item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/user-complete-work-item",
          label: "User complete work item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/claim-work-item",
          label: "User claim work item (First Win)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/user-cancel-process",
          label: "User cancel process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/user-get-work-item-context",
          label: "User get work item context",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-process-notification-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/trace-process-notification",
          label: "User trace process notification",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/count-process-notification",
          label: "User count process notification",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-local-notice-work-item-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-local-notice-work-items",
          label: "User trace local notice work item",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "user-dashboard-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/count-processes-by-status",
          label: "User count process status summary",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/count-completed-work-items-by-month",
          label: "User complete process by month",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "workflow-definition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-page-workflow-definitions",
          label: "Get page workflow definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-list-workflow-definition",
          label: "Get page workflow definition",
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
          id: "api/efs/get-page-users",
          label: "Get page users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/search-users",
          label: "search users",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "organization-unit-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-page-organization-units",
          label: "Admin get page organization unit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/find-organization-unit-of-user",
          label: "Admin get list organization unit of user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "form-definition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-page-form-definitions",
          label: "Get page form definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-list-from-definitions",
          label: "Get list form definition",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-workflow-timeline-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-process-timeline-1",
          label: "Admin get timeline workflow",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-workflow-condition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-validate-condition",
          label: "Admin validate condition",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-sync-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-sync-user",
          label: "Admin sync user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-sync-processes",
          label: "Admin sync process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-sync-organization",
          label: "Admin sync organization",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-process-trace-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/trace-process-1",
          label: "Admin trace process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/get-process-detail-1",
          label: "Admin get detail process",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-sql-execution-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-execution-sql",
          label: "Admin execution sql",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-execution-raw-sql",
          label: "Admin execution raw sql",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-user-profile-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-save-user-profile",
          label: "Admin save user profile",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-save-employee",
          label: "Admin save employee",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-add-user-to-depts",
          label: "Admin add user to depts",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "admin-group-user-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-get-page-group-user",
          label: "Admin get page group user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-add-user-to-group",
          label: "Admin add user to group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/efs/admin-get-detail-group-user",
          label: "Admin get detail group user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/admin-remove-user-from-group",
          label: "Admin remove user from group",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user-participant-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-initial-participant",
          label: "User get initial participant",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-form-field-access-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-start-event-field-access-rules",
          label: "User get start event field access rules",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-workflow-definition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-detail-workflow-definition",
          label: "User get detail workflow definition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/efs/get-detail-workflow-definition-by-wp-id",
          label: "User get detail workflow definition by workflow package id",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-workflow-category-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/user-get-list-workflow-category",
          label: "User get list workflow category",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-favorite-process-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-favorite-process",
          label: "User trace favorite process",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-document-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/download-file",
          label: "User download document",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-form-definition-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/user-get-detail-form-definition",
          label: "User get detail form definition",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "organization-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-all-organizations",
          label: "Admin get all organization",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user-employee-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/get-detail-user-employee",
          label: "Get detail user employee",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-employee-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-get-detail-user-employee",
          label: "Admin get detail user employee",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-process-controller",
      items: [
        {
          type: "doc",
          id: "api/efs/admin-delete-process",
          label: "Admin delete process",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
