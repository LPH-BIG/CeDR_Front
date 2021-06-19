import React from 'react';
import styles from './index.less';
import { Card, Table, Space, Select, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function Page() {
  const data = [
    {
      description: 'Drug Information',
      download: 'xxx.gz',
      link: 'http:xxxx',
      fileSize: '123MB',
    },
    {
      description: 'Gene Information',
      download: 'xxx.gz',
      link: 'http:xxxx',
      fileSize: '123MB',
    },
    {
      description: 'Cancer Cell Line',
      download: 'xxx.gz',
      link: 'http:xxxx',
      fileSize: '123MB',
    },
    {
      description: 'Human',
      download: 'xxx.gz',
      link: 'http:xxxx',
      fileSize: '123MB',
    },
  ];
  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      // render: text => {text},
    },
    {
      title: 'Download',
      dataIndex: 'download',
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              record.link;
            }}
          >
            {text}
          </a>
        </Space>
      ),
    },
    {
      title: 'File Size',
      // key: 'action',
      dataIndex: 'fileSize',
    },
  ];

  return (
    <div>
      <Card
        title="Downloads"
        style={{ justifyContent: 'center' }}
        bordered={true}
        hoverable={true}
      >
        <Card type="inner" title="Download the Tool">
          <a>
            <strong>Github</strong>
          </a>
        </Card>
        <Card type="inner" title="Download by Phenotype">
          <div>
            <Select
              style={{ width: '30%' }}
              placeholder="input and select a dataset"
              showSearch={true}
              // suffixIcon={()=>{return(<DownloadOutlined />)}}
            >
              {<Select.Option key={'id'}>Bone Cancer</Select.Option>}
            </Select>
            &nbsp;
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
          </div>
        </Card>
        <Card style={{ marginTop: 16 }} type="inner" title="Batch Download">
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </Card>
    </div>
  );
}
