import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import {Alert} from "antd";

export default function renderSlot() {
  const mdList = {
    LazyMd: 'markdown/lazy/lazy.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_slot"
                    className="h1-title">
                lazy组件懒加载
            </Anchor>

            <hr className="hr-line"/>

            <p className="content-txt">
                react 区别于 vue3 的异步组件函数 defineAsyncComponent,在 react 中是通过 lazy 方法进行组件的懒加载的，在这其中你甚至
                可以在路由中使用，实现基于路由的代码分割效果，来优化你的应用
            </p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="
                    如示例代码中所示，路由的页面组件进行懒加载配置后，需要在使用的地方使用需要 Suspense 组件包裹，否则页面空白"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_slot_func_code"
                    className="h3-title">
                代码样例
            </Anchor>
            <MarkDown url= {mdList.LazyMd}/>


        </div>
  )
}
