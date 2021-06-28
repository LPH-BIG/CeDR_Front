import React from 'react';
import styles from './index.less';
import { Button, Select, PageHeader, Row, Col, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;
export default function Page() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Search"
        // subTitle="This is a subtitle"
      />
      <Divider />
      <Row>
        <Col push={2}>
          <Title level={4}>Cell Type:</Title>
        </Col>
        <Col xs={18} sm={18} md={12} lg={12} xl={12} push={3}>
          <div>
            <Select
              style={{ width: '70%' }}
              placeholder="input and select a keyword"
              showSearch={true}
            >
              {<Select.Option key={'id'}>Bone Cancer</Select.Option>}
            </Select>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col push={2}>
          <Title level={4}>Drug name:</Title>
        </Col>
        <Col xs={18} sm={18} md={12} lg={12} xl={12} push={3}>
          <div>
            <Select
              style={{ width: '70%' }}
              placeholder="input and select a keyword"
              showSearch={true}
            >
              {<Select.Option key={'id'}>Bone Cancer</Select.Option>}
            </Select>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
