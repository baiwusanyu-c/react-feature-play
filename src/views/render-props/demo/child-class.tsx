// 子组件
import React from "react";
import PropTypes from 'prop-types';
interface IChildProps {
    name?:string
    render:Function
}
export default class RenderChildClass extends React.Component<IChildProps> {
    static propTypes = {
        name: PropTypes.string,
        render:PropTypes.func
    }
    static defaultProps = {
        name: 'stranger',
        render:()=>{}
    }
    render() {
        return (
            <div>
                {this.props.render(18)}
                <p>姓名：{this.props.name}</p>
            </div>
        );
    }
}
