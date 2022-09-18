````typescript jsx
import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'
interface IProps {
    MySlot: JSX.Element
}
class CompSlotClass extends React.Component<IProps> {
    static propTypes = {
        MySlot: PropTypes.node,
    }

    static defaultProps = {
        MySlot: undefined,
    }

    render() {
        return (
            <div>
                {this.props.MySlot}
            </div>
        )
    }
}

export default class RenderSlotClass extends React.Component {
    mySlot = () => (<Alert
        message="Success"
        description="函数组件的具名插槽渲染"
        type="success" />)

    render() {
        return (
            <div>
                <CompSlotClass MySlot={ this.mySlot() } />

            </div>
        )
    }
}
````
