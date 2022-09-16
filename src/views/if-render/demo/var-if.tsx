import { ReactNode, useEffect, useState } from "react";
import {Button} from "antd";
import {PayCircleOutlined,DollarCircleOutlined} from '@ant-design/icons'
export default function renderVarIf(){

    const [show, setShow] = useState<boolean>(false);

    const [comp, setComp] = useState<ReactNode>(<PayCircleOutlined style={{fontSize:'2rem',marginLeft:'1rem' }}/>);
    useEffect( ()=>{
        if(show){
            setComp(<PayCircleOutlined style={{fontSize:'2rem',marginLeft:'1rem' }}/>)
        }else{
            setComp(<DollarCircleOutlined style={{fontSize:'2rem',marginLeft:'1rem' }}/>)
        }
    },[show])

    return (
        <div className='flex'>
            <Button type="primary" onClick={()=> setShow(!show)} shape='round'>
                点击切换
            </Button>
            {comp}
        </div>
    )
}
