import { Table, Timeline } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import MarkDown from '../../components/markdown/markdown'
import Anchor from '../../components/anchor/anchor'
import Lifecycle from './demo/lifecycle-class'
interface IDataType {
  name: string
  description: string
  vueFunc: string
  other: string
}
export default function renderLiftCycle() {
  const mdList = {
    lifeCycleClass: 'markdown/lifecycle-class/lifecycle-class.md',
  }
  const columns: ColumnsType<IDataType> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: '说明',
      dataIndex: 'description',
      key: 'description',
      render: text => <span>{text}</span>,
    },
    {
      title: '对比 vue',
      dataIndex: 'vueFunc',
      key: 'vueFunc',
      render: text => <span>{text}</span>,
    },
    {
      title: '其他',
      dataIndex: 'other',
      key: 'other',
      render: text => <span>{text}</span>,
    },
  ]
  const data: Array<IDataType> = [
    {
      name: 'constructor',
      description: '初始化 state 和事件绑定，且必须调用super保证this指向。且不可自这里使用 setState 和把 props 赋值给 state',
      vueFunc: 'beforeCreate -> created （vue3 setup）',
      other: '对标vue beforeCreate -> created 阶段，做数据初始化和相关事件绑定',
    },
    {
      name: 'getDerivedStateFromProps(props, state)',
      description: '在render之前，初始挂载和每次更新时被调用，返回一个对象来更新 state',
      vueFunc: '更新时，onBeforeUpdate',
      other: '更新时 对标 vue 的 onBeforeUpdate 更新前运行',
    },
    {
      name: 'shouldComponentUpdate',
      description: '当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法',
      vueFunc: ' - ',
      other: ' - ',
    },
    {
      name: 'render',
      description: 'render 渲染',
      vueFunc: 'render',
      other: '就是 render 方法',
    },
    {
      name: 'componentDidMount',
      description: '会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。',
      vueFunc: 'onMounted',
      other: '对标 vue 的 onMounted，可以获得真实节点做操作',
    },
    {
      name: 'getSnapshotBeforeUpdate',
      description: '在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。',
      vueFunc: ' - ',
      other: '用的较少，在输出的渲染内容还没挂载到真实 dom 时调用',
    },
    {
      name: 'componentDidUpdate(prevProps, prevState, snapshot)',
      description: '会在更新后会被立即调用。首次渲染不会执行此方法。当组件更新后，可以在此处对 DOM 进行操作',
      vueFunc: 'onUpdated',
      other: '对标 vue 的 onUpdated 在更新后调用，区别是在返回的参数中 我们可以拿到更新前的 props、state',
    },
    {
      name: 'componentWillUnmount',
      description: '会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等',
      vueFunc: 'onBeforeUnmount ',
      other: '对标 vue 的 onBeforeUnmount 在会在组件卸载及销毁之前直接调用',
    },
  ]
  return (
        <div className="props-types">
            <Anchor tagType="h1"
                    idVal="h1_life"
                    className="h1-title">
                生命周期
            </Anchor>
            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_life_class"
                    className="h2-title">
                class 类型组件中的生命周期
            </Anchor>
            <Anchor tagType="h3"
                    idVal="h3_life_class_tb"
                    className="h3-title">
                生命周期全解
            </Anchor>
            <Table columns={columns} dataSource={data} pagination={false}/>
            <Anchor tagType="h3"
                    idVal="h3_life_class_index"
                    className="h3-title">
                生命周期调用顺序
            </Anchor>
            <div className="flex justify-around mt-20">
                <Timeline>
                    <Timeline.Item>挂载顺序</Timeline.Item>
                    <Timeline.Item>constructor</Timeline.Item>
                    <Timeline.Item>getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>render</Timeline.Item>
                    <Timeline.Item>componentDidMount</Timeline.Item>
                </Timeline>
                <Timeline>
                    <Timeline.Item>更新顺序</Timeline.Item>
                    <Timeline.Item>getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>shouldComponentUpdate</Timeline.Item>
                    <Timeline.Item>render</Timeline.Item>
                    <Timeline.Item>componentDidUpdate</Timeline.Item>
                </Timeline>
                <Timeline>
                    <Timeline.Item>卸载</Timeline.Item>
                    <Timeline.Item>componentWillUnmount</Timeline.Item>
                </Timeline>
            </div>
            <div className="flex justify-around mt-20">
                <Timeline>
                    <Timeline.Item>vue 父子初始化调用顺序</Timeline.Item>
                    <Timeline.Item>父 beforeCreate</Timeline.Item>
                    <Timeline.Item>父 created</Timeline.Item>
                    <Timeline.Item>父 beforeMount</Timeline.Item>
                    <Timeline.Item>子 beforeCreate</Timeline.Item>
                    <Timeline.Item>子 created</Timeline.Item>
                    <Timeline.Item>子 beforeMount</Timeline.Item>
                    <Timeline.Item>子 mounted</Timeline.Item>
                    <Timeline.Item>父 mounted</Timeline.Item>
                </Timeline>

                <Timeline>
                    <Timeline.Item>vue 父子更新调用顺序</Timeline.Item>
                    <Timeline.Item>父 beforeUpdate</Timeline.Item>
                    <Timeline.Item>子 beforeUpdate</Timeline.Item>
                    <Timeline.Item>子 updated</Timeline.Item>
                    <Timeline.Item>父 updated</Timeline.Item>
                </Timeline>

                <Timeline>
                    <Timeline.Item>vue 父子销毁调用顺序</Timeline.Item>
                    <Timeline.Item>父 beforeDestroy</Timeline.Item>
                    <Timeline.Item>子 beforeDestroy</Timeline.Item>
                    <Timeline.Item>子 destroyed</Timeline.Item>
                    <Timeline.Item>父 destroyed</Timeline.Item>
                </Timeline>
            </div>
            <div className="flex justify-around mt-20">
                <Timeline>
                    <Timeline.Item>react 父子初始化调用顺序</Timeline.Item>
                    <Timeline.Item>父 constructor</Timeline.Item>
                    <Timeline.Item>父 getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>父 render</Timeline.Item>
                    <Timeline.Item>子 constructor</Timeline.Item>
                    <Timeline.Item>子 getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>子 render</Timeline.Item>
                    <Timeline.Item>子 componentDidMount</Timeline.Item>
                    <Timeline.Item>父 componentDidMount</Timeline.Item>
                </Timeline>

                <Timeline>
                    <Timeline.Item>react 父组件修改 props</Timeline.Item>
                    <Timeline.Item>父 getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>父 shouldComponentUpdate</Timeline.Item>
                    <Timeline.Item>父 render</Timeline.Item>
                    <Timeline.Item>子 getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>子 shouldComponentUpdate</Timeline.Item>
                    <Timeline.Item>子 render</Timeline.Item>
                    <Timeline.Item>子 getSnapShotBeforeUpdate</Timeline.Item>
                    <Timeline.Item>父 getSnapShotBeforeUpdate</Timeline.Item>
                    <Timeline.Item>子 componentDidUpdate</Timeline.Item>
                    <Timeline.Item>父 componentDidUpdate</Timeline.Item>
                </Timeline>

                <Timeline>
                    <Timeline.Item>react 卸载组件</Timeline.Item>
                    <Timeline.Item>父 getDerivedStateFromProps</Timeline.Item>
                    <Timeline.Item>父 shouldComponentUpdate</Timeline.Item>
                    <Timeline.Item>父 render</Timeline.Item>
                    <Timeline.Item>父 getSnapShotBeforeUpdate</Timeline.Item>
                    <Timeline.Item>子 componentWillUnmount</Timeline.Item>
                    <Timeline.Item>父 componentDidUpdate</Timeline.Item>
                </Timeline>
            </div>
            <Anchor tagType="h3"
                    idVal="h3_life_class_demo"
                    className="h3-title">
                class 类型组件渲染样例
            </Anchor>
            <Lifecycle/>
            <Anchor tagType="h3"
                    idVal="h3_life_class_code"
                    className="h3-title">
                class 类型组件代码样例
            </Anchor>
            <MarkDown url= {mdList.lifeCycleClass}/>

            <hr className="hr-line"/>
            <Anchor tagType="h2"
                    idVal="h2_map_for_key"
                    className="h2-title">
                函数组件的生命周期
            </Anchor>
            <p className="content-txt">
                其实函数组件是没有生命周期的，通常情况下，我们使用生命周期是为了实现一些副作用，比如在初始化时获取数据，在更新后做某些操作
                函数组件可以通过 effect hooks 来实现这些副作用，它就好像是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
                更具体的内容，我们在 effect hooks 中再来了解。
            </p>
        </div>
  )
}
