import {useNavigate} from "react-router-dom";
const barList = [
    {name:'介绍',path:'/home'},
    {name:'props 属性传递 Render Props',path:'/props'},
    {name:'PropTypes 的类型检查',path:'/propTypes'},
    {name:'event 事件绑定',path:'/props'},
    {name:'state 与 生命周期',path:'/props'},
    {name:'子组件的emit',path:'/props'},
    {name:'if 条件渲染',path:'/props'},
    {name:'for 列表渲染',path:'/props'},
    {name:'props.children 插槽渲染',path:'/props'},
    {name:'具名插槽渲染',path:'/props'},
    {name:'lazy组件懒加载',path:'/props'},
    {name:'context 跨层级组件props',path:'/props'},
    {name:'Ref 获取组件实例 或 Dom',path:'/props'},
    {name:'Refs & DOM',path:'/props'},
    {name:'高阶组件',path:'/props'},
    {name:'Portals 传送渲染',path:'/props'},
    {name:'Hooks',path:'/props'},
    {name:'State Hook',path:'/props'},
    {name:'Effect Hook',path:'/props'},
    {name:'定义的 Hook',path:'/props'},
    {name:'React Router',path:'/props'},
    {name:'Router 配置',path:'/props'},
    {name:'Router 传参',path:'/props'},
    {name:'Router 守卫',path:'/props'},
    {name:'Router 重定向',path:'/props'},

]

export default function renderSideBar(){
    let navigate = useNavigate();
    const routerSwitch = (path:string) =>{
        navigate(path)
    }
    const listItems = barList.map((val)=>{
        return (
            <li
                onClick={()=>routerSwitch(val.path)}
                className='mt-3 min-h-10
                            leading-8 cursor-pointer px-4
                            box-border hover:shadow '
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