import {
  HashRouter,
  // RouterProvider,
} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import 'antd/dist/reset.css'
import 'virtual:windi.css'
import './assets/css/antd.css'
// import RoutesList from './router/router'

// 创建根虚拟节点并渲染根组件
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <HashRouter>
        <App />
    </HashRouter>,
  /* <RouterProvider router={RoutesList()} />, */
)
