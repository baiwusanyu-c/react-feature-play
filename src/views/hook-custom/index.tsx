import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import CustomHook from './demo/custom-hook'

export default function renderFor() {
  const mdList = {
    custom: 'markdown/hook-custom/hook-custom.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_state"
                    className="h1-title">
                自定义 Hooks
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_state_base"
                    className="h2-title">
                基本概念
            </Anchor>
            <p className="content-txt">
                通过自定义 Hook，可以将组件逻辑提取到可重用的函数中，注意 Hook 只能在函数组件顶层调用，不可在循环、判断、函数嵌套中使用。
                自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。
            </p>
            <p className="content-txt">
                自定义 Hook，其实本质是一个函数，其参数、返回值完全由你定义，在使用和声明上遵循 Hook 规则，其中最重要的就是保证在函数组件
                顶层调用。
            </p>
            <Anchor tagType="h2"
                    idVal="h3_state_md"
                    className="h3-title">
                组件渲染样例
            </Anchor>
            <CustomHook />
            <Anchor tagType="h2"
                    idVal="h3_state_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.custom}/>
        </div>
  )
}
