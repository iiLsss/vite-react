import { Table } from 'antd';
import React from 'react';
import { columns, data} from './const'
import classNames from 'classnames/bind';
import s from './index.module.less'
const cx = classNames.bind(s)

const TableAA = () => {
  return (
    <div className={cx('table-wrap')}>
      <Table className={cx('table')} columns={columns} dataSource={data} />
      <Table className={cx('table')} columns={columns} dataSource={data} />
    </div>
  
  )
}

export default TableAA