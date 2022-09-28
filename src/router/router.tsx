import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../views/home/home'
const Props = lazy(() => import('../views/props'))
const PropTypes = lazy(() => import('../views/prop-types'))
const RenderProps = lazy(() => import('../views/render-props'))
const EventState = lazy(() => import('../views/event-state'))
const IfRender = lazy(() => import('../views/if-render'))
const ForRender = lazy(() => import('../views/for-render'))
const StateLifecycle = lazy(() => import('../views/lifecycle'))
const SlotChildren = lazy(() => import('../views/slot-children'))
const SlotName = lazy(() => import('../views/slot-name'))
const Lazy = lazy(() => import('../views/lazy'))
const ContextInject = lazy(() => import('../views/context-inject'))
const RefsDom = lazy(() => import('../views/refs-dom'))
const AdvanceComp = lazy(() => import('../views/advance-comp'))
const RefsForward = lazy(() => import('../views/refs-forward'))
const Portals = lazy(() => import('../views/portals'))
const HookState = lazy(() => import('../views/hook-state'))
const HookEffect = lazy(() => import('../views/hook-effect'))
const HookCustom = lazy(() => import('../views/hook-custom'))
const Redux = lazy(() => import('../views/redux'))
export const routes = [
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
    path: 'props',
    index: true,
    element: <Props />,
    meta: {
      title: 'props 属性传递',
    },
  },
  {
    path: 'propTypes',
    index: true,
    element: <PropTypes />,
    meta: {
      title: 'PropTypes 的类型检查',
    },
  },
  {
    path: 'renderProps',
    index: true,
    element: <RenderProps />,
    meta: {
      title: 'render props 作用域插槽',
    },
  },
  {
    path: 'eventState',
    index: true,
    element: <EventState />,
    meta: {
      title: 'event 事件绑定 与 state',
    },
  },
  {
    path: 'ifRender',
    index: true,
    element: <IfRender />,
    meta: {
      title: 'if 条件渲染',
    },
  },
  {
    path: 'forRender',
    index: true,
    element: <ForRender />,
    meta: {
      title: 'for 列表渲染',
    },
  },
  {
    path: 'stateLifecycle',
    index: true,
    element: <StateLifecycle />,
    meta: {
      title: '生命周期',
    },
  },
  {
    path: 'slot',
    index: true,
    element: <SlotChildren />,
    meta: {
      title: 'props.children 插槽渲染',
    },
  },
  {
    path: 'nameSlot',
    index: true,
    element: <SlotName />,
    meta: {
      title: '具名插槽渲染 name',
    },
  },

  {
    path: 'lazy',
    index: true,
    element: <Lazy />,
    meta: {
      title: 'lazy组件懒加载',
    },
  },

  {
    path: 'context',
    index: true,
    element: <ContextInject />,
    meta: {
      title: 'context 跨层级组件props',
    },
  },

  {
    path: 'refsDom',
    index: true,
    element: <RefsDom/>,
    meta: {
      title: 'Ref 获取组件实例 或 Dom',
    },
  },
  {
    path: 'advanceComponent',
    index: true,
    element: <AdvanceComp />,
    meta: {
      title: '高阶组件 HOC',
    },
  },
  {
    path: 'refsForward',
    index: true,
    element: <RefsForward />,
    meta: {
      title: 'Refs 转发',
    },
  },
  {
    path: 'portals',
    index: true,
    element: <Portals />,
    meta: {
      title: 'Portals 传送渲染',
    },
  },
  {
    path: 'stateHooks',
    index: true,
    element: <HookState />,
    meta: {
      title: 'State Hook',
    },
  },
  {
    path: 'effectHooks',
    index: true,
    element: <HookEffect />,
    meta: {
      title: 'Effect Hook',
    },
  },
  {
    path: 'customHooks',
    index: true,
    element: <HookCustom />,
    meta: {
      title: 'Custom Hook',
    },
  },
  {
    path: 'redux',
    index: true,
    element: <Redux />,
    meta: {
      title: 'Redux Toolkit 状态管理',
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
