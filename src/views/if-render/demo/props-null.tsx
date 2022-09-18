import { useState } from 'react'
import { Button } from 'antd'
import { PayCircleOutlined } from '@ant-design/icons'
interface IProps {
  show: boolean
}
const Comp = (props: IProps) => {
  if (!props.show)
    return (<PayCircleOutlined style={{ fontSize: '2rem', marginLeft: '1rem' }}/>)

  else
    return (null)
}
export default function renderVarIf() {
  const [show, setShow] = useState<boolean>(false)

  return (
        <div className="flex">
            <Button type="primary" onClick={() => setShow(!show)} shape="round">
                点击切换
            </Button>
            <Comp show={show}></Comp>
        </div>
  )
}
