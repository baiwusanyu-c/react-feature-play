```typescript jsx
import { Button } from 'antd'
import type { MouseEvent } from 'react'
import { useState } from 'react'
interface IState {
  num: number
  name: string
}
export default function renderState() {
  const [count, setCount] = useState<IState>({
    num: 0,
    name: '一点浩然气',
  })
  const preventClick = () => {
    setCount({ ...count, name: '千里快哉风' })
  }

  const handleClick = () => {
    setCount({ ...count, num: count.num + 1 })
  }

  return (
        <div>
            <Button type="primary" shape="round" className="m-2" onClick={handleClick}>
                Click me {count.num}
            </Button>
            <Button className="m-2" shape="round" onClick={preventClick}>
                   {count.name}
            </Button>
        </div>
  )
}

```