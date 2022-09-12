import { useRoutes,Navigate } from 'react-router-dom';
import Home from '../views/home/home'
import Props from '../views/props'
import PropTypes from '../views/prop-types'
import RenderProps from '../views/render-props'
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
            title: 'props 属性传递',
        }
    },
    {
        path: 'propTypes',
        element: <PropTypes />,
        meta: {
            title: 'PropTypes 的类型检查',
        }
    },
    {
        path: 'renderProps',
        element: <RenderProps />,
        meta: {
            title: 'render props',
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
