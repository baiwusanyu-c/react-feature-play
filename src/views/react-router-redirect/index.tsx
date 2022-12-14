import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import ForKey from './demo/for-key'
import ForRender from './demo/for-render'

export default function renderFor() {
  const mdList = {
    forKey: 'markdown/for-render/for-key.md',
    forRender: 'markdown/for-render/for-render.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_for"
                    className="h1-title">
              Router 重定向
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for"
                    className="h2-title">
                基于数组 map 方法的列表循环渲染
            </Anchor>
            <p className="content-txt">
                React 的列表渲染也是得益于 jsx 的特性，可以使用 js 数组的 map 方法生成一个 jsx 数组来渲染即可，
                并且 class 类型组件和函数组件在写法上也没有区别。 区别于 vue 的 v-for 指令，还是 vue 方便多了。
            </p>
            <Anchor tagType="h3"
                    idVal="h3_map_for_demo"
                    className="h3-title">
                组件渲染样例
            </Anchor>
            <ForRender/>
            <Anchor tagType="h3"
                    idVal="h3_map_for_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.forRender}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for_key"
                    className="h2-title">
                列表循环渲染中的 key
            </Anchor>
            <p className="content-txt">
                和 vue 一样，在列表循环渲染中，需要绑定一个 key 值，
                使得在虚拟 dom 进行 diff 算法更新时能够更加高效的进行对比查找出更新元素。
            </p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="这里够绑定 key 值一定是就近的 map 方法中绑定原则。
                    例如你在 map 方法中循环了一个组件 itemComp，其渲染的内容是 li 标签，
                    此时你不可以把 key 设置在 li 标签上（itemComp 组件），而必须把 key 设置在 map 方法循环的 itemComp 上"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_map_for_key_demo"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <ForKey/>
            <Anchor tagType="h3"
                    idVal="h3_map_for_key_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.forKey}/>
        </div>
  )
}
