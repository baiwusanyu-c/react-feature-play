import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import AdvanceComp from './demo/advance-comp'

export default function renderHOC() {
  const mdList = {
    advanceComp: 'markdown/advance-comp/advance-comp.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_hoc"
                    className="h1-title">
                高阶组件 HOC
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_hoc_base"
                    className="h2-title">
                基本概念理解
            </Anchor>
            <p className="content-txt">
                高阶组件，是 react 独有的，他不是 react 中的某个 api，而是一种存在于 react 中组件编写的模式思想，在狭义层面上来说，
                高阶组件是指通过一个接受组件和其他必要参数的所谓组件增强函数，返回一个全新组件的这么一个过程，返回的全新组件就是所谓的高阶组件。
                这个增强函数，你可以理解为是对传入的组件的一种功能增强性的封装。其实就是一种工厂函数、组件封装，逻辑解耦相关编程思维和设计模式的体现。
            </p>
            <br/>
            <p className="content-txt">
               举一个简单的例子，假设在你的项目中存在多个弹窗形式的表单，这些表单往往在新增、编辑的业务场景中使用，那么这里面存在着表单复位、
                获取编辑时表单数据回显、表单提交等逻辑。在这个例子中，你的表单字段、获取回显数据接口、表单提交的接口或许会存在差异。但是其业务基础
                逻辑是一样的，那么我们可以使用高阶组件来封装表单和这些逻辑，增强函数接收表单组件，和一些差异参数（接口、字段等），在增强函数的实现中
                根据参数实现表单回显、提交、重置复位等逻辑，并返回一个新的组件。在这个过程中其实就产生了一个高阶组件的过程。
            </p>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_hoc_g"
                    className="h2-title">
                高阶组件 HOC 的规范约定
            </Anchor>
            <Anchor tagType="h3"
                    idVal="h3_hoc_oc"
                    className="h3-title">
                避免对原有组件修改
            </Anchor>
            <p className="content-txt">
               高阶组件，只是对原有组件的一层增强性的封装，因此在增强函数实现高阶组件的过程中你不应该
                <span className="font-bold">对原始组件进行修改</span>，而是应该对原有组件进行组合。
                一旦发生了对原有组件的修改，会造成原有组件的某些功能失效，并且可能会发生传递不同原组件，产生 HOC 冲突问题。
            </p>
            <br/>
            <Anchor tagType="h3"
                    idVal="h3_hoc_props"
                    className="h3-title">
                将不相关的 props 传递给被包裹的组件
            </Anchor>
            <p className="content-txt">
                HOC 为组件添加特性。自身不应该大幅改变约定。HOC 返回的组件与原组件应保持类似的接口。
                <span className="font-bold">即一般的情况下除了实现增强相关的参数、方法，应该尽量全的将 props 等进行透传</span>
            </p>
            <br/>
            <Anchor tagType="h3"
                    idVal="h3_hoc_name"
                    className="h3-title">
                包装显示名称以便轻松调试
            </Anchor>
            <p className="content-txt">
               为了能够在 react DevTool 中更好的调试，
                <span className="font-bold"> 应该给返回的高阶组件中添加 displayName属性（xxxx.displayName）</span>
            </p>
            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_hoc_att"
                    className="h2-title">
                注意事项
            </Anchor>
            <div className="my-4">
                <Alert
                    message="不要在 render 方法中使用 HOC"
                    description="不要在 render 方法中使用 HOC，会造成子树每日次渲染都会卸载、重新挂载"
                    type="warning"
                    showIcon
                />
            </div>
            <div className="my-4">
                <Alert
                    message="复制静态方法"
                   description={ '被包装的组件，如果添加了静态方法，需要在高阶组件的增强逻辑中对静态方法进行复制\n WrappedComponent.staticMethod = function() {/*...*/} \n'
                       + '增强函数中\n Enhance.staticMethod = WrappedComponent.staticMethod;' }
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_hoc_code"
                    className="h3-title">
                组件渲染样例
            </Anchor>
            <AdvanceComp></AdvanceComp>
            <Anchor tagType="h3"
                    idVal="h3_hoc_code"
                    className="h3-title">
                组件代码样例
            </Anchor>
            <MarkDown url= {mdList.advanceComp}/>
        </div>
  )
}
