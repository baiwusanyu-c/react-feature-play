```typescript tsx
import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../views/home'
// lazy 懒加载
const Introduction = lazy(() => import('../views/introduction'))
const Page404 = lazy(() => import('../views/Page404'))
export const routes = [
  // 使用 navigate 组件进行重定向  
  {
    path: '/',
    index: true,
    element: <Navigate to= "/home"/>,
  },
  {
    path: 'home',
    index: true,
    element: <Home />,
    meta: {
      title: '首页',
    },
  },
  {
    path: 'introduce',
    index: true,
    element: <Introduction />,
    meta: {
      title: '介绍',
    },
  },
  // 无效匹配 404
  {
        path: '*',
        element: <Page404 />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    },
]
// 导出路由生成方法
const Routes = () => (
  useRoutes(routes)
)
export default Routes

```