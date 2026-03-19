// sidebars.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import authSidebar from "./docs/api/auth/sidebar";
import vehicleSidebar from "./docs/api/vehicle/sidebar";
import inventorySidebar from "./docs/api/inventory/sidebar";
import wmsSidebar from "./docs/api/wms/sidebar";
import efsSidebar from "./docs/api/efs/sidebar";
import itDeviceSidebar from "./docs/api/it-device/sidebar";
import commonSidebar from "./docs/api/common/sidebar";
import companyRegistrationSidebar from "./docs/api/company-registration/sidebar";

// Hàm helper: tạo key duy nhất cho sidebar items (để tránh conflict i18n)
function withUniqueKeys(items: any[], prefix: string = ""): any[] {
	return items.map((item) => {
		// Trường hợp là string (id của doc)
		if (typeof item === "string") {
			const shortId = item.split("/").pop() || item;
			const safeKey = `${prefix}-${shortId}`
				.replace(/[^a-z0-9-]/gi, "-")
				.replace(/-+/g, "-")
				.toLowerCase()
				.replace(/^-+|-+$/g, "");

			return {
				type: "doc",
				id: item,
				key: safeKey,
			};
		}

		// Trường hợp đã là object (category hoặc doc đã có cấu trúc)
		if (item.type === "doc") {
			const shortId = item.id?.split("/").pop() || item.id || "unknown";
			const safeKey = `${prefix}-${shortId}`
				.replace(/[^a-z0-9-]/gi, "-")
				.replace(/-+/g, "-")
				.toLowerCase()
				.replace(/^-+|-+$/g, "");

			return {
				...item,
				key: safeKey || item.key,
			};
		}

		if (item.type === "category" && Array.isArray(item.items)) {
			const catLabelSafe = item.label
				.replace(/[^a-z0-9-]/gi, "-")
				.replace(/-+/g, "-")
				.toLowerCase()
				.replace(/^-+|-+$/g, "");

			const catPrefix = prefix ? `${prefix}-${catLabelSafe}` : catLabelSafe;

			return {
				...item,
				key: catPrefix || item.key,
				items: withUniqueKeys(item.items, catPrefix),
			};
		}

		// Các loại khác (link, generated-index, ...) giữ nguyên
		return item;
	});
}

const sidebars: SidebarsConfig = {
	tutorialSidebar: [
		{
			type: "category",
			label: "🚀 Bắt đầu nhanh",
			collapsed: false,
			items: ["intro", "getting-started/prerequisites", "getting-started/local-setup"],
		},

		{
			type: "category",
			label: "🏗️ Kiến trúc hệ thống",
			items: [
				"architecture/overview",
				"architecture/tech-stack",
				"architecture/communication",
			],
		},

		{
			type: "category",
			label: "📦 Infrastructure Services",
			description: "Các dịch vụ nền tảng điều phối hệ thống",
			items: [
				"infrastructure/api-gateway",
				"infrastructure/auth-service",
				"infrastructure/common-service",
				"infrastructure/eureka-server",
			],
		},

		{
			type: "category",
			label: "🧪 Business Microservices",
			link: {
				type: "generated-index",
				title: "Danh sách các Service",
				description: "Chi tiết logic nghiệp vụ của từng microservice.",
			},
			items: [
				"services/vehicle-service",
				"services/efs-service",
				"services/company-registration-service",
				"services/it-device-management-service",
				"services/inventory-service",
				"services/wms-service",
			],
		},

		// ────────────────────────────────────────────────
		// Phần API Reference – đã thêm key tự động
		// ────────────────────────────────────────────────
		{
			type: "category",
			label: "📖 API Reference",
			link: {
				type: "generated-index",
				title: "API Documentation",
				description: "Tài liệu chi tiết các Endpoint của từng Microservice",
			},
			items: withUniqueKeys(
				[
					{
						type: "category",
						label: "🔐 Auth Service",
						items: authSidebar,
					},
					{
						type: "category",
						label: "🚗 Vehicle Service",
						items: vehicleSidebar,
					},
					{
						type: "category",
						label: "📦 Inventory Service",
						items: inventorySidebar,
					},
					{
						type: "category",
						label: "🏭 WMS Service",
						items: wmsSidebar,
					},
					{
						type: "category",
						label: "⚡ EFS Service",
						items: efsSidebar,
					},
					{
						type: "category",
						label: "💻 IT Device Service",
						items: itDeviceSidebar,
					},
					{
						type: "category",
						label: "⚙️ Common Service",
						items: commonSidebar,
					},
					{
						type: "category",
						label: "🏢 Company Registration",
						items: companyRegistrationSidebar,
					},
				],
				"api",
			),
		},
	],
};

export default sidebars;
