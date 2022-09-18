import { Alert } from 'antd'
import MarkDown from '../../components/markdown/markdown'
import EventFunc from '../event-state/demo/event-func'
import EventClass from '../event-state/demo/event-class'
import Anchor from '../../components/anchor/anchor'

export default function renderProps() {
  const mdList = {
    func: 'markdown/event-state/event-state-func.md',
    class: 'markdown/event-state/event-state-class.md',
  }
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_event"
                    className="h1-title">
                event 事件绑定与响 state
            </Anchor>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_event_func"
                    className="h2-title">
                函数型组件 event 与响应式数据 state
            </Anchor>
            <p className="content-txt">
                在 react 中事件的绑定都是以 onXXX 在 jsx 上进行绑定的，事件函数会接受一个事件对象 e，
                如果过你想 阻止这个事件默认行为需要手动的使用 e.preventDefault();
                而在 vue 中事件绑定通过 v-bind（缩写 @xxxx ）来实现。
            </p>
            <p className="content-txt">
                而响应式数据，在函数组件中，通过使用 hooks 中的 useState 去定义，它会返回一个变量值（示例中的 count，名字可以自己随便定义），
                用于逻辑计算赋值 和 页面渲染，同时还会返回一个&rsquo;改变函数&rsquo;（示例中的 setCount，名字可以自己随便定义）。不同于 vue 中使用
                reactive 或 ref 去定义响应示变量，在 vue 中我们改变变量值是通过直接赋值的形式去编写，而在 react 中对变量的改变，则必须通过这个
                hook 返回的&rsquo;改变函数&rsquo;去编写。关于 useState 的详细使用，将在 State Hook 章节中介绍。
            </p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="
                    如示例代码中所示，useState 传入一个初始数据是对象时，我们更新它的某个属性，需要给'改变函数'传入一个新的对象，
                    且对象内属性必须包含初始时的所有属性字段，否则，其他字段会被设置为 undefined，例如只更新 num 字段，此时传给'改变函数'的对象为
                    {num:2},那么 name 字段会被设置为 undefined，造成渲染错误；此时我们需要对原数据结构，并改变我们需要更新的字段，如示例所示"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_event_func_demo"
                    className="h3-title">
                函数组件渲染样例
            </Anchor>

            <EventFunc/>
            <Anchor tagType="h3"
                    idVal="h3_event_func_code"
                    className="h3-title">
                函数组件代码样例
            </Anchor>

            <MarkDown url= {mdList.func}/>
            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_event_class"
                    className="h2-title">
                class 类组件 event 与响应式数据 state
            </Anchor>
            <p className="content-txt">
                class 类组件，在 jsx 中的书写方式和函数组件类似，只不过我们需要在 class 中声明对应的事件方法，
                同时在构造函数中 修改绑定 this 指向（this.handleClick = this.handleClick.bind(this);）
                或者我们如示例代码中一样，使用箭头函数定义。
            </p>
            <p className="content-txt">
                而响应式数据，class 类组件继承自 React.Component，
                你可以定义它的 state 属性，并在构造函数中初始化赋值,
                改变数据时，使用 setState 方法进行变量修改。
            </p>
            <div className="my-4">
                <Alert
                    message="Warning"
                    description="
                    你应该把所有数据全部定义到 state 中，而且更新时，
                    你不需要关心你不需要更新的字段，react 会做 setState 的更新合并。
                    在示例代码中，我们修改 num 时给 setState 箭头函数返回的对象中
                    并没有 name 字段，而 num 字段的更新，也没有影响到 name 字段，这是因为 react 进行了合并"
                    type="warning"
                    showIcon
                />
            </div>
            <Anchor tagType="h3"
                    idVal="h3_event_class_demo"
                    className="h3-title">
                class 类组件渲染样例
            </Anchor>
            <EventClass/>
            <Anchor tagType="h3"
                    idVal="h3_event_class_code"
                    className="h3-title">
                class 类组件代码样例
            </Anchor>
            <MarkDown url= {mdList.class}/>

        </div>
  )
}
