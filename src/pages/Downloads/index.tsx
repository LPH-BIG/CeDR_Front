import React from 'react';
import styles from './index.less';
import { Card, Table, Space, Select, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function Page() {
  const data = [
    {
      description: 'Selected Datasets',
      download: 'Selected_datasets.xlsx',
      link: 'https://ngdc.cncb.ac.cn/cedr/file/Selected_datasets.xlsx',
      total: '67',
      fileSize: '105KB',
    },
    {
      description: 'All Drug Information',
      download: 'drug.csv',
      link: 'https://ngdc.cncb.ac.cn/cedr/file/drug.csv',
      total: '6101',
      fileSize: '1.3MB',
    },
    {
      description: 'All Gene Information',
      download: 'gene.csv',
      link: 'https://ngdc.cncb.ac.cn/cedr/file/gene.csv',
      total: '62760',
      fileSize: '8.3MB',
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
          <a href={record.link}>{record.download}</a>
        </Space>
      ),
    },
    {
      title: 'Number of Items',
      // key: 'action',
      dataIndex: 'total',
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
        {/*<Card type="inner" title="Download the Tool">*/}
        {/*  <a>*/}
        {/*    <strong>Github</strong>*/}
        {/*  </a>*/}
        {/*</Card>*/}
        {/*<Card type="inner" title="Download by Phenotype">*/}
        {/*  <div>*/}
        {/*    <Select*/}
        {/*      style={{ width: '30%' }}*/}
        {/*      placeholder="input and select a dataset"*/}
        {/*      showSearch={true}*/}
        {/*      // suffixIcon={()=>{return(<DownloadOutlined />)}}*/}
        {/*    >*/}
        {/*      {<Select.Option key={'id'}>Bone Cancer</Select.Option>}*/}
        {/*    </Select>*/}
        {/*    &nbsp;*/}
        {/*    <Button type="primary" shape="round" icon={<DownloadOutlined />}>*/}
        {/*      Download*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*</Card>*/}
        <Card style={{ marginTop: 16 }} type="inner" title="Batch Download">
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </Card>
    </div>
  );
}
