import { lazy } from 'react'

const ReadExcel = lazy(() => import('../page/ReadExcel'))

export const SideBarRoutes = [
  {
    path: 'read-excel',
    title: '读取Excel文件',
    element: <ReadExcel />
  }
]