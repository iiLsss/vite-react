import classNames from "classnames/bind"
import s from './index.module.less'
import { NavLink } from 'react-router-dom'
import { SideBarRoutes } from '../../router/routes'
const cx = classNames.bind(s)

const Sidebar = () => {
  return (
    <div className={cx('sidebar')}>
      <ul>
        {
          SideBarRoutes.map(item => (
            <li>
              <NavLink to={item.path}>
                滴滴滴大大
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar