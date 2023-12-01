export default {
  base:'/blog/',
  title: 'kitty', //站点标题
  description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KaiSheng1998/Home-Page-Of-Cosmetics' }
    ],
    nav: [{
      text: '首页',
      link: '/' // 表示docs/index.md
    },
    {
      text:'面试题',
      items:[
        {
          text:'vue',
          link:'/interview/vue/index'
        }
      ]
    },
    {
      text: 'node',
      items: [
        {
          text: 'nvm管理node',
          link: 'https://www.cnblogs.com/DeerLin/p/14425956.html' // 表示docs/column/Travel/index.md
        },
      ]
    },
    {
      text: 'css',
      items: [
        {
          text: '重难点',
          link: '/javascript/diffict/' // 表示docs/column/Travel/index.md
        },
      ]
    },
    {
      text: 'javascript',
      items: [
        {
          text: '重难点',
          link: '/javascript/diffict' // 表示docs/column/Travel/index.md
        },
        {
          text: '八股文',
          link: '/javascript/eightPart' // 表示docs/column/Growing/index.md
        }
      ]
    },
    ],
    sidebar:{//sideBar值改成一个对象，对象的key是一个路径，只有包含这个路径的才会出现侧边栏。所以我们将nav的配置中的guild改成博客，同时路径指向我们的articles下的markdown文件
      "/interview/vue/":[
        {
          text:'性能优化系列之页面解析处理优化',
          link:'/interview/vue/性能优化系列之页面解析处理优化'
        }
      ]
    }
  },

}