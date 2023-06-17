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
      },
      {
        text: 'JS docs',
        link: '/js/',
      }
    ],
    sidebar: {
        '/js/': [
          {
            text: 'JS Reference',
            collapsible: false,
            children: [
              'index.md',
              '1-dars', '2-dars', '3-dars', '4-dars', '5-dars', '6-dars', '7-dars',
              '8-dars', '9-dars', '10-dars', '11-dars', '12-dars', '13-dars',
              '14-dars', '15-dars', '16-dars', '17-dars', '18-dars'
            ],
          },
        ],
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