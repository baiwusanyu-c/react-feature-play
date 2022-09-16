import HeaderBar from '../header-bar/header-bar'
import SideBar from '../side-bar/side-bar'
import RoutesList from "../../router/router";

function renderLayout() {
    return (
        <div className="w-full h-full">
            <HeaderBar/>
            <div className='mt-12 flex mx-10rem'>
                <SideBar/>
                <div className='p-10 box-border w-full h-side overflow-y-auto'>
                    {/*嵌套路由渲染位置*/}
                    {/*<Outlet />*/}
                    {RoutesList()}
                </div>
            </div>
        </div>
    )
}

export default renderLayout
