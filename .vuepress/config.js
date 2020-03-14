let { generateChildren } = require('./sidebarChildrenUtils');

module.exports = {
  title: "Omar2535",
  description: "Notes",
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/', target: '_self' },
      { text: 'Notes', link: '/notes/', target: '_self'},
      { text: 'About me', link: '/about/', target: '_self' }
    ],
    sidebar: 
    {
      // sidebar for notes section
      '/notes/': generateChildren('/notes/'),
      '/blog/': [
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'images': '.vuepress/assets/images'
      }
    }
  },
};