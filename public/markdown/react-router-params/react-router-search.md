```typescript jsx
// router
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/path?id=123')

// component
import { useLocation, useSearchParams } from 'react-router-dom'

const { search } = useLocation()
// 这里是字符串，可以用 qs 转一下
console.log(search)

const [searchParams, setSearchParams] = useSearchParams();
console.log(searchParams)

```