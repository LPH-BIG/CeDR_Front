import React from 'react';
import General from '@/pages/General';
import { Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const Index = () => {
  return (
    <div>
      <Tabs defaultActiveKey={'1'}>
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              General Tables
            </span>
          }
          key="1"
        >
          <General key={'general'} />
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
          Subproject
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Cell Drug Association
            </span>
          }
          key="3"
        >
          Cell Drug Association
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Index;
