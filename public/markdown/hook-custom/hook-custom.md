```typescript jsx
import { Button } from 'antd'
import { useEffect, useState } from 'react'
interface IStatus {
  isChange: boolean
}
// 自定义 hook
const useName = (status: boolean) => {
  const [name, setName] = useState<{ val: string }>({
    val: '一点浩然气',
  })
  useEffect(() => {
    if (!status)
      setName({ val: '少年不识愁滋味，爱上层楼。爱上层楼，为赋新词强说愁。' })

    else
      setName({ val: '而今识尽愁滋味，欲说还休。欲说还休，却道“天凉好个秋”！' })
  }, [status])

  return name
}

export default function renderState() {
  const [status, setStatus] = useState<IStatus>({
    isChange: false,
  })
  const name = useName(status.isChange)
  return (
        <div>
            <Button type="primary" shape="round" className="m-2" onClick={() => setStatus({ isChange: !status.isChange })}>
                Click me {status.isChange}
            </Button>
            <Button className="m-2" shape="round">
                   {name.val}
            </Button>
        </div>
  )
}

```