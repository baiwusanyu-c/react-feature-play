import { useState } from 'react'
import { Button } from 'antd'
import {
  DollarCircleOutlined,
  PayCircleOutlined,
  PoundCircleOutlined,
} from '@ant-design/icons'
export default function renderVarIf() {
  const [show, setShow] = useState<boolean>(false)
  return (
        <div className="flex">
            <Button type="primary" onClick={() => setShow(!show)} shape="round">
                点击切换
            </Button>

            {show
              ? <PayCircleOutlined style={{ fontSize: '2rem', marginLeft: '1rem' }}/>
              : <DollarCircleOutlined style={{ fontSize: '2rem', marginLeft: '1rem' }}/>}

            {show && <PoundCircleOutlined style={{ fontSize: '2rem', marginLeft: '1rem' }}/>}
        </div>
  )
}
