import React, { Suspense, PropsWithChildren} from 'react'
import { Outlet } from 'react-router-dom'
import classNames from "classnames/bind"
import s from './index.module.less'
import Sidebar from './Sidebar'
const cx = classNames.bind(s)

const Layout: React.FC = (props) => {
  return (
      <section className={cx('layout')}>
        <Sidebar />
    <Suspense fallback={<>加载中</>}>

        <Outlet />
    </Suspense>

      </section>
     
  )
}

export default Layout