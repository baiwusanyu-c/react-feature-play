import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'

export default function renderFor() {
  const mdList = {
    comp: 'markdown/react-router-guide/comp-guide.md',
    forRender: 'markdown/for-render/for-render.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_for"
                    className="h1-title">
              Router 守卫
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for"
                    className="h2-title">
               手撸一个 react 路由组件守卫
            </Anchor>
            <p className="content-txt">
               非常遗憾的是在 react-router-dom 中，并没用提供 vue-router 类似的路由守卫 api，
               包括像全局守卫 beforeEach、全局解析守卫 beforeResolve、全局后置钩子 afterEach、
               组件内更新守卫 onBeforeRouteUpdate、组件内离开守卫 onBeforeRouteLeave。
               所以我们要针对自己这些自己去实现一个路由守卫。下面是基于高阶组件封装的一个组件路由守卫
            </p>
            <Anchor tagType="h3"
                    idVal="h3_map_for_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.comp}/>

          <hr className="hr-line"/>
          <Anchor tagType="h2"
                  idVal="h2_map_for"
                  className="h2-title">
            手撸一个 react 路由组件全局守卫
          </Anchor>

        </div>
  )
}
