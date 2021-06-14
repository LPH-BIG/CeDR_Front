import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { message, Tabs } from 'antd';
import { history } from '@@/core/history';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import General from '@/pages/General';
import Subproject from './components/subproject';

const { TabPane } = Tabs;
const Index = ({
  match: {
    params: { subproject },
  },
}) => {
  console.log(subproject);
  if (subproject == 'undefined') {
    message.error('please select a subproject!');
    history.push('/browse');
  }
  // useEffect(()=>{
  //   console.log(subproject);
  // },[subproject])

  const [activeKey, setActivekey] = useState('2');
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
            history.push('/subproject/' + subproject);
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
          {/*<General />*/}
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Subproject
            </span>
          }
          key="2"
        >
          <Subproject />
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
