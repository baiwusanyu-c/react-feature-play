import MarkDown from '../../components/markdown/markdown'
import SlotFunc from './demo/slot-func'
import SlotClass from './demo/slot-class'
import { Alert } from 'antd';
import Anchor from "../../components/anchor/anchor";

export default function renderSlot(){
    const mdList = {
        slotFunc:'markdown/slot-children/slot-func.md',
        slotClass:'markdown/slot-children/slot-class.md'
    }
    return (
        <div className='props-types'>
            <Anchor tagType='h1'
                    idVal='h1_slot'
                    className='h1-title'>
                props.children 插槽渲染
            </Anchor>

            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_slot_func'
                    className='h2-title'>
                函数组件的普通插槽
            </Anchor>
            <p className='content-txt'>
                React 中插槽渲染的语法其实非常简单，在父组件中，对子组件使用 jsx 语法编写时，和 vue 一样只需要
                在标签内编写对于的插槽内容标签即可，而区别于 vue 的 template 语法中使用 slot 标签来标记插槽渲染的位置，
                react 的插槽会被放入 props.children 上，因此你只需要在需要的地方直接渲染 props.children 即可
            </p>
            <div className='my-4'>
                <Alert
                    message="Warning"
                    description="对于默认插槽，React 并没有像 vue 一样的语法实现，但你可以通过对 props.children 是否为空判断来进行默认渲染"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType='h3'
                    idVal='h3_slot_func_demo'
                    className='h3-title'>
                函数组件渲染样例
            </Anchor>
            <SlotFunc/>
            <Anchor tagType='h3'
                    idVal='h3_slot_func_code'
                    className='h3-title'>
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.slotFunc}/>

            <hr className='hr-line'/>
            <Anchor tagType='h2'
                    idVal='h2_slot_class'
                    className='h2-title'>
                class 类型组件的插槽
            </Anchor>
            <p className='content-txt'>
                class 类型组件插槽和函数组件基本一样，只是写法上遵循 class 类型组件 props 写法而已
            </p>
            <Anchor tagType='h3'
                    idVal='h3_slot_class_demo'
                    className='h3-title'>
                class 类型组件代码样例
            </Anchor>
            <SlotClass/>
            <Anchor tagType='h3'
                    idVal='h3_slot_class_code'
                    className='h3-title'>
              class 类型组件代码样例
            </Anchor>
            <MarkDown url= {mdList.slotClass}/>
        </div>
    )
}
