import React, { useState } from 'react';
import General from '@/pages/General';
import { Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import Subproject from '@/pages/Subproject/[index]';
import { history } from 'umi';
const { TabPane } = Tabs;
const Index = () => {
  const [activeKey, setActivekey] = useState('1');
  const changeActive = (active: string) => {
    setActivekey(active);
  };
  return (
    <div>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={(activeKey) => {
          // console.log(activeKey)
          if (activeKey == '1') {
            history.push('/browse');
          }
          if (activeKey == '2') {
            history.push('/subproject/undefined');
          }
          if (activeKey == '3') {
            history.push('/association');
          }
        }}
      >
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              General Tables
            </span>
          }
          key="1"
        >
          <General />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Subproject
            </span>
          }
          key="2"
          disabled
        >
          {/*<Subproject />*/}
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Cell Drug Association
            </span>
          }
          key="3"
          disabled
        >
          Cell Drug Association
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Index;
