import { Suspense } from 'react'
import { Spin } from 'antd'
import HeaderBar from '../header-bar/header-bar'
import SideBar from '../side-bar/side-bar'
import RoutesList from '../../router/router'
function renderLayout() {
  return (
        <div className="w-full h-full">
            <HeaderBar/>
            <div className="mt-14 flex pb-4 mx-10rem">
                <SideBar/>
                <div className="p-10 box-border w-full h-side overflow-y-auto">
                    {/* 嵌套路由渲染位置 */}
                    {/* <Outlet /> */}
                    <Suspense fallback={<Spin/>}>
                        {RoutesList()}
                    </Suspense>
                </div>
            </div>
        </div>
  )
}

export default renderLayout
