import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import SlotNameFunc from './demo/slot-name-func'
import SlotNameClass from './demo/slot-name-class'

export default function renderSlot() {
  const mdList = {
    slotNameFunc: 'markdown/slot-name/slot-name-func.md',
    slotNameClass: 'markdown/slot-name/slot-name-class.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_slot"
                    className="h1-title">
                具名插槽渲染 name
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_slot_func"
                    className="h2-title">
                函数组件的具名插槽
            </Anchor>
            <p className="content-txt">
                其实在 react 中并没有像 vue 中的所谓具名插槽的概念，但是我们可以通过 props 向子组件传递一个组件来实现具名插槽效果
            </p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="
                    如示例代码中所示，父组件中编写子组件的 jsx 时，要注意是否写成自闭合标签（<Comp/>）
                    因为如果你没有使用普通插槽，写成 <Comp slot={MySlot}><Comp/>,那么 react 解析成 props 中就会带有普通插槽，即 props.children，会造成 ts 报错"
                    type="warning"
                    showIcon
                />
            </div>

            <Anchor tagType="h3"
                    idVal="h3_slot_func_demo"
                    className="h3-title">
                函数组件渲染样例
            </Anchor>
            <SlotNameFunc/>
            <Anchor tagType="h3"
                    idVal="h3_slot_func_code"
                    className="h3-title">
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.slotNameFunc}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_slot_class"
                    className="h2-title">
                class 类型组件的具名插槽
            </Anchor>
            <p className="content-txt">
                class 类型组件插槽和函数组件基本一样，只是写法上遵循 class 类型组件 props 写法而已
            </p>
            <Anchor tagType="h3"
                    idVal="h3_slot_class_demo"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
            <SlotNameClass/>
            <Anchor tagType="h3"
                    idVal="h3_slot_class_code"
                    className="h3-title">
              class 类型组件代码样例
            </Anchor>
            <MarkDown url= {mdList.slotNameClass}/>
        </div>
  )
}
