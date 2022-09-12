import { Button } from 'antd'
import {MouseEvent, useState} from "react";
interface IState {
    num:number
    name:string
}
export default function renderEventFunc (){

    const [count, setCount] = useState<IState>({
        num:0,
        name:'baiwusanyu'
    });
    const preventClick = (e:MouseEvent<HTMLElement>)=>{
        e.preventDefault()
        setCount({...count,name:'白雾三语'})
        console.log('The link was clicked.');
    }

    const handleClick = (e:MouseEvent<HTMLElement>)=>{
        console.log(e)
        setCount({...count,num:count.num + 1})
    }

    return(
        <div>
            <Button type="primary" className='m-2' onClick={handleClick}>
                Click me {count.num}
            </Button>
            <Button type="primary" className='m-2'>
                <a href="#" onClick={preventClick}>
                    preventDefault {count.name}
                </a>
            </Button>
        </div>
    )
}
