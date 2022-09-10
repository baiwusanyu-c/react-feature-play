import { useRoutes,Navigate } from 'react-router-dom';
import Home from '../views/home/home'
import Props from '../views/props/props'
export const routes = [
    {
        path: '/',
        element: <Navigate to= '/home'/>,
       /* children: [
            {
                path: 'home',
                element: <Home />,
                meta: {
                    title: '首页',
                }
            }
        ]*/
    },
    {
        path: 'home',
        element: <Home />,
        meta: {
            title: '首页',
        }
    },
    {
        path: 'props',
        element: <Props />,
        meta: {
            title: 'props 属性传递 Render Props',
        }
    },
    /*{
        path: '*',
        element: <Page404 />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    },*/
];
const Routes = () => (
    useRoutes(routes)
)
export default Routes;