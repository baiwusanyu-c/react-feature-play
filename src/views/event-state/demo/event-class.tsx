import React, {MouseEvent} from "react";
import { Button } from 'antd'
interface IState {
    num:number
    name:string
}
export default class ParentClass extends React.Component<any,IState>{
    constructor(props:any) {
        super(props)
        this.state = {
            num: 0,
            name:'baiwusanyu'
        };
    }
    handleClick = (e:MouseEvent<HTMLElement>) =>{
        console.log(e)
        this.setState((state:IState,props) => ({
            num: state.num + 1
        }));
    }

    preventClick = (e:MouseEvent<HTMLElement>)=>{
        e.preventDefault()
        this.setState((state:IState,props) => ({
            name: '白雾三语'
        }));
        console.log('The link was clicked.');
    }
    render() {
        return (
            <div>
                <Button type="primary"
                        className='m-2'
                        onClick={this.handleClick}>
                    Click me {this.state.num}
                </Button>
                <Button type="primary" className='m-2'>
                    <a href="#" onClick={this.preventClick}>
                        preventDefault {this.state.name}
                    </a>
                </Button>
            </div>
        );
    }
}
