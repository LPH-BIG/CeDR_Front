import React from 'react';
import styles from './index.less';
import { Button, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <div>
        <Select
          style={{ width: '30%' }}
          placeholder="input and select a dataset"
          showSearch={true}
        >
          {<Select.Option key={'id'}>Bone Cancer</Select.Option>}
        </Select>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  );
}
