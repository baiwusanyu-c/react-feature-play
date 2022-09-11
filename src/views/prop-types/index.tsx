import MarkDown from '../../components/markdown/markdown'
import ParentFunc from './demo/parent-func'
import ParentClass from './demo/parent-class'
import { Alert } from 'antd';

export default function renderPropTypes(){
    const mdList = {
        func:'markdown/prop-types/prop-type-func.md',
        class:'markdown/prop-types/prop-type-class.md'
    }
    console.log(mdList)
    return (
        <div className='props-types'>
            <h1 className='h1-title'>PropTypes 的类型检查</h1>
            <hr className='hr-line'/>
            <h2 className='h2-title'>函数型组件的类型检查</h2>
            <p className='content-txt'>函数组件的类型检查其实非常简单，props 会通过组件导出的函数，作为参数传递进来。
                它就好像 vue3 的 setup 函数一样，setup 函数也是通过参数进行传递的。
                那么你其实可以直接通过定义函数的对象类型，来实现 props 的类型约束。
                但是其实这是一种不好的做法，以为这只是使用了 typescript 的类型校验，而不是基于 react，
                并且无法定义默认值。正确的做法还是通过 PropTypes 来进行类型检查。
            </p>
            <h3 className="h3-title">函数组件渲染样例</h3>
            <ParentFunc/>
            <h3 className="h3-title">函数组件代码样例</h3>
            <MarkDown url= {mdList.func}/>
            <hr className='hr-line'/>
            <h2 className='h2-title'>类组件的类型检查</h2>
            <p className='content-txt'>类组件的类型检查和函数组件一样，使用 PropTypes 来进行类型检查。
                而默认值可以通过在class中设置static 属性 defaultProps 来定义
            </p>
            <div className='my-4'>
                <Alert
                    message="Warning"
                    description="这里别他妈看官网的写法，用xxxx.propTypes来写，typescript会直接报错"
                    type="warning"
                    showIcon
                />
            </div>
            <h3 className="h3-title">类组件渲染样例</h3>
            <ParentClass/>
            <h3 className="h3-title">类组件代码样例</h3>
            <MarkDown url= {mdList.class}/>
        </div>
    )
}