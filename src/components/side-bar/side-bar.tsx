import {useNavigate,useLocation} from "react-router-dom";
const barList = [
    {name:'介绍',path:'/home'},
    {name:'🐶 props 属性传递',path:'/props'},
    {name:'🐶 PropTypes 的类型检查',path:'/propTypes'},
    {name:'state 与 生命周期',path:'/state'},
    {name:'🐶 event 事件绑定 与 响应式数据',path:'/eventState'},
    {name:'🐶 if 条件渲染',path:'/ifRender'},
    {name:'🐶 for 列表渲染',path:'/forRender'},
    {name:'props.children 插槽渲染',path:'/slot'},
    {name:'具名插槽渲染',path:'/nameSlot'},
    {name:'🐶 Render Props',path:'/renderProps'},
    {name:'lazy组件懒加载',path:'/lazyComponent'},
    {name:'context 跨层级组件props',path:'/contextProps'},
    {name:'Ref 获取组件实例 或 Dom',path:'/ref'},
    {name:'Refs & DOM',path:'/refsDom'},
    {name:'高阶组件',path:'/advanceComponent'},
    {name:'Portals 传送渲染',path:'/portals'},
    {name:'Hooks',path:'/hooks'},
    {name:'State Hook',path:'/stateHooks'},
    {name:'Effect Hook',path:'/effectHooks'},
    {name:'自定义的 Hook',path:'/customHooks'},
    {name:'React Router',path:'/ReactRouter'},
    {name:'Router 配置',path:'/ReactRouterOption'},
    {name:'Router 传参',path:'/ReactRouterQuery'},
    {name:'Router 守卫',path:'/ReactRouterGuard'},
    {name:'Router 重定向',path:'/ReactRouterRedirect'},

]

export default function renderSideBar(){
    let navigate = useNavigate();
    const route = useLocation()
    const routerSwitch = (path:string) =>{
        navigate(path)
    }
    const listItems = barList.map((val)=>{
        return (
            <li
                onClick={()=>routerSwitch(val.path)}
                className={ `mt-3 min-h-10 relative
                            leading-10 cursor-pointer px-4
                            box-border hover:shadow hover:text-green 
                            ${ route.pathname === val.path ? 'side-bar-li__active' : 'side-bar-li'}`}
                key={val.name}>
                {val.name}
            </li>
        )
    })
    return (
        <div className='min-w-70 shadow-lg h-side overflow-y-auto'>
            <ul >
                {listItems}
            </ul>
        </div>
    )
}
