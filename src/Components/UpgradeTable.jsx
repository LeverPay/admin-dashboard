import React from 'react';
import { Tabs } from 'antd';
import UserDataTable from './UserDataTable';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Request    `,
    children: <UserDataTable />,
  },
  {
    key: '2',
    label: `     Approved`,
    children: <UserDataTable />,
  },
  {
    key: '3',
    label: `Pending`,
    children: <UserDataTable />,
  },
];

const UpgradeTable = () => (
  <Tabs defaultActiveKey="1" onChange={onChange} className="p-5">
    {items.map((item) => (
      <TabPane tab={item.label} key={item.key}>
        {item.children}
      </TabPane>
    ))}
  </Tabs>
);

export default UpgradeTable;
