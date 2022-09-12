````typescript jsx
// 父组件
import React from "react";
import ChildClass from './child-class'
export default class ParentClass extends React.Component {
    render() {
        return (
            <div>
                <ChildClass name='baiwusanyu' render={(age:string)=>{
                    return (
                        <p>在父组件中渲染的 age：{age}</p>
                    )
                }}/>
            </div>
        );
    }
}

// 子组件
import React from "react";
import PropTypes from 'prop-types';
interface IChildProps {
    name?:string
    render:Function
}
export default class ChildClass extends React.Component<IChildProps> {
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
````
