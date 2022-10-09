```typescript tsx
import { Suspense } from 'react'
import { Spin } from 'antd'
import RoutesList from '../../router/router'
function renderLayout() {
  return (
        <div className="w-full h-full">
            <div className="mt-14 flex pb-4 mx-10rem">
                <div className="p-10 box-border w-full h-side overflow-y-auto">
                    {/* 嵌套路由渲染位置 */}
                    <Suspense fallback={
                      <div className="flex items-center justify-center w-full h-side">
                        <Spin/>
                      </div>
                    }>
                        {RoutesList()}
                    </Suspense>
                </div>
            </div>
        </div>
  )
}
export default renderLayout

```