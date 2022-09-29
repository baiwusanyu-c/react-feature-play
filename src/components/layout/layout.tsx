import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { Spin } from 'antd'
import { useLocation } from 'react-router-dom'
import HeaderBar from '../header-bar/header-bar'
import SideBar from '../side-bar/side-bar'
import RoutesList from '../../router/router'
function renderLayout() {
  const route = useLocation()
  const isShow = (node: ReactElement) => {
    return route.pathname === '/home' ? <></> : node
  }
  return (
        <div className="w-full h-full">
          {<HeaderBar/>}
            <div className="mt-14 flex pb-4 mx-10rem">
                {isShow(<SideBar/>)}
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
