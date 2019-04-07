// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';

import OrderList from './pages/OrderList';

import AddOrder from './pages/AddOrder';
import AddTags from './pages/AddTags';
import AddMergeRequest from './pages/AddMergeRequest';
import MergeRequests from './pages/MergeRequests';
import WelcomePage from './pages/WelcomePage';
import AddGoods from './pages/AddGoods';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/order/list',
    component: OrderList,
  },
  {
    path: '/add/order',
    component: AddOrder,
  },
  {
    path: '/add/goods',
    component: AddGoods,
  },
  {
    path: '/gitlab/addtags',
    component: AddTags,
  },
  {
    path: '/gitlab/addmergerequest',
    component: AddMergeRequest,
  },
  {
    path: '/gitlab/mergerequests',
    component: MergeRequests,
  },
  {
    path: '/system/welcomepage',
    component: WelcomePage,
  },
];

export default routerConfig;
