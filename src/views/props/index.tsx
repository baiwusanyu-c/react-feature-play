
import MarkDown from '../../components/markdown/markdown'
import ParentFunc from "../prop-types/demo/parent-func";
import ParentClass from "../prop-types/demo/parent-class";

export default function renderProps (){
    const mdList = {
        func:'markdown/prop-types/prop-type-func.md',
        class:'markdown/prop-types/prop-type-class.md'
    }
    return (
        <div className='props-types'>
            <h1 className='h1-title'>props 属性传递</h1>
            <hr className='hr-line'/>
            <h2 className='h2-title'>函数型组件props传递</h2>
            <p className='content-txt'>
                在 react 中，你可以使用函数或这 class 来编写组件，并向他们传递props，
                而对于函数组件，props 会通过组件导出的函数，作为参数传递进来。
                它就好像 vue3 的 setup 函数一样，setup 函数也是通过参数进行传递的。
            </p>
            <h3 className="h3-title">函数组件渲染样例</h3>
            <ParentFunc/>
            <h3 className="h3-title">函数组件代码样例</h3>
            <MarkDown url= {mdList.func}/>
            <hr className='hr-line'/>
            <h2 className='h2-title'>class类组件props传递</h2>
            <p className='content-txt'>
                对于class类组件，编写时会继承自 React.Component,你可以在组件 class中
                定义静态对象 defaultProps 和 静态对象 propTypes 来定义props以及默认值
                和类型
            </p>
            <h3 className="h3-title">class类组件渲染样例</h3>
            <ParentClass/>
            <h3 className="h3-title">class类组件代码样例</h3>
            <MarkDown url= {mdList.class}/>

        </div>
    )
}
