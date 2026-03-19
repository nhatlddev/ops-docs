import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "My Site",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	markdown: {
		mermaid: true,
	},

	themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-openapi-docs"],
	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en", "vi"],
		localeConfigs: {
            en: { label: "English" },
			vi: { label: "Tiếng Việt" },
		},
	},

	plugins: [
		[
			"docusaurus-plugin-openapi-docs",
			{
				id: "api",
				docsPluginId: "classic",
				config: {
					auth: {
						specPath: "openapi-specs/auth.json",
						outputDir: "docs/api/auth",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					common: {
						specPath: "openapi-specs/common.json",
						outputDir: "docs/api/common",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					vehicle: {
						specPath: "openapi-specs/vehicle.json",
						outputDir: "docs/api/vehicle",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					inventory: {
						specPath: "openapi-specs/inventory.json",
						outputDir: "docs/api/inventory",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					wms: {
						specPath: "openapi-specs/wms.json",
						outputDir: "docs/api/wms",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					efs: {
						specPath: "openapi-specs/efs.json",
						outputDir: "docs/api/efs",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					"it-device": {
						specPath: "openapi-specs/it-device.json",
						outputDir: "docs/api/it-device",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
					"company-registration": {
						specPath: "openapi-specs/company-registration.json",
						outputDir: "docs/api/company-registration",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag",
						},
					},
				},
			},
		],
		() => ({
			name: "custom-webpack-config",
			configureWebpack() {
				return {
					resolve: {
						fallback: {
							path: require.resolve("path-browserify"),
						},
					},
				};
			},
		}),
	],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					docItemComponent: "@theme/ApiItem",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		mermaid: {
			theme: {
				light: "neutral",
				dark: "forest",
			},
		},
		openapi: {
			fullWidth: true,
			showStatusCodeExample: true,
			theme: "classic",
		},
		languageTabs: [
			{ highlight: "bash", language: "curl", logoClass: "bash" },
			{ highlight: "java", language: "java", logoClass: "java" },
			{ highlight: "javascript", language: "javascript", logoClass: "js" },
		],
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "My Site",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutorial",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/facebook/docusaurus",
					label: "GitHub",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "X",
							href: "https://x.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/facebook/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["java", "bash", "json"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
