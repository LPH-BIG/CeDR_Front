import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Space } from 'antd';
const Loading = () => {
  return (
    <div>
      <Space>
        <LoadingOutlined />
        <strong>loading....</strong>
      </Space>
    </div>
  );
};

export default Loading;
// scp -P 22004 -r /Users/kanghongen/WebstormProjects/cellular_response_fronted/dist/cedr root@192.168.164.83:/cedr/dist
// ssh -p 22004 root@192.168.164.83
