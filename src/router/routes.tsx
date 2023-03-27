import { lazy } from 'react'

const ReadExcel = lazy(() => import('../page/ReadExcel'))
const TwoTable = lazy(() => import('../page/TwoTable'))

export const SideBarRoutes = [
  {
    path: 'read-excel',
    title: '读取Excel文件',
    element: <ReadExcel />
  },
  {
    path: 'two-table',
    title: '表格对齐',
    element: <TwoTable />
  }
]