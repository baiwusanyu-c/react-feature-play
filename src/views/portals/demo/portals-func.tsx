import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { Result } from 'antd'
export default function renderPortalsFunc() {
  const [dom, setDom] = useState<HTMLElement>(document.getElementById('Portals_Func') || document.body)
  useEffect(() => {
    setDom(document.getElementById('Portals_Func') || document.body)
  }, [dom])

  return createPortal(
    (
        <Result
            status="success"
            title="渲染成功"
            subTitle="渲染到 id = &quot;Portals_Func&quot;"/>
    ),
    dom,
  )
}
