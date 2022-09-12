
import MarkDown from '../../components/markdown/markdown'
import ParentFunc from "../render-props/demo/parent-func";
import ParentClass from "../render-props/demo/parent-class";

export default function renderProps (){
    const mdList = {
        func:'markdown/render-props/prop-type-func.md',
        class:'markdown/render-props/prop-type-class.md'
    }
    return (
        <div className='props-types'>
            <h1 className='h1-title'>Render Props</h1>
            <hr className='hr-line'/>
            <h2 className='h2-title'>函数型组件 render props</h2>
            <p className='content-txt'>
                render props 是指以函数的形式传递 props 给组件，而这个函数返回的可以是 dom 或 组件的
                jsx， 而函数的参数由子组件调用时传递出来。没错他其实对应的就是 vue 的作用域插槽。
            </p>
            <h3 className="h3-title">函数组件渲染样例</h3>
            <ParentFunc/>
            <h3 className="h3-title">函数组件代码样例</h3>
            <MarkDown url= {mdList.func}/>
            <hr className='hr-line'/>
            <h2 className='h2-title'>class类组件props传递</h2>
            <p className='content-txt'>
                class类组件写法基本上和函数一样。
            </p>
            <h3 className="h3-title">class类组件渲染样例</h3>
            <ParentClass/>
            <h3 className="h3-title">class类组件代码样例</h3>
            <MarkDown url= {mdList.class}/>

        </div>
    )
}
