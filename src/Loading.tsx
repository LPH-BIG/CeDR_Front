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
