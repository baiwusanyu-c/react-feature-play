import { useLocation, useNavigate } from 'react-router-dom'
const barList = [
  { name: '介绍', path: '/introduce' },
  { name: 'props 属性传递', path: '/props' },
  { name: 'PropTypes 的类型检查', path: '/propTypes' },
  { name: '生命周期', path: '/stateLifecycle' },
  { name: 'event 事件绑定与 state', path: '/eventState' },
  { name: 'if 条件渲染', path: '/ifRender' },
  { name: 'for 列表渲染', path: '/forRender' },
  { name: 'props.children 插槽渲染', path: '/slot' },
  { name: '具名插槽渲染 name', path: '/nameSlot' },
  { name: 'Render Props', path: '/renderProps' },
  { name: 'lazy 组件懒加载', path: '/lazy' },
  { name: 'context 跨层级组件props', path: '/context' },
  { name: 'Ref 获取组件实例 或 Dom', path: '/refsDom' },
  { name: 'HOC 高阶组件', path: '/advanceComponent' },
  { name: 'Refs 转发', path: '/refsForward' },
  { name: 'Portals 传送渲染', path: '/portals' },
  { name: 'State Hook', path: '/stateHooks' },
  { name: 'Effect Hook', path: '/effectHooks' },
  { name: '自定义的 Hook', path: '/customHooks' },
  { name: 'Router 配置及常用 Api', path: '/ReactRouterOption' },
  { name: 'Router 传参', path: '/ReactRouterQuery' },
  { name: '🚧 Router 守卫', path: '/ReactRouterGuard' }, // https://juejin.cn/post/7101925921103282183
  { name: '🚧 Router 重定向', path: '/ReactRouterRedirect' },
  { name: 'Redux Toolkit', path: '/redux' },

]

export default function renderSideBar() {
  const navigate = useNavigate()
  const route = useLocation()
  const routerSwitch = (path: string) => {
    navigate(path)
  }
  const listItems = barList.map((val) => {
    return (
            <li
                onClick={() => routerSwitch(val.path)}
                className={ `mt-3 min-h-10 relative
                            leading-10 cursor-pointer px-4
                            box-border hover:shadow hover:text-green hover:font-bold
                            ${route.pathname === val.path ? 'side-bar-li__active' : 'side-bar-li'}`}
                key={val.name}>
                {val.name}
            </li>
    )
  })
  return (
        <div className="min-w-70 shadow-lg h-side overflow-y-auto">
            <ul >
                {listItems}
            </ul>
        </div>
  )
}
