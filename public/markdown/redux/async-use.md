```typescript jsx
// 引入相关的hooks
import { useDispatch, useSelector } from 'react-redux'
// 引入对应的方法
import type { MsgState } from '../../store/features/msgSlice'
import { startRunning } from '../../store/features/msgSlice'

export default function HelloWorld() {
    // 选择要使用的 slice
    const { msg } = useSelector((store: { message: unknown }) => store.message) as IMsgState
    
    const dispatch = useDispatch()
    const handleClick = () => {
        // 派发更新，调用异步方法获取数据
        dispatch(startRunning)
    }
    return (
        <button size="large" onClick={handleClick}>
            msg is ’{ msg }‘ form redux
        </button>
    )
}

```