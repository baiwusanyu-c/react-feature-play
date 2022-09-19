```typescript jsx
// router.tsx 中导入组件时
const SlotName  = lazy(()=> import('../views/slot-name'))
const Lazy  = lazy(()=> import('../views/lazy'))
// ....
const Routes = () => (
    useRoutes(routes)
)
export default Routes



// layout.tsx 引入导出的路由
// 这里需要 Suspense 组件，否则页面空白
import HeaderBar from '../header-bar/header-bar'
import SideBar from '../side-bar/side-bar'
import RoutesList from '../../router/router'
import {Suspense} from "react";
function renderLayout() {
    return (
        <div className="w-full h-full">
            <HeaderBar/>
            <div className="mt-14 flex pb-4">
                <SideBar/>
                <div className="p-10 box-border w-full h-side overflow-y-auto">
                    {/* 嵌套路由渲染位置 */}
                    {/* <Outlet /> */}
                    <Suspense fallback={<h1>Loading....</h1>}>
                        {RoutesList()}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default renderLayout

```
