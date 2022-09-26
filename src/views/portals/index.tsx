import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import PortalsFunc from './demo/portals-func'
import PortalsClass from './demo/portals-class'

export default function renderPortals() {
  const mdList = {
    portalsFunc: 'markdown/portals/portals-func.md',
    portalsClass: 'markdown/portals/portals-class.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_portals"
                    className="h1-title">
                Portals 传送渲染
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_portals_func"
                    className="h2-title">
                Portals 在函数组件中的使用
            </Anchor>
            <p className="content-txt">
                React 中可以通过 Portals 来讲你的组件渲染到指定的节点之下，没错，对应的就是 vue3 的 teleport 特性。
            </p>
            <Anchor tagType="h3"
                    idVal="h3_portals_func_demo"
                    className="h3-title">
                函数组件渲染样例
            </Anchor>
            <div id="Portals_Func"></div>
            <PortalsFunc/>
            <Anchor tagType="h3"
                    idVal="h3_portals_func_code"
                    className="h3-title">
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.portalsFunc}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_portals_class"
                    className="h2-title">
                Portals 在 class 类型组件中的使用
            </Anchor>
            <p className="content-txt">
                函数组件中写法基本一样，只是注意一下容器 dom 的获取
            </p>
            <Anchor tagType="h3"
                    idVal="h3_portals_class_demo"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
            <div id="Portals_Class"></div>
            <PortalsClass/>
            <Anchor tagType="h3"
                    idVal="h3_portals_class_code"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
            <MarkDown url= {mdList.portalsClass}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_portals_event"
                    className="h2-title">
                Portal 进行事件冒泡
            </Anchor>
            <p className="content-txt">
                使用 Portal 讲对应的元素渲染到了整个 dom 树种指定的位置，虽然从最终渲染结果上来看，的确是渲染的元素渲染位置发生了变化，
                但是在 react 维护的 react 虚拟 dom 树中，维护的虚拟 dom 却没有发生变化，Portal 的元素依旧能够进行事件冒泡，并且在父组件中
                被捕获。
            </p>
            <p className="content-txt font-bold mt-4">
                例如：组件A，在 jsx 中，书写在元素 a 中作为子节点，并且元素 a 绑定了一个点击事件；
                而组件 A 渲染的元素 b 通过 Portal 渲染到了（与元素 a 平级）元素 c 下，从最终 dom 树的层级结构上看，应该渲染在元素 a 下的元素
                b 被渲染到了元素 c 下，但是此时你点击元素 b，依旧能够触发元素 a 绑定的点击事件。
            </p>
        </div>
  )
}
