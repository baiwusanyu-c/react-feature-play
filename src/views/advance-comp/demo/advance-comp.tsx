import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
interface IProps {
  data: string
}
interface IState {
  data: string
}
// 待包裹的组件
class InputComp extends React.Component<IProps, IState> {
  static propTypes = {
    data: PropTypes.string,
  }

  static defaultProps = {
    data: '',
  }

  constructor(props: IProps) {
    super(props)
    this.state = {
      data: props.data,
    }
  }

  render() {
    return (
            <Input value={this.state.data} className="mb-2 w-1/2 block" />
    )
  }
}

interface IInputOption {
  name: string
  data: any
}

// 增强函数 返回 HOC
function enhanceComponent(WrappedComponent: typeof InputComp, option: IInputOption) {
  class EnhanceForm extends React.Component<IProps, any> {
    static propTypes = {
      data: PropTypes.string,
    }

    static defaultProps = {
      data: '',
    }

    // 添加 displayName
    static displayName = `enhanceComponent(${option.name})`

    constructor(props: IProps) {
      super(props)
      this.state = {
        data: option.data ? option.data + props.data : 'enhanceComponent',
      }
    }

    render() {
      return (<WrappedComponent {...this.props} data={this.state.data}/>)
    }
  }

  return EnhanceForm
}

const WrappedInput1 = enhanceComponent(InputComp, { name: 'input1', data: 'input1' })
const WrappedInput2 = enhanceComponent(InputComp, { name: 'input1', data: '' })

export default function renderAdvance() {
  const data1 = ' data1'
  const data2 = ''
  return (
        <div >
          <WrappedInput1 data={data1}/>
          <WrappedInput2 data={data2}/>
        </div>
  )
}
