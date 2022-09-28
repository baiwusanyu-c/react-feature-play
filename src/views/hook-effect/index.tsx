import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'

export default function renderFor() {
  const mdList = {
    call: 'markdown/hook-effect/call.md',
    clear: 'markdown/hook-effect/clear.md',
    use: 'markdown/hook-effect/use.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_effect"
                    className="h1-title">
                State Hook
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_effect_base"
                    className="h2-title">
                基本概念
            </Anchor>
            <p className="content-txt">
                Effect Hook 可以让你在函数组件中执行副作用操作,如果你想在 React 更新 DOM 之后运行一些额外的代码，就可以使用 Effect Hook 实现，
                从效果上它更像 class 类型组件中的 componentDidMount 和 componentDidUpdate，能改在 DOM 初始化完成和更新后被执行。
            </p>
            <div className="my-6">
                <Alert
                    message="Warning"
                    description="在默认情况下，Effect Hook 会在每次 DOM 发生变换后执行，此时 React 会清除之前的 effect 自动重新创建一个 effect"
                    type="warning"
                    showIcon
                />
            </div>

            <MarkDown url= {mdList.use}/>
            <Anchor tagType="h2"
                    idVal="h2_effect_clear"
                    className="h2-title mt-6">
                Effect 的清除效果
            </Anchor>
            <p className="content-txt">
                前面降到效果上它更像 class 类型组件中的 componentDidMount 和 componentDidUpdate，
                而有时我们可能会在 effect 内做一些需要清除的操作，比如我们编写了一个 setInterval，此时你可能想要在组件卸载时能改清除它，
                那么可以给 effect 返回一个函数，在函数内编写清除逻辑。
            </p>
            <MarkDown url= {mdList.clear}/>

            <Anchor tagType="h2"
                    idVal="h2_effect_call"
                    className="h2-title mt-6">
                Effect 的执行优化
            </Anchor>
            <p className="content-txt">
                在默认情况下，Effect Hook 会在每次 DOM 发生变换后执行，甚至在某些时候组件初始化时，会执行两次（这是我实际体验时发现的问题），
                所以在每次 DOM 变化，执行所有的 effect 这显然不是一个好的选择。通过给 useEffect 传入第二个参数，可以实现指定变量变化时，再执行
                effect 的效果
            </p>
            <MarkDown url= {mdList.call}/>
        </div>
  )
}
