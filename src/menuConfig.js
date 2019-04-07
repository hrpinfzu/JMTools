// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '退出',
    path: '/user/login',
    icon: 'yonghu',
  },
];

const asideMenuConfig = [
  {
    name: '欢迎',
    path: '/system/welcomepage',
  },
  {
    name: '打签合并',
    children: [
      {
        name: '提测打签',
        path: '/gitlab/addtags',
      },
      {
        name: '提测合并',
        path: '/gitlab/addmergerequest',
      },
      {
        name: '合并请求',
        path: '/gitlab/mergerequests',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
