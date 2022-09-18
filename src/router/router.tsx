import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../views/home/home'
import Props from '../views/props'
import PropTypes from '../views/prop-types'
import RenderProps from '../views/render-props'
import EventState from '../views/event-state'
import IfRender from '../views/if-render'
import ForRender from '../views/for-render'
import StateLifecycle from '../views/lifecycle'
import SlotChildren from '../views/slot-children'
import SlotName from '../views/slot-name'
export const routes = [
  {
    path: '/',
    element: <Navigate to= "/home"/>,
  },
  {
    path: 'home',
    element: <Home />,
    meta: {
      title: '首页',
    },
  },
  {
    path: 'props',
    element: <Props />,
    meta: {
      title: 'props 属性传递',
    },
  },
  {
    path: 'propTypes',
    element: <PropTypes />,
    meta: {
      title: 'PropTypes 的类型检查',
    },
  },
  {
    path: 'renderProps',
    element: <RenderProps />,
    meta: {
      title: 'render props 作用域插槽',
    },
  },
  {
    path: 'eventState',
    element: <EventState />,
    meta: {
      title: 'event 事件绑定 与 state',
    },
  },
  {
    path: 'ifRender',
    element: <IfRender />,
    meta: {
      title: 'if 条件渲染',
    },
  },
  {
    path: 'forRender',
    element: <ForRender />,
    meta: {
      title: 'for 列表渲染',
    },
  },
  {
    path: 'stateLifecycle',
    element: <StateLifecycle />,
    meta: {
      title: '生命周期',
    },
  },
  {
    path: 'slot',
    element: <SlotChildren />,
    meta: {
      title: 'props.children 插槽渲染',
    },
  },
  {
    path: 'nameSlot',
    element: <SlotName />,
    meta: {
      title: '具名插槽渲染 name',
    },
  },

  /* {
        path: '*',
        element: <Page404 />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    }, */
]
const Routes = () => (
  useRoutes(routes)
)
export default Routes
