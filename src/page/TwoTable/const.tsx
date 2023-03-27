import type { ColumnsType } from 'antd/es/table';
import { Tooltip } from 'antd'
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    render: (_, record) => {
      if ( Array.isArray(record.address) ){
        return record.address.map(item=> (
          <Tooltip placement="topLeft" title={item}>{item}<br /></Tooltip>
        ))
      }
      return record.address
    },
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

export const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: [
      'London No. 2 Lake Park, London No. 2 Lake Park',
      'London No. 2 Lake Park, London No. 2 Lake Park',
      'London No. 2 Lake Park, London No. 2 Lake Park',
      'London No. 2 Lake Park, London No. 2 Lake Park',
    ],
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
