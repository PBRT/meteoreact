module.exports = {
  routes: [
    {
      name: 'home',
      filePath: './pages/home/home.jsx',
      url: '/home',
      childs: [],
      id: 0
    },{
      name: 'about',
      filePath: './pages/about/about.jsx',
      url: '/about',
      childs: [],
      id: 1
    },{
      name: 'login',
      filePath: './pages/login/login.jsx',
      url: '/login',
      childs: [],
      id: 2
    },{
      name: 'contact',
      filePath: './pages/contact/contact.jsx',
      url: '/contact',
      childs: [],
      id: 3
    },
  ],
  defaultRoute: {
    name: 'home',
    filePath: './pages/home/home.jsx',
    url: '/home',
    childs: []
  },
}
