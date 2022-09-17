
import MarkDown from '../../components/markdown/markdown'
import ParentFunc from "../render-props/demo/parent-func";
import ParentClass from "../render-props/demo/parent-class";
import Anchor from "../../components/anchor/anchor";

export default function renderProps (){
    const mdList = {
        func:'markdown/render-props/prop-type-func.md',
        class:'markdown/render-props/prop-type-class.md'
    }
    return (
        <div className='props-types'>
            <Anchor tagType='h1'
                    idVal='h1_render'
                    className='h1-title'>
                Render Props
            </Anchor>
            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_render_func'
                    className='h2-title'>
                函数型组件 render props
            </Anchor>
            <p className='content-txt'>
                render props 是指以函数的形式传递 props 给组件，而这个函数返回的可以是 dom 或 组件的
                jsx， 而函数的参数由子组件调用时传递出来。没错他其实对应的就是 vue 的作用域插槽。
            </p>
            <Anchor tagType='h3'
                    idVal='h3_render_func_demo'
                    className='h3-title'>
                函数组件渲染样例
            </Anchor>
            <ParentFunc/>
            <Anchor tagType='h3'
                    idVal='h3_render_func_code'
                    className='h3-title'>
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.func}/>
            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_render_class'
                    className='h2-title'>
                class 类组件 render props
            </Anchor>
            <p className='content-txt'>
                class 类组件写法基本上和函数一样。
            </p>
            <Anchor tagType='h3'
                    idVal='h3_render_class_demo'
                    className='h3-title'>
                class 类组件渲染样例
            </Anchor>
            <ParentClass/>

            <Anchor tagType='h3'
                    idVal='h3_render_class_code'
                    className='h3-title'>
                class 类组件代码样例
            </Anchor>
            <MarkDown url= {mdList.class}/>

        </div>
    )
}
