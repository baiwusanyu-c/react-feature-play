import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import RefsDomCreate from './demo/refs-dom-creaet'
import RefsDomCb from './demo/refs-dom-cb'

export default function renderRefsDom() {
  const mdList = {
    refsDomCreate: 'markdown/refs-dom/refs-dom-create.md',
    refsDomCb: 'markdown/refs-dom/refs-dom-cb.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_refs_dom"
                    className="h1-title">
                Ref 获取组件实例 或 Dom
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_refs_dom_create"
                    className="h2-title">
                class 类型组件中 createRef
            </Anchor>
            <p className="content-txt">
                在 React 中，我们可以通过 ref 特性来获取 jsx 模板中某个元素的 dom 或 是组件实例对象，通常我们需要调用 React.createRef 这个
                api 去创建一个 ref 对象，并将这个对象绑定到需要获取的 jsx 元素的 ref 属性上，name我们就可以通过这个 ref 对象上的 current 属性访问到对应的元素 dom
                或组件实例。相比较于 vue，通过 ref api 创建变量，并绑定给 ref 属性，二者之间的语法设计差异基本没有。
            </p>

            <div className="my-4">
                <Alert
                    message="Warning"
                    description="值得注意的是，ref 获取组件实例，这是对 class 类型组件而言的，函数组件没有实例对象，因此你不可以使用本章节介绍的方法
                    来获取函数组件的实例。此外，当 ref 属性处在的标签元素是一个组件时，通常获取的是组件实例，但是在某些场景中你可能想要获取组件的元素 dom，
                    此时需要使用 forwardRef ,forwardRef 不仅可以用于获取组件的 dom ，也可用于函数组件，详情见 refs 转发章节。"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_refs_dom_create_demo"
                    className="h3-title">
                组件渲染样例
            </Anchor>
            <RefsDomCreate/>
            <Anchor tagType="h3"
                    idVal="h3_refs_dom_create_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.refsDomCreate}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_refs_dom_cb"
                    className="h2-title">
                class 类型组件中 refs 回调
            </Anchor>
            <p className="content-txt">
               除了使用 React.createRef 创建 ref 对象并绑定到对应 jsx 元素的 ref 属性上，来实现获取 dom 元素或组件实例，react 中
                也可以把 ref 对象定义成一个回调方法，并把这个方法绑定给指定的 jsx 元素的 ref 属性。这个回调方法接受的参数，就是对应的组件
                实例或 dom 元素。
            </p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null。
                    在 componentDidMount 或 componentDidUpdate 触发前，React 会保证 refs 一定是最新的。"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_refs_dom_cb_demo"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <RefsDomCb/>
            <Anchor tagType="h3"
                    idVal="h3_refs_dom_cb_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.refsDomCb}/>
        </div>
  )
}
