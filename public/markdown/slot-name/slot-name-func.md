````typescript jsx
import PropTypes from 'prop-types'
import { Alert } from 'antd'
interface IProps {
    MySlot?: JSX.Element
}
Comp.propTypes = {
    MySlot: PropTypes.element,
}
Comp.defaultProps = {
    MySlot: undefined,
}
function Comp(props: IProps) {
    const { MySlot } = props
    return (
        <div>
            { MySlot }
        </div>
    )
}
export default function renderSlotFunc() {
    const mySlot = (<Alert
        message="Success"
        description="函数组件的具名插槽渲染"
        type="success" />)
    return (
        <div>
            <Comp MySlot={ mySlot } />
        </div>
    )
}
````
