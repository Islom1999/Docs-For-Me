import { defineUserConfig, defaultTheme, } from 'vuepress'
import { docsearchPlugin } from "@vuepress/plugin-docsearch"

export default defineUserConfig({
  lang: 'en-US',
  title: 'DOCS for me (I.A.Karimov)',
  description: 'Just playing around',
  theme: defaultTheme({
    navbar: [
      {
        text: 'NestJs docs',
        link: '/nest/',
      }
    ],
    sidebar: {
        '/nest/': [
          {
            text: 'NestJs Reference',
            collapsible: false,
            children: [
              'index.md',
              'guard.md','pipes.md', 'exceptionFilters.md', 'googleAuth.md', 
              'swagger.md', 'fileUpload.md', 'interseptions.md', 'middleware.md', 
            ],
          },
        ],
      },
  }),
  plugins: [
    docsearchPlugin({
      appId: '<APP_ID>',
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
  ],
})