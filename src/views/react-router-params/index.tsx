import { useLocation } from 'react-router-dom'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
export default function renderFor() {
  const mdList = {
    params: 'markdown/react-router-params/react-router-params.md',
    search: 'markdown/react-router-params/react-router-search.md',
    state: 'markdown/react-router-params/react-router-state.md',
  }
  const { state } = useLocation()
  console.log(state)
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_for"
                    className="h1-title">
              Router 传参
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for"
                    className="h2-title">
                基于 params 传参
            </Anchor>
            <p className="content-txt">
               在 react-router-dom 中和 vue 一样包含有三种留有传参方式，其中一种是 params 传参。
               这是一种拼接在 url 后面，使用子路径和冒号来标识并被识别的参数传递方式，他可以通过 hooks 的 useParams 来获取。
               它将暴露在 url 上，切刷新不会丢失。对应的 vue-router 其实就是他的动态路由匹配
            </p>
            {/* TODO CODE */}
            <Anchor tagType="h3"
                    idVal="h3_map_for_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.params}/>

          <hr className="hr-line"/>
          <Anchor tagType="h2"
                  idVal="h2_map_for"
                  className="h2-title">
            基于 search 的传参
          </Anchor>
          <p className="content-txt">
            在 react-router-dom 中和 vue 一样包含有三种留有传参方式，其中一种是 search 传参。
            这是一种拼接在 url 后面，使用 get 请求参数方式为格式的一种传参方式，他可以通过 hooks 的 useSearchParams 或 useLocation 来获取。
            它将暴露在 url 上，切刷新不会丢失。对应的 vue-router 其实就是它的 query 传参
          </p>
          {/* TODO CODE */}
          <Anchor tagType="h3"
                  idVal="h3_map_for_code"
                  className="h3-title">
            组件代码样例
          </Anchor>
          <MarkDown url= {mdList.search}/>

          <hr className="hr-line"/>
          <Anchor tagType="h2"
                  idVal="h2_map_for"
                  className="h2-title">
            基于 state 的传参
          </Anchor>
          <p className="content-txt">
            在 react-router-dom 中和 vue 一样包含有三种留有传参方式，其中一种是 state 传参。
            state 是路由暴露的配置对象，能够实现一些数据共享。他可以通过 hooks 的 useLocation 来获取。
            它不会暴露在 url 上，切刷新不会丢失。它类似于 vue-router 的路由 props 传参
          </p>
          {/* TODO CODE */}
          <Anchor tagType="h3"
                  idVal="h3_map_for_code"
                  className="h3-title">
            组件代码样例
          </Anchor>
          <MarkDown url= {mdList.state}/>
        </div>
  )
}
