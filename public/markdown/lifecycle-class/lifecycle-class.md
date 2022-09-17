```typescript jsx
import React from "react";
import {Button} from "antd";

interface IState {
    text?:string
}
export default class LifecycleClass extends React.Component<unknown,IState> {
    constructor(props:unknown) {
        super(props);
        console.log('constructor running...')
        this.state = {
            text:'自然选择号'
        }
    }
    static getDerivedStateFromProps = (props:unknown,state:IState) =>{
        console.log(props, state)
        console.log('getDerivedStateFromProps running...')
        return null
    }
    componentDidMount = () =>{
        console.log('componentDidMount running...')
    }
    getSnapshotBeforeUpdate = () =>{
        console.log('getSnapshotBeforeUpdate running...')
    }

    shouldComponentUpdate = () =>{
        console.log('shouldComponentUpdate running...')
        return true
    }
    componentDidUpdate = (prevProps:unknown,prevState:IState) =>{
        console.log(prevProps, prevState)
        console.log('componentDidUpdate running...')
    }

    componentWillUnmount = () =>{
        console.log('componentWillUnmount running...')
    }
    handleClick = () =>{
        this.setState({text:'前进四！！'})
    }
    render() {
        console.log('render running...')
        return (
            <div>
                <Button className='m-2' type='primary' shape='round' onClick={this.handleClick}>
                    {this.state.text}
                </Button>
            </div>
        );
    }
}

```
