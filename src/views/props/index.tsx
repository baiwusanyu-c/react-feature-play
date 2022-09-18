import MarkDown from '../../components/markdown/markdown'
import ParentFunc from '../prop-types/demo/parent-func'
import ParentClass from '../prop-types/demo/parent-class'
import Anchor from '../../components/anchor/anchor'

export default function renderProps() {
  const mdList = {
    func: 'markdown/prop-types/prop-type-func.md',
    class: 'markdown/prop-types/prop-type-class.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_props"
                    className="h1-title">
                props 属性传递
            </Anchor>
            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_props_func"
                    className="h2-title">
                函数型组件 props 传递
            </Anchor>
            <p className="content-txt">
                在 react 中，你可以使用函数或这 class 来编写组件，并向他们传递 props，
                而对于函数组件，props 会通过组件导出的函数，作为参数传递进来。
                它就好像 vue3 的 setup 函数一样，setup 函数也是通过参数进行传递的。
            </p>
            <Anchor tagType="h3"
                    idVal="h3_props_func_demo"
                    className="h3-title">
                函数组件渲染样例
            </Anchor>
            <ParentFunc/>
            <Anchor tagType="h3"
                    idVal="h3_props_func_code"
                    className="h3-title">
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.func}/>
            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_props_class"
                    className="h2-title">
                class 类组件 props 传递
            </Anchor>
            <p className="content-txt">
                对于 class 类组件，编写时会继承自 React.Component,你可以在组件 class 中
                定义静态对象 defaultProps 和 静态对象 propTypes 来定义 props 以及默认值
                和类型
            </p>
            <Anchor tagType="h3"
                    idVal="h3_props_class_code"
                    className="h3-title">
                class 类组件渲染样例
            </Anchor>
            <ParentClass/>
            <Anchor tagType="h3"
                    idVal="h3_props_class_code"
                    className="h3-title">
                class 类组件代码样例
            </Anchor>
            <MarkDown url= {mdList.class}/>

        </div>
  )
}
