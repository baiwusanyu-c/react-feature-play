````typescript jsx
// 父组件
import React from "react";
import ChildClass from './child-class'

export default class ParentClass extends React.Component {
    render() {
        return (
            <div>
                <ChildClass name='baiwusanyu'/>
            </div>
        );
    }
}

// 子组件
import React from "react";
import PropTypes from 'prop-types';

interface IChildProps {
    name?: string
    age?: number
}

export default class ChildClass extends React.Component<IChildProps> {
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number
    }
    static defaultProps = {
        name: 'stranger',
        age: 20,
    }

    render() {
        return (
            <div>
                <p>年龄：{this.props.age}</p>
                <p>姓名：{this.props.name}</p>
            </div>
        );
    }
}
````