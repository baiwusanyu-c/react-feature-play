import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import CtxParentFunc from './demo/context-parent-func'
import CtxParentClass from './demo/context-parent-class'

export default function renderFor() {
  const mdList = {
    ctxFunc: 'markdown/context/content-func.md',
    ctxClass: 'markdown/context/content-class.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_for"
                    className="h1-title">
                context 跨层级组件props
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for"
                    className="h2-title">
                函数组件中，对 context 的基本使用
            </Anchor>
            <p className="content-txt">
                React 中同样也提供了跨组件层级的变量共享能力，对标的则是 vue 中的 provide 与 inject。
                在 vue 中 option api 是使用选项语法，在 composition api 中则是使用 provide 与 inject 语法。
                这一点，react 在设计和语法上与 vue 还是略有不同。
            </p>
            <p className="content-txt font-bold">1）使用 export const contextTheme = React.createContext(&apos;light&apos;)
                定义一个你需要传递的上下文变量并暴露出去(多个 context 其实可以把他们封装成一个对象传递)</p>
            <p className="content-txt font-bold">2）在顶层组件中的 jsx 使用 &lt;ThemeContext.Provider&gt; 包裹你模板</p>
            <p className="content-txt font-bold">2）需要注入的组件中导入暴露的 contextTheme 使用（函数组件使用的是 &lt;ThemeContext.Consumer&gt;）</p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="ThemeContext.Provider 是根据你的创建的 createContext 来的，比如你创建的变量叫 ColorContext，那就是 ColorContext.Provider"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_map_for_demo"
                    className="h3-title">
                函数组件渲染样例
            </Anchor>
            <CtxParentFunc />
            <Anchor tagType="h3"
                    idVal="h3_map_for_code"
                    className="h3-title">
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.ctxFunc}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for_key"
                    className="h2-title">
                class 类型组件中，对 context 的基本使用
            </Anchor>
            <Anchor tagType="h3"
                    idVal="h3_map_for_key_demo"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
             <CtxParentClass />
            <Anchor tagType="h3"
                    idVal="h3_map_for_key_code"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
            <MarkDown url= {mdList.ctxClass}/>
        </div>
  )
}
