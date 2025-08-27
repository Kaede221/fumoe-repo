import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'FuMOE',
    tagline: '一个专为Taro 4.x 设计的组件库/hooks库',
    favicon: 'img/favicon.png',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // TODO 设置网站的生产环境链接
    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'fumoe', // Usually your GitHub org/user name.
    projectName: '@fumoe/websites', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/favicon.png',
        // 配置navbar
        navbar: {
            title: 'FuMOE',
            logo: {
                alt: 'FuMOE Logo',
                src: 'img/favicon.png',
            },
            // 顶栏的分类
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '快速开始',
                },
                {
                    type: 'doc',
                    position: 'left',
                    label: 'Hooks',
                    docId: '/category/hooks',
                },
                {
                    type: 'doc',
                    position: 'left',
                    label: '组件',
                    docId: '/category/组件',
                },
                {
                    href: 'https://github.com/Kaede221/fumoe-repo',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //     title: '文档',
                //     items: [
                //         {
                //             label: 'Tutorial',
                //             to: '/docs/intro',
                //         },
                //     ],
                // },
                {
                    title: '更多信息',
                    items: [
                        {
                            label: 'My Blog',
                            href: "https://blog.fumoe.top/"
                        },
                        {
                            label: 'My GitHub',
                            href: 'https://github.com/Kaede221',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} FuMOE. Built By KaedeShimizu.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
