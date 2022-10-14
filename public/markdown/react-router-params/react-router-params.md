```typescript jsx
// router option
// 路由配置对象中就要确定 传参
// ....
const router = [{
  path: 'path/:id',
  index: true,
  element: <ReactRouterParams/>,
  meta: {
    title: 'Router 传参',
  },
}]
// ....

// router
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/path/123')

// component
import { useParams } from 'react-router-dom'

const params = useParams();
console.log(params)

```