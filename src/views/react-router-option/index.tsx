import { Table } from 'antd'
import { useLocation } from 'react-router-dom'
import type { ColumnsType } from 'antd/es/table'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
interface IDataType {
  name: string
  description: string
  vueFunc: string
  link: string
  key: string
}

export default function renderRouters() {
  const mdList = {
    routerOption: 'markdown/react-router-option/react-router-option.md',
    routerUse: 'markdown/react-router-option/react-router-use.md',
    routerWrapper: 'markdown/react-router-option/react-router-wrapper.md',
    routerDataMode: 'markdown/react-router-option/react-router-data-mode.md',
  }
  const location = useLocation()
  console.log(location)
  const columnsByComp: ColumnsType<IDataType> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'comp_name_key',
      render: text => <span >{text}</span>,
    },
    {
      title: '说明',
      dataIndex: 'description',
      key: 'comp_description_key',
      render: text => <span >{text}</span>,
    },
    {
      title: '对比 vue',
      dataIndex: 'vueFunc',
      key: 'comp_vueFunc_key',
      render: text => <span >{text}</span>,
    },
    {
      title: '链接',
      dataIndex: 'link',
      key: 'comp_link_key',
      render: text => <a href={text} className="text-link" target="_blank" rel="noreferrer">link</a>,
    },
  ]

  const dataByComp: Array<IDataType> = [
    {
      name: 'BrowserRouter',
      description: '用于包裹根组件，创建 history 模式路由',
      vueFunc: 'createWebHistory',
      link: 'https://reactrouter.com/en/main/router-components/browser-router',
      key: 'awdefeswfg',
    },
    {
      name: 'HashRouter',
      description: '用于包裹根组件，创建 hash 模式路由',
      vueFunc: 'createWebHashHistory',
      link: 'https://reactrouter.com/en/main/router-components/hash-router',
      key: 'awdeffgshrtseswfg',
    },
    {
      name: 'MemoryRouter',
      description: '用于 ssr，创建内存模式路由',
      vueFunc: 'createMemoryHistory',
      link: 'https://reactrouter.com/en/main/router-components/memory-router',
      key: 'awdefedzfgreagswfg',
    },
    {
      name: 'Outlet',
      description: '在嵌套路由场景找那个，用于指定子路由渲染位置',
      vueFunc: '子路由中的 RouterView',
      link: 'https://reactrouter.com/en/main/components/outlet',
      key: 'awdefserearteswfg',
    },
    {
      name: 'Await',
      description: '配合 react 的 Suspense 组件，可以实现路由异步加载效果，结合 route 组件的 errorElement，可以为路由异常做兜底',
      vueFunc: 'await router.push',
      link: 'https://reactrouter.com/en/main/components/await',
      key: 'awdefefdrghsfgaaswfg',
    },
    {
      name: 'Link',
      description: '路由 link 标签，可以进行路由跳转，并且渲染时是 a 标签，对 seo 优化时有用',
      vueFunc: 'RouterLink',
      link: 'https://reactrouter.com/en/main/components/link',
      key: 'awdrttrfsghefeswfg',
    },
    {
      name: 'Route',
      description: '路由组件，路由的渲染内容会被替换到该组件的位置，但是使用编程式路由的话，就不需要这个了',
      vueFunc: 'RouterView',
      link: 'https://reactrouter.com/en/main/route/route',
      key: 'awdefsfeaeswfg',
    },
    {
      name: 'Other',
      description: '其他组件请查看官方网站',
      vueFunc: ' - ',
      link: 'https://reactrouter.com/en/main',
      key: 'awdefsfeaeswfgOher',
    },
  ]

  const dataByApi: Array<IDataType> = [
    {
      name: 'useRouteLoaderData',
      description: '在 data router 模式下，新增了一些钩子方法，其中有一个 loader 钩子，'
        + '它将在路由进入，组件渲染前执行。useRouteLoaderData 则是获取其返回结果，通过传入路由 id ，'
        + '它能够获取当前路由所在的路由子树上任意一个路由的loader结果',
      vueFunc: 'beforeRouterEnter',
      link: 'https://reactrouter.com/en/main/hooks/use-route-loader-data',
      key: 'awdefeswfguseLoaderData',
    },
    {
      name: 'useLocation',
      description: '获取当前路由信息（key、url等）',
      vueFunc: 'this.$route / useRoute()',
      link: 'https://reactrouter.com/en/main/hooks/use-location',
      key: 'awdeffgshrtseswfguseLocation',
    },
    {
      name: 'useNavigate',
      description: '返回一个 navigate 对象方法，传入路径，可以进行路由跳转',
      vueFunc: 'this.$router.push / useRouter().push',
      link: 'https://reactrouter.com/en/main/hooks/use-navigate',
      key: 'awdefedzfgreagswfguseNavigate',
    },
    {
      name: 'useParams',
      description: '获取动态路由参数，路由使用 xxx/:paramName1/:paramName2方式传参',
      vueFunc: 'this.$route.params / useRoute().params',
      link: 'https://reactrouter.com/en/main/hooks/use-params',
      key: 'awdefserearteswfguseParams',
    },
    {
      name: 'useSearchParams',
      description: '获取和设置url搜索参数（url传参方式）,对应的是 vue-router 的 query 方式传参',
      vueFunc: 'this.$route.query / useRoute().query',
      link: 'https://reactrouter.com/en/main/hooks/use-search-params',
      key: 'awdefefdrghsfgaaswfguseSearchParams',
    },
    {
      name: 'useRoutes',
      description: '传入路由对象，生成路由，代替 Route 组件',
      vueFunc: 'createRouter',
      link: 'https://reactrouter.com/en/main/hooks/use-routes',
      key: 'awdefsfeaeswfguseRoutes',
    },
    {
      name: 'Other',
      description: '其他 hook 请查看官方网站',
      vueFunc: ' - ',
      link: 'https://reactrouter.com/en/main',
      key: 'awdefsfeaeswfgOher',
    },
  ]
  return (
    <div className="props-types">
      <Anchor tagType="h1"
              idVal="h1_for"
              className="h1-title">
        Router 配置及常用 Api
      </Anchor>

      <hr className="hr-line"/>
      <Anchor tagType="h2"
              idVal="h2_map_for"
              className="h2-title">
        基本概念
      </Anchor>
      <p className="content-txt">
        React 的生态中也有对应的路由插件能够完成前端路由，即 react-router-dom，它在 v6 版本以前，其使用方式和 vue 的 router 存在一定区别，
        我们这里主要讨论使用 v6 版本的路由。其中他同样支持三种路由模式，即 hash 路由（ createHashRouter ）， history 路由（ createBrowserRouter ）
        和 内存路由（ createMemoryRouter ，用于 ssr ）。以下我们就以 hash 路由为例，对路由使用进行入门。
      </p>

      <Anchor tagType="h2"
              idVal="h2_map_for"
              className="h2-title mt-6">
        路由配置
      </Anchor>

      <Anchor tagType="h3"
              idVal="h3_map_for_code"
              className="h3-title">
        设置路由配置
      </Anchor>
      <p className="content-txt">
        创建一个 router 的 tsx 文件，编写一个路由配置对象，将其传递给 useRoutes 来生成路由并导出，这样就可以不使用 route 组件来生成路由，
        使用代码的形式进行配置，这里与 vue 的配置方式非常相似.
      </p>
      <MarkDown url= {mdList.routerOption}/>

      <Anchor tagType="h3"
              idVal="h3_map_for_code"
              className="h3-title">
        布局组件导入路由
      </Anchor>
      <p className="content-txt">
       在布局组件中导入路由，这里由于我们用的懒加载，所以可以使用 react 提供的内置组件 Suspense 来设置加载中间页
      </p>
      <MarkDown url= {mdList.routerUse}/>

      <Anchor tagType="h3"
              idVal="h3_map_for_code"
              className="h3-title">
        根组件包裹
      </Anchor>
      <p className="content-txt">
       最后在 main.tsx 入口文件的根组件外面包裹路由组件，需要根据你使用的路由类型不同，使用不同的组件进行包裹，这里是 hash 路由，
       所以是 HashRouter。
      </p>
      <MarkDown url= {mdList.routerWrapper}/>

      <Anchor tagType="h2"
              idVal="h2_map_for"
              className="h2-title mt-6">
        新的路由配置
      </Anchor>
      <p className="content-txt">
        在 react-router-dom 的 v6.4.0 版本后提供了全新的路由创建方式，官方称其为 data router，并且提供了更多的 api 和 hooks，
        它的 api 设计更加的像 vue-router 了。
      </p>
      <MarkDown url= {mdList.routerDataMode}/>

      <Anchor tagType="h2"
              idVal="h2_map_for"
              className="h2-title mt-6">
        常用内置组件
      </Anchor>
      <Table columns={columnsByComp} dataSource={dataByComp} pagination={false}/>

      <Anchor tagType="h2"
              idVal="h2_map_for"
              className="h2-title mt-6">
        常用内置 hook
      </Anchor>
      <Table columns={columnsByComp} dataSource={dataByApi} pagination={false}/>
    </div>
  )
}
