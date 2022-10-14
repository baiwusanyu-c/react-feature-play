```typescript jsx
// router
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/path',{ state: { id:123 } })

// component
import { useLocation } from 'react-router-dom'

const { state } = useLocation()
console.log(state)
```