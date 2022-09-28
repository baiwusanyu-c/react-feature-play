```typescript jsx
// 引入相关的hooks
import { useDispatch, useSelector } from 'react-redux'
// 引入对应的方法
import type { CounterState } from '../../store/features/counterSlice'
import { increment } from '../../store/features/counterSlice'

export default function HelloWorld() {
    // 选择要使用的 slice
  const { value } = useSelector((store: { counter: unknown }) => store.counter) as CounterState
  const dispatch = useDispatch()
  const handleClick = () => {
      // 派发更新，这里在定义时 increment 会接收 payload
    dispatch(increment(1))
  }
  return (
            <button size="large" onClick={handleClick}>
                count is { value } form redux
            </button>
  )
}

```