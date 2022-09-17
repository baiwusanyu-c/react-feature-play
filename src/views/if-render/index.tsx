
import MarkDown from '../../components/markdown/markdown'
import VarIf from "../if-render/demo/var-if";
import ThreeAnd from "../if-render/demo/three-and";
import PropsIf from "../if-render/demo/props-if";
import PropsNull from "../if-render/demo/props-null";
import Anchor from "../../components/anchor/anchor";

export default function renderProps (){
    const mdList = {
        varIf:'markdown/if-render/var-if.md',
        threeAnd:'markdown/if-render/three-and.md',
        propsIf:'markdown/if-render/props-if.md',
        propsNull:'markdown/if-render/props-null.md'
    }
    return (
        <div className='props-types'>
            <Anchor tagType='h1'
                    idVal='h1_if'
                    className='h1-title'>
                if 条件渲染
            </Anchor>

            <p className='content-txt mt-3'>
                相对于 vue 中 通过 v-if 和 v-show 指令来实现条件渲染，
                react 中的条件渲染基本上使用常用的逻辑运算来实现。其时还是发挥了 jsx 的特性，
                所以对于 class 类型组件和函数组件，写法基本一样。
            </p>

            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_props_if'
                    className='h2-title'>
                基于 props 的条件渲染两个不同的组件
            </Anchor>
            <p className='content-txt'>
                你可以将你要条件渲染的组件封装成一个函数组件，通过一个 props 在组件内通过 if 语句 来返回不同的组件渲染。
            </p>
            <Anchor tagType='h3'
                    idVal='h3_if_func_demo'
                    className='h3-title'>
                函数组件渲染样例
            </Anchor>
            <PropsIf/>
            <Anchor tagType='h3'
                    idVal='h3_if_func_code'
                    className='h3-title'>
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.propsIf}/>


            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_props_if_null'
                    className='h2-title'>
                基于 props 的条件渲染一个组件的显隐
            </Anchor>

            <p className='content-txt'>
                你可以将你要条件渲染的组件封装成一个函数组件，通过一个 props 在组件内通过 if 语句来控制组件显示隐藏，
                你隐藏组件时，函数组件直接返回 null 即可。
            </p>
            <Anchor tagType='h3'
                    idVal='h3_if_null_func_demo'
                    className='h3-title'>
                函数组件渲染样例
            </Anchor>
            <PropsNull/>
            <Anchor tagType='h3'
                    idVal='h3_if_null_func_code'
                    className='h3-title'>
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.propsNull}/>

            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_var_if'
                    className='h2-title'>
                render 内变量控制实现条件渲染
            </Anchor>
            <p className='content-txt'>
               在 render 函数中直接使用 if 判断来给一个变量赋值上不同的组件值，并在 jsx 中渲染这个变量
            </p>
            <Anchor tagType='h3'
                    idVal='h3_var_if_func_demo'
                    className='h3-title'>
                函数组件渲染样例
            </Anchor>

            <VarIf/>
            <Anchor tagType='h3'
                    idVal='h3_var_if_func_code'
                    className='h3-title'>
                函数组件代码样例
            </Anchor>

            <MarkDown url= {mdList.varIf}/>


            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_three_if'
                    className='h2-title'>
                与运算符 && 和 三目运算符的条件渲染
            </Anchor>
            <p className='content-txt'>
                运用 jsx 的灵活能力，使用逻辑运算符实现条件渲染，直接在 jsx 中编写逻辑实现条件渲染
            </p>
            <Anchor tagType='h3'
                    idVal='h3_three_if_func_demo'
                    className='h3-title'>
                函数组件渲染样例
            </Anchor>
            <ThreeAnd/>
            <Anchor tagType='h3'
                    idVal='h3_three_if_func_code'
                    className='h3-title'>
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.threeAnd}/>
        </div>
    )
}
