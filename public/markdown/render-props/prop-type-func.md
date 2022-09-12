````typescript jsx
// 父组件
import Child from './child-func'
import React from "react";
export default function parentCompnent(){
    return (
        <div>
            <Child name='baiwusanyu' render={(age:string)=>{
                return (
                    <p>父组件中渲染的 age：{age}</p>
                )
            }}/>
        </div>
    )
}


// 子组件
import PropTypes from 'prop-types';

interface IChildProps {
    name?:string
    render:Function
}
childComponent.propTypes = {
    name: PropTypes.string,
    render:PropTypes.func
}
childComponent.defaultProps = {
    name: 'stranger',
    render:()=>{}
}
export default function childComponent(props:IChildProps){

    return (
        <div>
            {props.render(18)}
            <p>姓名：{props.name}</p>
        </div>
    )
}
````
