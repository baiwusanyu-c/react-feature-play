import React, {ReactNode} from "react";
import PropTypes from 'prop-types';
import {Alert} from "antd";
interface IProps {
    children?:ReactNode
}
class CompSlotClass extends React.Component<IProps> {
    static propTypes = {
        children:PropTypes.node,
    }
    static defaultProps = {
        children:undefined,
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default class RenderSlotClass extends React.Component {
    render() {
        return (
            <div>
                <CompSlotClass>
                    <Alert
                        message="Success"
                        description="class 类型组件的普通插槽渲染"
                        type="success"
                    />
                </CompSlotClass>
            </div>
        );
    }
}
