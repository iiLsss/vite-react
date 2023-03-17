import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'

import {SideBarRoutes} from './routes'

export const routers = [
  {
    path: '/',
    element: <Layout />,
    children: [
      ...SideBarRoutes
    ]
  }
]


export default createBrowserRouter(routers)