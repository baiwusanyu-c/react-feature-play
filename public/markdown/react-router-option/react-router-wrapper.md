```typescript tsx
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
// 创建根虚拟节点并渲染根组件
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <App />
    </HashRouter>,
)

```