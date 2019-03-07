import Admin from '../layout/admin'
import Login from 'pages/login'
import Error404 from 'pages/404'

export const routerConfig = [
  {
    path: '/',
    component: Admin,
    auth: true,
  }, {
    path: '/admin',
    component: Admin,
    auth: true,
  }, {
    path: '/login',
    component: Login,
  }, {
    path: '/404',
    component: Error404
  }
]