````typescript jsx
import PropTypes from "prop-types";
import {ReactNode} from "react";
import { Alert } from 'antd';
interface IProps {
    children?:ReactNode
}
Comp.propTypes = {
    children:PropTypes.node,
}
Comp.defaultProps = {
    children:undefined,
}
function Comp(props:IProps){
    return (
        <div>
            {props.children}
        </div>
    )
}
export default function renderSlotFunc(){

    return (
        <div>
           <Comp>
                   <Alert
                       message="Success"
                       description="函数组件的普通插槽渲染"
                       type="success"
                   />
           </Comp>
        </div>
    )
}
````
