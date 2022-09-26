import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import ForwardFunc from './demo/forward-func'
import ForwardClass from './demo/forward-class'
import ForwardHoc from './demo/forward-hoc'

export default function renderFor() {
  const mdList = {
    forwardFunc: 'markdown/refs-forward/forward-func.md',
    forwardClass: 'markdown/refs-forward/forward-class.md',
    forwardHoc: 'markdown/refs-forward/forward-hoc.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_forward"
                    className="h1-title">
                Refs 转发
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_forward_func"
                    className="h2-title">
                函数组件中的 Refs 转发
            </Anchor>
            <p className="content-txt">
                一般的，在 React 中，对于 class 类型的组件，我们可以通过 ref 来获取组件的实例；对于元素，我们可以通过 ref 来获取组件的 dom 元素对象。
                但是，对于 ref 的使用存在一些限制，即对于函数组件，我们无法使用 ref，而对于 class 类型组件，我们无法获取组件渲染的 dom 元素对象。
                对此，我们可以使用 refs 转发功能。你可以发现对于 vue 的 sfc，其功能还是比较完善，sfc 的组件实例上，会挂载各种暴露方法，以及 el，对比 react
                相对方便许多。
            </p>
            <p className="content-txt font-bold">1、我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。</p>
            <p className="content-txt font-bold">2、我们通过指定 ref 为 JSX 属性，将其向下传递。</p>
            <p className="content-txt font-bold">3、React 传递 ref 给 forwardRef 内函数作为其第二个参数。</p>
            <p className="content-txt font-bold">4、我们向下转发该 ref 参数到 指定 JSX 属性。</p>
            <p className="content-txt font-bold">5、当 ref 挂载完成，ref.current 将指向 DOM 节点。</p>
            <Anchor tagType="h3"
                    idVal="h3_forward_func_demo"
                    className="h3-title">
                函数组件渲染样例
            </Anchor>
            <ForwardFunc />
            <Anchor tagType="h3"
                    idVal="h3_forward_func_code"
                    className="h3-title">
                函数组件代码样例
            </Anchor>
            <MarkDown url= {mdList.forwardFunc}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_forward_class"
                    className="h2-title">
               class 类型组件中的 Refs 转发
            </Anchor>
            <p className="content-txt">
                上述例子中，你会发现虽然能够通过 refs 的转发在函数组件中去使用 ref，但实际上，你依旧无法获取函数组件的组件实例，因为它根本没有实例。
                从此可以看出，refs 的转发主要还是将 ref 转发到下级组件，通常用来获取下级组件渲染的 dom 或 class 类型组件。而在 class 类型组件中使用，
                你会发现，实际上还是基于函数组件且是简单的元素函数组件进行的封装。以下例子同样体现了 refs 转发的功能。
            </p>
            <Anchor tagType="h3"
                    idVal="h3_forward_class_demo"
                    className="h3-title">
                class 类型组件渲染样例
            </Anchor>
            <ForwardClass/>
            <Anchor tagType="h3"
                    idVal="h3_forward_class_code"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
            <MarkDown url= {mdList.forwardClass}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_forward_hoc"
                    className="h2-title">
                Refs 转发在 HOC 中的应用
            </Anchor>
            <p className="content-txt">
                在 HOC 中使用 refs 转发，默认情况下，refs 会被转发到 HOC 组件上，而不是其包裹的 WrappedComponent上，因此，你需要在返回时
                对 HOC 组件使用 React.forwardRef 包裹处理。
            </p>
            <Anchor tagType="h3"
                    idVal="h3_forward_hoc_demo"
                    className="h3-title">
                组件渲染样例
            </Anchor>
            <ForwardHoc/>
            <Anchor tagType="h3"
                    idVal="h3_forward_hoc_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.forwardHoc}/>
        </div>
  )
}
