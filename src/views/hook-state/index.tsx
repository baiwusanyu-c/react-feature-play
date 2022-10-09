import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import StateDemo from './demo/state-demo'

export default function renderFor() {
  const mdList = {
    stateDemo: 'markdown/hook-state/state-demo.md',
    use: 'markdown/hook-state/use.md',
    declare: 'markdown/hook-state/declare.md',
    update: 'markdown/hook-state/update.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_state"
                    className="h1-title">
                State Hook
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_state_base"
                    className="h2-title">
                基本概念
            </Anchor>
            <p className="content-txt">
                React 的 hook，其实是一种类似于切入 react 组件逻辑的一种 api，它能够让你在 react 的函数组件中使用 class 类型组件的 state 以及 react
                 的其他特性，它与 vue 的 composition api 非常相似，二者都能够将一些 api 方法从组件本身中抽离，在组件逻辑复用上具有优势。
            </p>
            <Anchor tagType="h2"
                    idVal="h2_state_declare"
                    className="h2-title mt-6">
                state 声明
            </Anchor>
            <p className="content-txt">
                通过 useState 进行 state 声明，并且支持泛型来定义声明的类型.
            </p>
            <MarkDown url= {mdList.declare}/>
            <Anchor tagType="h2"
                    idVal="h2_state_use"
                    className="h2-title mt-6">
                state 读取
            </Anchor>
            <p className="content-txt">
                通过 useState 进行 state 声明后，返回的参数中，数组解构第一个参数即我们声明的变量，你可以在组件任何地方使用
            </p>
            <MarkDown url= {mdList.use}/>
            <Anchor tagType="h2"
                    idVal="h2_state_update"
                    className="h2-title mt-6">
                state 更新
            </Anchor>
            <p className="content-txt">
                通过 useState 进行 state 声明后，返回的参数中，数组解构第二个参数即我们更新方法，调用它可以更新 state，而对于对象的更新，
                需要用原对象的其他字段进行结构赋值，否则仅仅传入你需要更新的字段，会导致其他字段失效
            </p>
            <MarkDown url= {mdList.update}/>
            <Anchor tagType="h3"
                    idVal="h3_state_md"
                    className="h3-title">
                组件渲染样例
            </Anchor>
            <StateDemo />
            <Anchor tagType="h3"
                    idVal="h3_state_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.stateDemo}/>
        </div>
  )
}
