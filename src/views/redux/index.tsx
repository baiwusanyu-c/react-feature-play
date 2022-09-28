import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
export default function renderFor() {
  const mdList = {
    dir: 'markdown/redux/dir.md',
    slice: 'markdown/redux/slice.md',
    globalImport: 'markdown/redux/global-import.md',
    use: 'markdown/redux/use.md',
    useParams: 'markdown/redux/use-params.md',
    async: 'markdown/redux/async.md',
    asyncUse: 'markdown/redux/async-use.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_redux"
                    className="h1-title">
                Redux Toolkit 状态管理
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_redux_base"
                    className="h2-title">
                基本概念
            </Anchor>
            <p className="content-txt">
                在 React 生态中同样存在像 vue 中的 vuex 或 pinia 一样的状态管理工具，而且不止一种，这里介绍的是 redux 官方推荐的工具库，redux toolkit，
                它是状态管理工具 redux 的官方工具集，上手难度低于 redux，能够满足日常业务开发使用。
            </p>

            <Anchor tagType="h2"
                    idVal="h2_redux_base_use"
                    className="h2-title my-6">
                基本使用
            </Anchor>

            <Anchor tagType="h3"
                    idVal="h3_redux_dir"
                    className="h3-title">
                建立目录结构
            </Anchor>
            <p className="content-txt">
               新建一个 store 文件夹，文件夹内创建 index.ts 和 feature 文件夹，分别是 redux 的入口和存放各个 slice。
            </p>
            <MarkDown url= {mdList.dir}/>

            <Anchor tagType="h3"
                    idVal="h3_redux_slice"
                    className="h3-title">
                创建一个 slice
            </Anchor>
            <p className="content-txt">
                feature 文件夹创建一个slice脚本，比如 countSlice.ts，每一个脚本是一个独立的 slice，可以理解为是一个子 store。
                每个 slice 会在index.ts（即 store 的入口 index.ts）中被汇总，没错，其实这个对应的就是 vuex 的模块化 modules。
            </p>
            <MarkDown url= {mdList.slice}/>

            <Anchor tagType="h3"
                    idVal="h3_redux_global"
                    className="h3-title">
                添加到全局
            </Anchor>
            <p className="content-txt">
               在项目入口文件，main.tsx 中导入 react-redux 的 Provider 组件 和 store 下的 index.ts, 使用 Provider 组件包裹项目根组件
                并传入 store。
            </p>
            <MarkDown url= {mdList.globalImport}/>

            <Anchor tagType="h3"
                    idVal="h3_redux_use"
                    className="h3-title">
                在业务组件中读取并更新使用
            </Anchor>
            <p className="content-txt">
                导入 react-redux 的 useSelector（用于选择某个 slice）, useDispatch（用于派发某个 store 的更新方法） 方法和你需要使用的某个 slice
                的相关更新方法，通过 useSelector 来获取你使用的 store ，通过 useDispatch 配合相关更新方法实现 store 变量的更新。
            </p>
            <MarkDown url= {mdList.use}/>

            <Anchor tagType="h3"
                    idVal="h3_redux_parms"
                    className="h3-title">
                参数传递
            </Anchor>
            <p className="content-txt">
                通过对 dispatch 时，给对应的更新方法传递参数，同时在对应的 store 内，reducers 中的对应更新方法，通过第二个参数 payload 接受来实现
                接受参数更新 state，这里是不是很像 vue 的 mutation 啦。
            </p>
            <MarkDown url= {mdList.useParams}/>

            <Anchor tagType="h2"
                    idVal="h2_redux_async"
                    className="h2-title my-6">
                异步使用
            </Anchor>

            <p className="content-txt">
                在某些情况下，我们可能会在 store 里面处理一些异步逻辑，这里就可以通过 createAsyncThunk 方法来创建一个 action，没错，
                它对应的是 vuex 中的 action，然后通过 extraReducers，来创建一个 builder 来处理 action，它相当于 vuex 总的 getter，能够在
                action 中的动作完成后，执行相关分副作用，具体编写如下：
            </p>
            <Anchor tagType="h3"
                    idVal="h3_redux_async_slice"
                    className="h3-title">
                定义异步 slice
            </Anchor>
            <MarkDown url= {mdList.async}/>

            <Anchor tagType="h3"
                    idVal="h3_redux_async_use"
                    className="h3-title">
                使用异步 slice
            </Anchor>
            <MarkDown url= {mdList.asyncUse}/>

        </div>
  )
}
