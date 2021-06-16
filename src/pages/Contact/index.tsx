import React from 'react';
import styles from './index.less';
import { Card, Col, Descriptions, Divider, Row } from 'antd';

export default function Page() {
  return (
    <div>
      <Row justify={'center'}>
        <Col className={styles.contact} xs={2} sm={4} md={6} lg={8} xl={10}>
          <h1 className={styles.title}>CONTACT US</h1>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col className={styles.content}>
          <p>
            For inquiries related to the analysis of the data, please contact us
            at pjia@big.ac.cn. For all other matters, please refer to the
            information below.
          </p>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col span={8}>
          <Card title="Team Leader" bordered={false}>
            Peilin Jia
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row justify={'center'}>
        <Col span={18}>
          <Descriptions title="Data Analysis" bordered>
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Divider />
      <Row justify={'center'}>
        <Col span={18}>
          <Descriptions title="Web Development" bordered>
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}
