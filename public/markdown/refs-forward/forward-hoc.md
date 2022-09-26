```typescript jsx
import type { ForwardedRef, Ref } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import type { InputRef } from 'antd'
import { Input } from 'antd'
interface IProps {
    data: string
    forwardedRef?: ForwardedRef<IRefs>
}
interface IState {
    data: string
}
declare type IRefs = HTMLElement
// 待包裹的组件
class InputComp extends React.Component<IProps, IState> {
    static propTypes = {
        data: PropTypes.string,
        forwardedRef: PropTypes.any,
    }

    static defaultProps = {
        data: '',
        forwardedRef: null,
    }

    constructor(props: IProps) {
        super(props)
        this.state = {
            data: props.data,
        }
    }

    render() {
        return (
            <Input value={this.state.data} 
                   className="mb-2 w-1/2 block" 
                   ref={this.props.forwardedRef as Ref<InputRef>}/>
        )
    }
}

interface IInputOption {
    data: string
}

// 增强函数 返回 HOC
function enhanceComponent(WrappedComponent: typeof InputComp, option: IInputOption) {
    class EnhanceForm extends React.Component<IProps, any> {
        static propTypes = {
            data: PropTypes.string,
            forwardedRef: PropTypes.any,
        }

        static defaultProps = {
            data: '',
            forwardedRef: null,
        }

        // 添加 displayName
        static displayName = 'enhanceComponent'

        constructor(props: IProps) {
            super(props)
            this.state = {
                data: option.data ? option.data + props.data : 'enhanceComponent',
            }
        }

        render() {
            const { forwardedRef } = this.props
            return (<WrappedComponent {...this.props} data={this.state.data} forwardedRef={forwardedRef}/>)
        }
    }
    // 使用 forwardedRef 作为 props 来承接穿法 refs 转发，到最后的获取元素上再使用 ref
    return React.forwardRef((props: IProps, ref: ForwardedRef<IRefs>) => {
        return <EnhanceForm data={props.data} forwardedRef={ref} />
    })
}

const WrappedInput1 = enhanceComponent(InputComp, { data: 'input1' })

export default function renderForwardHoc() {
    const data1 = ' data1'
    const ref = React.createRef()
    const handleClick = () => {
        console.log(ref.current)
    }
    return (
        <div onClick={handleClick}>
            <WrappedInput1 data={data1} ref={ref as ForwardedRef<IRefs>}/>
        </div>
    )
}
```